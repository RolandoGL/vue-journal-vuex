<template>
  <div class="entry-container mb-3 pointer p-2" @click="$router.push({name:'entry', params:{id:10}})">
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">julio</span>
      <span class="mx-2 fs-5 fw-light">2021, jeves</span>
    </div>
    <div class="entry-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
      saepe omnis provident quo ullam quis eos aliquid, ab officia obcaecati est
      accusamus eveniet adipisci mollitia? Perspiciatis quos similique iusto.
      Explicabo.
    </div>
  </div>
</template>

<script>
export default {
  name:'Entry-view'
};
</script>

<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid var(--bs-green);
    transition: 0.2s all ease-in;
    &:hover{
        background-color: lighten($color: gray, $amount: 45);
    }
    .entry-description{
        font-size: 12px;
    }
}
</style>