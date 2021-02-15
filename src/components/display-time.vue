<template>
    <v-tooltip bottom>
        <template v-slot:activator="{on}">
            <span v-on="on">{{ displayTime }}</span>
        </template>
        <span>{{time.toLocaleString()}}</span>
    </v-tooltip>
</template>

<script>
export default {
  props: ['time'],
  computed: {
    displayTime () {
      const createdTime = this.$moment(this.time)
      const currentTime = this.$moment()
      const diff = currentTime.diff(createdTime, 'days')
      if (diff > 0) return createdTime.toDate().toLocaleDateString()
      return currentTime.fromNow()
    }
  }

}
</script>
