<template>
  <button class="shadow btn btn-primary">
    <i style="font-size:19px" class="fa fa-2x" :class="icon"></i>
    </button>
</template>

<script>
export default {
  name:'fab-view',
  props:{
    icon:{
      type:String,
      default:'fa-plus'
    }
  }

}
</script>

<style lang="scss" scoped>
button{
    border-radius: 100%;
    bottom: 20px;
    height: 45px;
    position: absolute;
    right: 5px;
    width: 45px;
}

</style>