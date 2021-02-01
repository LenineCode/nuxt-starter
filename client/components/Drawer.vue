<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    clipped
    fixed
    disable-route-watcher
    width="300"
  >
    <v-list>
      <v-list-item
        link
        router
        :to="{ path: '/' }"
        ripple
      >
        <v-list-item-icon>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item
        link
        router
        :to="{ path: '/enrich/staline' }"
        ripple
      >
        <v-list-item-icon>
          <v-icon>mdi-code-json</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Staline</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item
        link
        router
        :to="{ path: '/enrich/lenine' }"
        ripple
      >
        <v-list-item-icon>
          <v-icon>mdi-file-delimited-outline</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Lenine</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template #append>
      <div class="pa-2 text-center">
        <v-tooltip top>
          <template #activator="{ on }">
            <v-btn
              small
              text
              icon
              v-on="on"
              @click="$vuetify.theme.dark = !$vuetify.theme.dark"
            >
              <v-icon v-if="$vuetify.theme.dark">
                mdi-white-balance-sunny
              </v-icon>
              <v-icon v-else>
                mdi-weather-night
              </v-icon>
            </v-btn>
          </template>
          <span v-if="$vuetify.theme.dark">Thème clair</span>
          <span v-else>Thème sombre</span>
        </v-tooltip>

        <v-spacer />

        <v-btn
          small
          class="ma-3"
          href="https://github.com/LenineCode/nuxt-starter#readme"
          target="_blank"
          rel="noreferrer"
          outlined
        >
          Version: {{ appVersion }}
          <v-icon right>
            mdi-github
          </v-icon>
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Drawer',
  data () {
    return {
      drawer: null
    }
  }
}
</script>
