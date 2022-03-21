<template>
  <div class="container-fluid m-0 p-0" style="height:100vh;">
    <nav-bar />
    <div class="row" style="height:100%;">
      <div class="col-sm col-md-3 col-lg-4">
        <entry-list></entry-list>
      </div>
      <div class="col mt-4">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    NavBar: defineAsyncComponent(() => import("../components/NavBar.vue")),
    EntryList: defineAsyncComponent(() =>
      import("../components/EntryList.vue")
    ),
  },
};
</script>

<style>
</style>