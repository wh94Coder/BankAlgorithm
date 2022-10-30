<script setup>
import ProcessDetail from './ProcessDetail.vue';
import { needInfo, initInfo, showResult } from '../store';
import { banker } from './banker'

import { computed } from 'vue'

const isValid = computed(() => {
    let validAvailable = initInfo.available.some(item => item > 0);
    console.log((needInfo.value || []).flat(2));
    let validNeed = (needInfo.value || []).flat(2).every(item => item >= 0);
    return validAvailable && validNeed;
});
</script>

<template>
    <div class="result">
        <ProcessDetail class="item" name="result">Need矩阵</ProcessDetail>
        <button class="item" @click="banker" :disabled="!isValid">生成安全序列</button>
        <div v-if="isValid && showResult">
            <div v-if="typeof showResult === 'string'">{{showResult}}</div>
            <div v-else
                v-for="sr in showResult"
                :key="sr">
                {{sr}}
            </div>
        </div>
    </div>
</template>

<style scoped>
.result {
    display: flex;
    gap: 10px;
}
.item {
    width: fit-content;
    height: fit-content;
}
button {
    background-color: #F9FA62 !important;
    color: #000;
}
</style>