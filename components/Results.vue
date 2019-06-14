<template>
  <div>
    <v-checkbox label="Canary Islands"></v-checkbox>
    <v-btn @click="SearchCanaryIslands()" color="success">Search...</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      results: []
    };
  },
  methods: {
    async SearchCanaryIslands() {
      // this.$store.dispatch("")
    }
  }
};
</script>

<style scoped>
</style>