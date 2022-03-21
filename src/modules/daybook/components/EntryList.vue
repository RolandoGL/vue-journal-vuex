<template>
  <div class="entry-list-container">
    <div class="input-group px-2 pt-2 mb-2">
      <span class="input-group-text">Entrada</span>
      <input type="text" class="form-control" placeholder="Buscar..." />
    </div>
    <div class="entry-scrollarea shadow-sm">
      <entry v-for="item in 100" :key="item">Entry</entry>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    Entry: defineAsyncComponent(() => import("../components/Entry.vue")),
  },
};
</script>

<style lang="scss" scoped>
.entry-list-container {
  border-right: 1px solid #2c3e50;
  height: 100vh;
}
.entry-scrollarea {
    height: calc(100vh - 56px);

  overflow: scroll;
}
@media (max-width: 768px) {
    .entry-list-container {
     height: 400px;
}
  .entry-scrollarea {
    height: 100%;
  }
}
</style>>
