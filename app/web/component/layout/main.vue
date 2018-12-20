<template>
  <div>
    <LayoutHeader></LayoutHeader>
    <LayoutContent>
      <div slot="content">
        <slot name="main"></slot>
      </div>
    </LayoutContent>
    <LayoutFooter></LayoutFooter>
  </div>
</template>
<style lang="scss">
  @import "../../asset/style/global.scss";
</style>
<script type="ts">
  import LayoutHeader from './header/header.vue';
  import LayoutContent from './content/content.vue';
  import LayoutFooter from './footer/footer.vue';
  export default {
    components: {
      LayoutHeader,
      LayoutContent,
      LayoutFooter
    }
  };
</script>
