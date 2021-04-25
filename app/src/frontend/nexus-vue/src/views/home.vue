<template>
  <h1>home</h1>
  <p>{{ $store.state.count }}</p>
  <el-button type="primary" @click="a">aaa</el-button>
</template>

<script setup>
import request from '@/network';
import { useRouter } from 'vue-router';

// console.log('aaa', import.meta.env.SOME_KEY)

const router = useRouter();
const a = async () => {
  router.push({ name: 'aaa' });
  // try {
  //   // let res = await request.get("/data?dataId=123");
  //   let res = await request.get('/data', { params: { dataId: '123' } });
  //   console.log(res.data);
  // } catch (error) {
  //   console.log(error);
  // }
};
</script>

<style scoped></style>
