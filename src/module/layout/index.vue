<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <navbar></navbar>
      <tags></tags>
      <main></main>
    </div>
  </div>
</template>

<script>
  import {
    Navbar,
    Sidebar,
    Main,
    Tags
  } from './components'
  export default {
    name: 'layout',
    components: {
      Navbar,
      Sidebar,
      Main,
      Tags
    },
  }
</script>
<style lang="scss" scoped>
  @import "src/assets/styles/mixin.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
</style>