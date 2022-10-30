<script setup>
import { inputExtra as presetEtra } from '../store'
import ResourceItem from '../components/ResourceItem.vue';
import { initInfo } from '../store'

import { provide } from 'vue'

// name, i, j
const props = defineProps(['name'])
const name = props.name;

const changeHandler = function({ name, i, j }, value) {
    let obj = initInfo[name];
    obj[i] = obj[i] || [];
    obj[i][j] = value;
}
provide('handler', changeHandler)
</script>

<template>
    <div class="detail-item">
        <div class="title"><slot></slot></div>
        <div class="item">
            <div class="row"
            v-for="(p, i) in presetEtra['process']"
            :key="p"
        >
            <span class="row-title">{{p}}</span>
            <div 
                v-for="(r, j) in presetEtra['resource']"
                :key="r">
                <ResourceItem :payload="{name, i, j}">{{r}}: </ResourceItem>
            </div>
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