<template>
  <div class="app-wrapper" :class="classObj">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"></div>
    <navbar></navbar>
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <tags></tags>
      <el-scrollbar wrapClass="scrollbar-wrapper">
        <container></container>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
  import {
    Navbar,
    Sidebar,
    Container,
    Tags
  } from './components'
  import ResizeMixin from './mixin/ResizeHandler'
  export default {
    name: 'layout',
    components: {
      Navbar,
      Sidebar,
      Container,
      Tags
    },
    mixins: [ResizeMixin],
    computed: {
      sidebar() {
        return this.$store.state.app.sidebar
      },
      device() {
        return this.$store.state.app.device
      },
      classObj() {
        return {
          hideSidebar: !this.sidebar.opened,
          withoutAnimation: this.sidebar.withoutAnimation,
          mobile: this.device === 'mobile'
        }
      }
    },
    methods: {
      handleClickOutside() {
        this.$store.dispatch('closeSideBar', {
          withoutAnimation: false
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "src/assets/styles/mixin.scss";
  .sidebar-container {
    border-right: 1px solid #e6e6e6;
  }
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
  .main-container {
    position: absolute;
    top: 50px;
    bottom: 0;
    left: 0;
    right: 0;
    .scrollbar-wrapper {
      height: calc(100% + 15px);
      .el-scrollbar__view {
        height: 100%;
      }
    }
  }
  .el-scrollbar {
    height: calc(100% - 34px);
  }
</style>