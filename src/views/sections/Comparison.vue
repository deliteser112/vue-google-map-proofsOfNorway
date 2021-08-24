<template>
  <base-section
    id="service-features"
  >
    <v-img
      :src="require('@/assets/images/logo.png')"
      class="mx-auto mb-8"
      max-width="128"
    />

    <base-section-heading title="Service Comparison">
      Easier to achieve critical mass the smaller the country is due to lower competition intensity and higher degree of inhabitants activity.
    </base-section-heading>

    <v-container>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          md="7"
        >
          <v-simple-table>
            <thead>
              <tr>
                <th />
                <th />
                <th />
              </tr>
            </thead>

            <tbody class="text-body-1">
              <tr
                v-for="([name, one, two], i) in features"
                :key="i"
              >
                <td v-text="name" />

                <td class="text-center font-weight-bold">
                  <template v-if="typeof one === 'boolean'">
                    <v-icon :color="one ? 'success' : 'error'">
                      mdi-{{ one ? 'check' : 'close' }}
                    </v-icon>
                  </template>

                  <template v-else>
                    {{ one }}
                  </template>
                </td>

                <td class="text-center font-weight-bold">
                  <template v-if="typeof two === 'boolean'">
                    <v-icon :color="two ? 'success' : 'error'">
                      mdi-{{ two ? 'check' : 'close' }}
                    </v-icon>
                  </template>

                  <template v-else>
                    {{ two }}
                  </template>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-col>

        <v-col
          cols="12"
          md="5"
        >
          <v-card
            elevation="16"
            class="mb-12"
          >
            <v-img
              :src="require('@/assets/images/pricing.jpg')"
              max-width="100%"
            />
          </v-card>

          <div class="text-center">
            <base-btn
              :tile="false"
              color="primary"
              href="#"
              rounded
            >
              Getting Start

              <v-icon right>
                mdi-rocket
              </v-icon>
            </base-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionProChart',

    data: () => ({
      features: [
        ['Hotels, Cabins, Apartments, Bed & Breakfast', true, true],
        ['Restaurents, Cafes, Local food etc', true, true],
        ['Sightseeing tours, Guides, Boat/equipment rental', true, true],
        ['Museums, Suvenirs', false, true],
        ['Stores', false, true],
      ],
    }),
  }
</script>
