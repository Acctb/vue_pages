<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu mode="vertical" :show-timeout="200" :default-active="$route.path" :collapse="isCollapse" background="#FFF" text-color="rgb(138, 150, 160)" active-text-color="#409EFF">
      <sidebar-item :routes="constantRouterMap"></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'
  import SidebarItem from './item'
  import {
    asyncRouterMap,
    constantRouterMap
  } from '@/router'
  export default {
    components: {
      SidebarItem
    },
    data() {
      return {
        constantRouterMap: constantRouterMap
      }
    },
    computed: {
      ...mapGetters([
        'permission_routers',
        'sidebar'
      ]),
      isCollapse() {
        return !this.sidebar.opened
      }
    }
  }
</script>
