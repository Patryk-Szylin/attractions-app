<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <Results/>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";
import Results from "~/components/Results.vue";

export default {
  components: {
    Logo,
    Results,
    VuetifyLogo
  }
};
</script>
