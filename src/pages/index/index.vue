<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',

  mounted() {
    this.init();
  },

  methods: {
    init() {
      // dd.ready(function() {
      //   dd.runtime.permission.requestAuthCode({
      //     corpId: 'ding48e4d893b127a99935c2f4657eb6378f',
      //     onSuccess: function(result) {
      //       // alert(result.code);
      //     },
      //     onFail: function(err) {
      //       console.log(JSON.stringify(err));
      //     }
      //   });
      // });
    }
  }
}
</script>
