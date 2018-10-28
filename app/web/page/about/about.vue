<template>
  <layout>
    <div> {{message}}</div>
    <div class="fontawesome"> {{message}} </div>
  </layout>
</template>
<style>
@font-face {
  font-family: "fontawesome";
  src: url("./font/fontawesome-webfont.ttf");
}
.fontawesome {
  font-family: fontawesome;
}
@import "about.css";
</style>
<script type="ts">

  import { Toast } from 'mint-ui';
  //import 'mint-ui/lib/style.css';
  export default {
    components: {},
    computed: {},
    methods: {},
    mounted() {
      Toast({
        message: 'Upload Complete',
        position: 'bottom',
        duration: 5000
      });
    }
  }
</script>

