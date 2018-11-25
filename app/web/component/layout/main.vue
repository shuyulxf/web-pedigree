<template>
  <div>
    <LayoutHeader></LayoutHeader>
    <LayoutContent>
      <div slot="content">
        <slot name="main"></slot>
      </div>
    </LayoutContent>
  </div>
</template>
<style lang="scss">
  @import "../../asset/style/global.scss";
</style>
<script type="ts">
  import LayoutHeader from './header/header';
  import LayoutContent from './content/content';
  export default {
    components: {
      LayoutHeader,
      LayoutContent
    }
  };
</script>
