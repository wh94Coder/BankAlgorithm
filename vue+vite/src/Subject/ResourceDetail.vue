<script setup>
import { inputExtra as presetEtra } from '../store'
import ResourceItem from '../components/ResourceItem.vue';
import { initInfo } from '../store'

import { provide } from 'vue'

// name, i
const props = defineProps(['name'])
const name = props.name;

const changeHandler = function({ name, i }, value) {
    let obj = initInfo[name];
    obj[i] = value;
}
provide('handler', changeHandler)
</script>

<template>
    <div class="detail-item">
        <div class="title"><slot></slot></div>
        <div class="row">
            <div
                v-for="(r, i) in presetEtra['resource']"
                :key="r">
                <ResourceItem :payload="{name, i}">{{r}}: </ResourceItem>
            </div>
        </div>
    </div>
</template>

<style scoped>
.detail-item {
    border: 1px solid #000;
    border-radius: 4px;
    padding: 10px;
    margin: 4px 0;
}
.title {
    text-align: left;
    font-weight: bold;
}
.row {
    display: flex;
}
.row-title {
    margin-right: 50px;
}
</style>