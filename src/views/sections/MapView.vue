<template>
  <main>
    <div class="sidebar">
      <div class="heading">
        <h3>Find places you want...</h3>
      </div>
      <div
        id="listings"
        class="listings"
      />
    </div>
    <div id="map" />
  </main>
</template>

<script>
  import mapboxgl from 'mapbox-gl'
  import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
  import * as turf from '@turf/turf'

  // geo data from local
  import geoData from '../../assets/json/geoJSON.json'

  export default {
    name: 'MapboxMap',
    data () {
      // Set initial data, this.createMap() configures event listeners that update data based on user interaction
      return {
        token:
          'pk.eyJ1IjoicnluZGluYWxleCIsImEiOiJja3NqajVpNTMyOHVuMnVwMjQ1aTYxeTZ6In0.jSk9JMEDVGmO5LtYJ4Ejyg',
        stores: geoData,
        center: [-77.034084, 38.909671], // St. Paul
        zoom: 10.5,
        filterEl: '',
        listingEl: '',
        categories: ['Specialties', 'Attractions', 'Landmarks', 'Motifs'],
        type: ['Video', 'Image'],
      }
    },
    mounted () {
      // create the map after the component is mounted
      this.createMap()
    },
    methods: {
      /**
       * Using the coordinates (lng, lat) for
       * (1) the search result and
       * (2) the closest store
       * construct a bbox that will contain both points
       */
      getBbox (sortedStores, storeIdentifier, searchResult) {
        var lats = [
          sortedStores.features[storeIdentifier].geometry.coordinates[1],
          searchResult.coordinates[1],
        ]
        var lons = [
          sortedStores.features[storeIdentifier].geometry.coordinates[0],
          searchResult.coordinates[0],
        ]
        var sortedLons = lons.sort(function (a, b) {
          if (a > b) {
            return 1
          }
          if (a.distance < b.distance) {
            return -1
          }
          return 0
        })
        var sortedLats = lats.sort(function (a, b) {
          if (a > b) {
            return 1
          }
          if (a.distance < b.distance) {
            return -1
          }
          return 0
        })
        return [
          [sortedLons[0], sortedLats[0]],
          [sortedLons[1], sortedLats[1]],
        ]
      },
      /**
       * Add a marker to the map for every store listing.
       **/
      addMarkers () {
        /* For each feature in the GeoJSON object above: */
        this.stores.features.map((marker, i) => {
          /* Create a div element for the marker. */
          var el = document.createElement('div')
          /* Assign a unique `id` to the marker. */
          el.id = 'marker-' + marker.properties.id
          /* Assign the `marker` class to each marker for styling. */
          el.className = 'marker'
          el.style.backgroundImage = `url(${require(`@/assets/images/marker${(i % 4) + 1}.png`)})`

          /**
           * Create a marker using the div element
           * defined above and add it to the map.
           **/
          new mapboxgl.Marker(el, { offset: [0, -23] })
            .setLngLat(marker.geometry.coordinates)
            .addTo(this.map)

          /**
           * Listen to the element and when it is clicked, do three things:
           * 1. Fly to the point
           * 2. Close all other popups and display popup for clicked store
           * 3. Highlight listing in sidebar (and remove highlight for all other listings)
           **/
          el.addEventListener('click', (e) => {
            /* Fly to the point */
            this.flyToStore(marker)
            /* Close all other popups and display popup for clicked store */
            this.createPopUp(marker, i)
            /* Highlight listing in sidebar */
            var activeItem = document.getElementsByClassName('active')
            e.stopPropagation()
            if (activeItem[0]) {
              activeItem[0].classList.remove('active')
            }
            var listing = document.getElementById(
              'listing-' + marker.properties.id,
            )
            listing.classList.add('active')
          })
        })
      },

      /**
       * Add a listing for each store to the sidebar.
       **/
      buildLocationList (data) {
        data.features.map((store, index) => {
          /**
           * Create a shortcut for `store.properties`,
           * which will be used several times below.
           **/
          var prop = store.properties

          /* Add a new listing section to the sidebar. */
          var listings = document.getElementById('listings')
          var listing = listings.appendChild(document.createElement('div'))
          /* Assign a unique `id` to the listing. */
          listing.id = 'listing-' + prop.id
          /* Assign the `item` class to each listing for styling. */
          listing.className = 'item'

          /* Add the link to the individual listing created above. */
          var link = listing.appendChild(document.createElement('a'))
          link.href = '#'
          link.className = 'title'
          link.id = 'link-' + prop.id
          link.innerHTML = prop.address

          /* Add details to the individual listing. */
          var details = listing.appendChild(document.createElement('div'))
          details.innerHTML = prop.city
          if (prop.phone) {
            details.innerHTML += ' &middot; ' + prop.phoneFormatted
          }

          /**
           * Listen to the element and when it is clicked, do four things:
           * 1. Update the `currentFeature` to the store associated with the clicked link
           * 2. Fly to the point
           * 3. Close all other popups and display popup for clicked store
           * 4. Highlight listing in sidebar (and remove highlight for all other listings)
           **/
          link.addEventListener('click', (e) => {
            for (var i = 0; i < data.features.length; i++) {
              if (e.target.id === 'link-' + data.features[i].properties.id) {
                var clickedListing = data.features[i]
                this.flyToStore(clickedListing)
                this.createPopUp(clickedListing, index)
              }
            }
            var activeItem = document.getElementsByClassName('active')
            if (activeItem[0]) {
              activeItem[0].classList.remove('active')
            }
            e.target.parentNode.classList.add('active')
          })
        })
      },

      /**
       * Use Mapbox GL JS's `flyTo` to move the camera smoothly
       * a given center point.
       **/
      flyToStore (currentFeature) {
        this.map.flyTo({
          center: currentFeature.geometry.coordinates,
          zoom: 15,
        })
      },

      /**
       * Create a Mapbox GL JS `Popup`.
       **/
      createPopUp (currentFeature, i) {
        var popUps = document.getElementsByClassName('mapboxgl-popup')
        if (popUps[0]) popUps[0].remove()
        new mapboxgl.Popup({ closeOnClick: false })
          .setLngLat(currentFeature.geometry.coordinates)
          .setHTML(`<div class='popup-body'><img src='https://picsum.photos/500/300?image=${i * 5 + 10}' /><div class='popup-text'><div>Type: ${this.type[i % 2]}</div><div>Cat: ${this.categories[i % 4]}</div><div>${currentFeature.properties.country}</div></div></div>`)
          .addTo(this.map)
      },
      createMap () {
        /* This will let you use the .remove() function later on */
        if (!('remove' in Element.prototype)) {
          Element.prototype.remove = function (e) {
            if (this.parentNode) {
              this.parentNode.removeChild(this)
            }
          }
        }
        // instantiate map.  this method runs once after the vue component is mounted to the dom
        this.map = new mapboxgl.Map({
          accessToken: this.token,
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: this.center, // use initial data as default
          zoom: this.zoom,
          attributionControl: false,
          minZoom: 4,
        })

        console.log(this.map.getZoom())
        // disable map rotation using right click + drag
        this.map.dragRotate.disable()

        // disable map rotation using touch rotation gesture
        this.map.touchZoomRotate.disableRotation()
        /* Assign a unique ID to each store */

        this.stores.features.map((store, i) => {
          store.properties.id = i
        })
        this.map.on('load', () => {
          // Add source for admin-1 Boundaries
          this.map.addSource('admin-1', {
            type: 'vector',
            url: 'mapbox://mapbox.boundaries-adm1-v3',
          })
          // Add a layer with boundary polygons
          this.map.addLayer(
            {
              id: 'admin-1-fill',
              type: 'fill',
              source: 'admin-1',
              'source-layer': 'boundaries_admin_1',
              paint: {
                'fill-color': '#CCCCCC',
              },
            },
            // This final argument indicates that we want to add the Boundaries layer
            // before the `waterway-label` layer that is in the map from the Mapbox
            // Light style. This ensures the admin polygons will be rendered on top of
            // the
            'waterway-label',
          )
          /* Add the data to your map as a layer */
          // this.map.addLayer({
          //   id: 'locations',
          //   type: 'circle',
          //   /* Add a GeoJSON source containing place coordinates and information. */
          //   source: {
          //     type: 'geojson',
          //     data: this.stores,
          //   },
          // })

          const geocoder = new MapboxGeocoder({
            accessToken: this.token, // Set the access token
            mapboxgl: mapboxgl, // Set the mapbox-gl instance
            marker: true, // Use the geocoder's default marker style
            bbox: [-77.210763, 38.803367, -76.853675, 39.052643], // Set the bounding box coordinates
          })

          this.map.addControl(geocoder, 'top-left')
          /**
           * Add all the things to the page:
           * - The location listings on the side of the page
           * - The markers onto the map
           */
          this.buildLocationList(this.stores)
          this.addMarkers()
          geocoder.on('result', (ev) => {
            const searchResult = ev.result.geometry
            // Code for the next step will go here
            var options = { units: 'miles' }
            this.stores.features.map((store) => {
              Object.defineProperty(store.properties, 'distance', {
                value: turf.distance(searchResult, store.geometry, options),
                writable: true,
                enumerable: true,
                configurable: true,
              })
            })

            this.stores.features.sort((a, b) => {
              if (a.properties.distance > b.properties.distance) {
                return 1
              }
              if (a.properties.distance < b.properties.distance) {
                return -1
              }
              return 0 // a must be equal to b
            })
            const listings = document.getElementById('listings')
            while (listings.firstChild) {
              listings.removeChild(listings.firstChild)
            }
            this.buildLocationList(this.stores)
            /* Open a popup for the closest store. */
            this.createPopUp(this.stores.features[0])

            /** Highlight the listing for the closest store. */
            var activeListing = document.getElementById(
              'listing-' + this.stores.features[0].properties.id,
            )
            activeListing.classList.add('active')
            /**
             * Adjust the map camera:
             * Get a bbox that contains both the geocoder result and
             * the closest store. Fit the bounds to that bbox.
             */
            var bbox = this.getBbox(this.stores, 0, searchResult)
            this.map.fitBounds(bbox, {
              padding: 100,
            })
          })
        })
      },
    },
  }
</script>

<style>
@import "../../assets/css/map.css";
@import "../../assets/css/map-gl-geocoder-styles.css";
@import "../../assets/css/map-styles.css";
.mapboxgl-ctrl-geocoder {
  border: 0;
  border-radius: 0;
  position: relative;
  top: 0;
  width: 800px;
  margin-top: 0;
}

.mapboxgl-ctrl-geocoder > div {
  min-width: 100%;
  margin-left: 0;
}
</style>
