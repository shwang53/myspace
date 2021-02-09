<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <v-app-bar-nav-icon @click="drawer = !drawer"/>
    <site-title :title="title"/>
    <v-spacer/>

    <v-btn icon to="/about">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn icon to="/">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    </v-app-bar>
    <site-menu :drawer="drawer"/>
    <v-content>
      <router-view/>
    </v-content>
    <site-footer :footer="footer"/>
  </v-app>
</template>

<script>
import SiteTitle from '@/views/site/title'
import SiteFooter from '@/views/site/footer'
import SiteMenu from '@/views/site/menu'

export default {
  components: { SiteTitle, SiteFooter, SiteMenu },
  name: 'App',
  data () {
    return {
      drawer: false,
      items: [],
      title: 'This is the title',
      footer: 'This is the footer'
    }
  },
  mounted () {
    console.log(this.$firebase)
  }
}

</script>
