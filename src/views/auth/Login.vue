<template>
  <v-theme-provider>
    <base-section
      class="text-center section-style"
      space="56"
    >
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-container style="max-width: 500px">
          <v-row>
            <v-col
              cols="12"
              sm="12"
            >
              <!-- <v-img
                :src="require('@/assets/images/logo.png')"
                class="mx-auto mb-8 hidden-sm-and-down"
                max-width="128"
              /> -->
              <div class="logo-style mb-5">
                <base-img
                  :src="require('@/assets/images/logo.png')"
                  class="mr-3"
                  contain
                  max-width="46"
                  width="100%"
                />

                <base-img
                  :src="
                    require(`@/assets/images/logo-${
                      $vuetify.theme.isDark ? 'dark' : 'light'
                    }.svg`)
                  "
                  contain
                  max-width="180"
                  width="100%"
                />
              </div>
              <v-card class="login-form">
                <div class="form-title">
                  <h3 class="mb-1 text-left">
                    Log in
                  </h3>
                  <h3 class="text-body-2 font-weight-thin text-right">
                    or
                    <router-link
                      to="/auth/register"
                      style="text-decoration: none"
                    >
                      Create an account
                    </router-link>
                  </h3>
                </div>
                <v-divider
                  class="v-responsive base-divider primary mr-auto mb-6"
                  style="max-width: 28px"
                />
                <v-text-field
                  v-model="email"
                  label="Email Address"
                  outlined
                  dense
                  :rules="emailRules"
                  required
                />
                <v-text-field
                  label="Password"
                  outlined
                  dense
                  hint="At least 8 characters"
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required]"
                  :type="show ? 'text' : 'password'"
                  counter
                  @click:append="show = !show"
                />
                <div class="form-title">
                  <v-checkbox label="Remember me" />
                  <h3 class="text-body-2 font-weight-thin text-right">
                    <router-link
                      to="/auth/forgot-password"
                      style="text-decoration: none"
                    >
                      Forgot Password?
                    </router-link>
                  </h3>
                </div>
                <v-btn
                  type="submit"
                  class="mb-4 btn-auth"
                  :loading="loading"
                  :disabled="loading"
                  color="secondary"
                  @click="submitLogin((loader = 'loading'))"
                >
                  Log In
                </v-btn>
                <div class="auth-with mb-4">
                  <v-divider />
                  <p class="text-body-2 px-4 mb-0">
                    or login in with
                  </p>
                  <v-divider />
                </div>
                <v-row>
                  <v-col
                    cols="12"
                    md="6"
                  >
                    <v-btn
                      class="btn-auth"
                      color="orange darken-2"
                      dark
                    >
                      <v-icon
                        dark
                        left
                      >
                        mdi-google-plus
                      </v-icon>
                      Google
                    </v-btn>
                  </v-col>
                  <v-col
                    cols="12"
                    md="6"
                  >
                    <v-btn
                      class="btn-auth"
                      color="primary"
                      dark
                    >
                      <v-icon
                        dark
                        left
                      >
                        mdi-facebook
                      </v-icon>
                      FaceBook
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </base-section>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        valid: true,
        loader: null,
        loading: false,
        show: false,
        password: 'Password',
        email: '',
        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        rules: {
          required: (value) => !!value || 'Required.',
          min: (v) => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => "The email and password you entered don't match",
        },
      }
    },

    provide: {
      heading: { align: 'center' },
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    },
    methods: {
      submitLogin () {
        this.$refs.form.validate()
      },
    },
  }
</script>
<style scoped>
@import "../../assets/css/custom-loader.css";
.logo-style {
  display: flex;
  justify-content: center;
}
.section-style {
  position: relative;
  padding: 10px;
  height: 100%;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
.login-form {
  background-color: white !important;
  padding: 35px;
  box-shadow: 0 7px 14px 0 rgb(65 69 88 / 10%), 0 3px 6px 0 rgb(0 0 0 / 7%) !important;
  border-radius: 10px !important;
}

.form-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
