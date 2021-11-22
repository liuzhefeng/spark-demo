<template>
  <div>vue3 路由传过来的id--{{ routeId }}</div>
</template>
<script>
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import { useRoute } from "vue-router";
export default defineComponent({
  setup() {
    const route = useRoute();
    const dataMap = reactive({
      routeId: 0,
    });
    onMounted(() => {
      dataMap.routeId = route.query.id;
    });
    return {
      ...toRefs(dataMap),
    };
  },
});
</script>
