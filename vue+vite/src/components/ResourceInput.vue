<script setup>
import { inject, ref, watch } from 'vue'
import { changeTip, inputExtra, needInfo } from '../store'

const payload = inject('payload')
const handler = inject('handler')

const validateInput = function(event) {
    let value = event.target.value;
    if (value < 0 || value > 50) {
        changeTip('error','请输入小于50的非负整数');
        event.target.value = '';
        handler(payload, 0)
    } else {
        handler(payload, value)
    }
}

const { name, i, j } = payload;
const result = ref(0);
watch(needInfo, (info) => {
    if (name == 'result') {
        result.value = info[i][j];
    }
})
</script>

<template>
    <div class="result" v-if="payload.name == 'result'">{{ result }}</div>
    <input v-else type="number"
        max="10"
        @input="validateInput"
    />
    <span class="extra">{{(inputExtra[payload] || []).join(', ')}}</span>
</template>

<style scoped>
.extra {
    margin-left: 10px;
}
input {
    width: 50px;
}
.result {
    margin-right: 10px;
    font-weight: bold;
}
</style>