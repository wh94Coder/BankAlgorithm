<script setup>
import Tip from './components/Tip.vue'
import ResourceItem from './components/ResourceItem.vue'
import Detail from './Subject/Detail.vue'
import Result from './Subject/Result.vue'
import { presetInfo, needInfo } from './store'

import { provide, computed } from 'vue'
const changeHandler = function (name, value) {
    let obj = presetInfo[name];
    presetInfo[name].value = value;
}
provide('handler', changeHandler)

const detailKey = computed(() => presetInfo.resource.value + presetInfo.process.value);
</script>

<template>
    <Tip></Tip>
    <h1>操作系统-银行家算法</h1>
    <div class="preset">
        <ResourceItem payload="resource">资源数：</ResourceItem>
        <ResourceItem payload="process">进程数：</ResourceItem>
        <Detail :key="detailKey"></Detail>
        <Result></Result>
    </div>
    <div>
        
    </div>
</template>

<style scoped>
.temp {
    width: 100px;
    height: 100px;
}
</style>