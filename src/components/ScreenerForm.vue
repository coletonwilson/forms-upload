<template>
  <div>
    <label>
      House Hold Income:
      <input type="number" id="household_income" v-model.number="hhi">
    </label>
    <label>
      Dependent Age:
      <input type="number" id="dependent_age" v-model.number="dependent_age">
    </label>
    <label>
      Is Single Parent:
      <input type="checkbox" id="single_parent" v-model="single_parent">
    </label>
    <button v-on:click="checkEligibility" id="submit">Check Eligibility</button>
    <br>
    <h3>Form: {{form}}</h3>
    <h3>Coverage Percentage: {{coverage_percent}}</h3>
  </div>
</template>

<script>
export default {
  name: "ScreenerForm",
  props: {
    screener: Function
  },
  data: () => ({
    coverage_percent: "",
    form: ""
  }),
  methods: {
    checkEligibility() {
      const result = this.screener({
        hhi: this.hhi,
        dependent_age: this.dependent_age,
        single_parent: this.single_parent
      });

      if (result) {
        this.coverage_percent = result.coverage_percent;
        this.form = result.form;
      }
    }
  }
};
</script>

<style scoped>
</style>
