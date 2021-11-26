// ~/components/Snackbar.vue

<template>
  <v-snackbar 
      v-model="show" 
      :color="color" 
      :timeout="2000"
      top
      center>
    {{ message }}
    <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="show = false"
        >
          Close
        </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      message: '',
      color: ''
    }
  },

  created () {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'SHOW_MESSAGE') {
        this.message = state.content
        this.color = state.color
        this.show = true
      }
    })
  }
}
</script>