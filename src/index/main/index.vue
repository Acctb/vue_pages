<template>
  <div class="main-content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Index',

  mounted() {
    this.init();
  },

  methods: {
    init() {

    },

    nextStep(url) {
      this.$router.replace({
        path: url
      });
    },

  }
}
</script>

<style scoped>

</style>
