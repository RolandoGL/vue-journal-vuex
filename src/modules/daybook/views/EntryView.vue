<template>
  <div class="entry-title d-flex justify-content-end flex-wrap mt-1">
    <div class="flex-grow-1">
      <span class="text-success fs-3 fw-bold">11</span>
      <span class="mx-3 fs-3">julio</span>
      <span class="mx-3 fs-3">2021</span>
    </div>
    <div class="d-flex gap-1 p-1">
      <button class="btn btn-danger ">
        borar <i class="fa fa-trash-alt"></i>
      </button>
      <button class="btn btn-primary ">
        Subir foto <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>
  <hr />
  <div class="d-flex flex-column px-3">
    <div class="form-floating">
  <textarea class="form-control"  placeholder="¿Qué sucedió hoy?" id="floatingTextarea"></textarea>
  <label for="floatingTextarea">¿Qué sucedió hoy?</label>
</div>
    <img
      class="w-75 shadow-sm img-thumbnail img-thumbnail mx-auto mt-3"
      src="https://as01.epimg.net/meristation/imagenes/2021/07/13/videos/1626171942_464755_1626172087_portada_normal.jpg"
      alt=""
    />
     <Fab icon="fa-save" />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
  },
};
</script>

<style lang="scss" scoped>
textarea {
  resize: none;
  font-size: 20px;
  border: none;
  height: 100%;
  &:focus {
    outline:1px solid var(--bs-blue);
  }
}

</style>>
