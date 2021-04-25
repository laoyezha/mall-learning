<template>
  <h1>hhh</h1>
  <p>{{ $store.state.count }}</p>
  <el-button type="primary" @click="a">aaa</el-button>
</template>

<script setup>
import request from '@/network';

// console.log('aaa', import.meta.env.SOME_KEY)

const a = async () => {
  try {
    // let res = await request.get("/data?dataId=123");
    let res = await request.get('data', { params: { dataId: '123' } });
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped></style>
