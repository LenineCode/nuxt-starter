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
          <v-list-item-title> {{ $t("ui.drawer.home") }} </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item
        link
        router
        :to="{ path: '/examples' }"
        ripple
      >
        <v-list-item-icon>
          <v-icon>mdi-code-json</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ $t("ui.drawer.examples") }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item
        link
        router
        :to="{ path: '/steps' }"
        ripple
      >
        <v-list-item-icon>
          <v-icon>mdi-file-delimited-outline</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ $t("ui.drawer.steps") }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-list-group
      no-action
      append-icon="mdi-chevron-down"
      prepend-icon="mdi-translate"
    >
      <template #activator>
        <v-list-item-title class="body-2" v-text="$t('ui.language')" />
      </template>

      <v-list-item
        v-for="locale in $i18n.locales"
        :key="locale.code"
        @click="$i18n.setLocale(locale.code)"
      >
        <v-list-item-title class="body-2" v-text="locale.name" />
        <v-list-item-icon>
          <img width="24" :src="require(`@/static/img/${locale.code}.png`)">
        </v-list-item-icon>
      </v-list-item>
    </v-list-group>

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
          <span v-if="$vuetify.theme.dark">{{ $t("ui.theme.dark") }}</span>
          <span v-else>{{ $t("ui.theme.light") }}</span>
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
          Version: {{ appInfos.version }}
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
    return {}
  },

  computed: {
    appInfos () {
      return this.$store.state.appInfos
    },
    drawer: {
      get () { return this.$store.state.drawer },
      set (newVal) { this.$store.dispatch('SET_DRAWER', newVal) }
    }
  }
}
</script>
