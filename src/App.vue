<template>
  <div id="app">
    <ScreenerForm :screener="screener"/>
  </div>
</template>

<script>
import ScreenerForm from './components/ScreenerForm.vue'
import {screener} from './eligibility-screener'

export default {
  name: 'app',
  data: () => ({
    screener
  }),
  components: {
    ScreenerForm
  },

}
</script>

<style>

</style>
