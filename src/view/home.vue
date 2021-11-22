<template>
  <div class="home">
    <img src="../assets/logo.png" />
    <hr />
    <button class="btn btn-primary">确定</button>
    <button class="btn btn-success">使用</button>
    <button class="btn btn-danger">注意</button>
    <hr />
    <router-link to="/vue3">使用路由跳转</router-link>
    <br />
    <el-button type="primary" @click="toVue3">使用编程导航跳转</el-button>
  </div>
</template>

<script>
import { defineComponent} from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    const toVue3 = () => {
      router.push({
        path: "/vue3",
        query: {
          id: 1,
        },
      });
    };
    return {
      toVue3,
    };
  },
});
</script>
