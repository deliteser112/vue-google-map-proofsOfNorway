<template>
  <v-theme-provider>
    <base-section
      class="text-center section-style"
      space="56"
    >
      <v-form>
        <v-container style="max-width: 500px">
          <v-row>
            <v-col
              cols="12"
              sm="12"
            >
              <div class="logo-style mb-5">
                <base-img
                  :src="require('@/assets/images/logo.png')"
                  class="mr-3"
                  contain
                  max-width="46"
                  width="100%"
                />

                <base-img
                  :src="require(`@/assets/images/logo-${$vuetify.theme.isDark ? 'dark' : 'light'}.svg`)"
                  contain
                  max-width="180"
                  width="100%"
                />
              </div>
              <v-card class="login-form">
                <h3
                  class="
                    mb-1
                    text-center
                  "
                >
                  Forgot your password?
                </h3>
                <h3
                  class="
                    text-caption
                    mb-5
                    text-center
                  "
                >
                  Enter your email and we'll send you a reset link.
                </h3>
                <v-text-field
                  label="Email Address"
                  outlined
                  dense
                />
                <v-btn
                  class="mb-4 btn-auth"
                  :loading="loading"
                  :disabled="loading"
                  color="secondary"
                  @click="loader = 'loading'"
                >
                  Send the reset link to email
                </v-btn>
                <h3
                  class="
                    text-caption
                    mb-5
                    text-center
                  "
                >
                  I can't recove my account using this page ->
                </h3>
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
    name: 'ForgotPassword',

    data () {
      return {
        loader: null,
        loading: false,
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
  }
</script>
<style scoped>
@import "../../assets/css/custom-loader.css";

.logo-style {
  display: flex; justify-content: center
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
  align-items: flex-end;
}

.auth-with {
  display: flex; justify-content: space-between; align-items: center
}
</style>
