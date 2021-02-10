<template>
<v-progress-circular indeterminate v-if="loading"></v-progress-circular>
<v-menu offset-y v-else-if="!$store.state.fireUser">
    <template v-slot:activator="{ on }">
        <v-btn icon v-on="on"><v-icon>mdi-account</v-icon></v-btn>
    </template>

    <v-card>
        <v-card-title>Login </v-card-title>
        <v-divider/>
        <v-card-actions>
            <v-btn block color="red" dark @click="signInWithGoogle"><v-icon>mdi-google</v-icon>Login with Google</v-btn>
        </v-card-actions>
    </v-card>
</v-menu>
<v-menu offset-y v-else>
    <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
            <v-avatar size="32">
                <v-img :src="$store.state.fireUser.photoURL"></v-img>
            </v-avatar>
        </v-btn>
    </template>

    <v-card>
        <v-card-title>Account Info </v-card-title>
        <v-divider/>
        <v-card-actions>
            <v-btn block color="" dark @click="signOut">Logout</v-btn>
        </v-card-actions>
    </v-card>
</v-menu>

</template>

<script>
export default {
  data () {
    return {
      loading: false
    }
  },
  methods: {
    async signInWithGoogle () {
      const provider = new this.$firebase.auth.GoogleAuthProvider()
      this.loading = true
      try {
        const result = await this.$firebase.auth().signInWithPopup(provider)
        this.$store.commit('setFireUser', result.user)
      } finally {
        this.loading = false
      }
    },
    signOut () {
      this.$firebase.auth().signOut()
    }
  }
}
</script>
