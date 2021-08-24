<template>
  <v-theme-provider dark>
    <base-section
      class="dark text-center"
      space="56"
    >
      <v-form>
        <v-container style="max-width: 1150px">
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="5"
            >
              <v-row>
                <v-col
                  cols="12"
                  class="text-left"
                >
                  <base-img
                    :src="require(`@/assets/images/logo-dark.png`)"
                    contain
                    max-width="250"
                    width="100%"
                  />
                  <p
                    class="
                      text-body-1
                      grey--text
                      text--lighten-1 text-left
                      mb-10
                      mt-5
                    "
                  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Illo pariatur quidem, quis modi iure nihil commodi suscipit,
                    corporis dicta adipisci, voluptatum quia cupiditate. Nulla
                    minus voluptatum nostrum deleniti, asperiores facere.
                  </p>
                  <v-btn
                    class="
                      font-weight-bold
                      mb-12
                      v-btn v-btn--outlined v-btn--tile
                      theme--dark
                      v-size--x-large
                      white--text
                    "
                    outlined
                  >
                    More Info
                  </v-btn>
                  <div class="pt-2 mb-1 d-flex">
                    <div
                      class="
                        base-avatar
                        d-inline-flex
                        mb-3
                        align-self-start
                        pt-8
                      "
                    >
                      <v-icon
                        style="font-size: 30px"
                        class="mr-5"
                        right
                      >
                        mdi-map-marker-outline
                      </v-icon>
                    </div>
                    <div class="ml-6">
                      <p
                        class="
                          text-uppercase text-h6
                          font-weight-bold
                          mb-3
                          text-left
                          white--text
                        "
                      >
                        address
                      </p>
                      <p
                        class="
                          base-body
                          text-body-1
                          mx-auto
                          grey--text
                          text--lighten-1 text-left
                          mb-0
                        "
                      >
                        8553 N. Beach St. Ste. 227
                        <br>
                        Stockholm, Norway
                      </p>
                    </div>
                  </div>
                  <v-divider />
                  <div class="pt-2 mb-1 d-flex">
                    <div
                      class="
                        base-avatar
                        d-inline-flex
                        mb-3
                        align-self-start
                        pt-8
                      "
                    >
                      <v-icon
                        style="font-size: 30px"
                        class="mr-5"
                        right
                      >
                        mdi-phone-dial-outline
                      </v-icon>
                    </div>
                    <div class="ml-6">
                      <p
                        class="
                          text-uppercase text-h6
                          font-weight-bold
                          mb-3
                          text-left
                          white--text
                        "
                      >
                        Phone
                      </p>
                      <p
                        class="
                          base-body
                          text-body-1
                          mx-auto
                          grey--text
                          text--lighten-1 text-left
                          mb-0
                        "
                      >
                        +47 (800) 433 744
                        <br>
                        +47 (800) 533 523
                      </p>
                    </div>
                  </div>
                  <v-divider />
                  <div class="pt-2 mb-1 d-flex">
                    <div
                      class="
                        base-avatar
                        d-inline-flex
                        mb-3
                        align-self-start
                        pt-8
                      "
                    >
                      <v-icon
                        style="font-size: 30px"
                        class="mr-5"
                        right
                      >
                        mdi-email
                      </v-icon>
                    </div>
                    <div class="ml-6">
                      <p
                        class="
                          text-uppercase text-h6
                          font-weight-bold
                          mb-3
                          text-left
                          white--text
                        "
                      >
                        email
                      </p>
                      <p
                        class="
                          base-body
                          text-body-1
                          mx-auto
                          grey--text
                          text--lighten-1 text-left
                          mb-0
                        "
                      >
                        donvold@gmail.com
                        <br>
                        proofsof@norway.com
                      </p>
                    </div>
                  </div>
                  <v-divider />
                </v-col>
              </v-row>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="2"
              class="hidden-sm-and-down"
            >
              <v-divider vertical />
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="5"
            >
              <div
                class="
                  text-body-2
                  font-weight-regular
                  mb-1
                  text-left
                  white--text
                  grey--text
                "
              >
                Drop us a Line
              </div>
              <h3
                class="
                  text-uppercase text-h6
                  font-weight-bold
                  mb-1
                  text-left
                  white--text
                "
              >
                MAIL US YOUR MESSAGE
              </h3>
              <v-divider
                class="v-responsive base-divider primary mr-auto mb-6"
                style="max-width: 28px"
              />
              <v-text-field
                label="Name"
                single-line
                outlined
                dense
              />
              <v-text-field
                label="Email"
                single-line
                outlined
                dense
              />
              <v-text-field
                label="Subject"
                single-line
                outlined
                dense
              />
              <v-textarea
                outlined
                name="input-7-4"
                label="Your Need & Message"
                dense
              />
              <v-btn
                class="
                  font-weight-bold
                  mb-12
                  v-btn v-btn--outlined v-btn--tile
                  theme--dark
                  v-size--x-large
                  white--text
                "
                outlined
              >
                Send Message
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </base-section>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'SectionNews',

    provide: {
      heading: { align: 'center' },
    },
  }
</script>
