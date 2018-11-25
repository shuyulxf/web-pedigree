<template>
  <Layout>
    <div class="container smart-container">
      <div class="row row-offcanvas row-offcanvas-right">
        <div class="col-xs-12 col-sm-9">
          <Button type="primary">{{data}}</Button>
        </div>
      </div>
    </div>
  </Layout>
</template>
<style lang="scss">
  div{
    background: red;
  }
</style>
<script type="ts">
  export default {
    components: {

    },
    data(){
      return {
        data: 1
      }
    },
    computed: {
    },
    methods: {
     
    },
    mounted() {
      
    }
  };
</script>

