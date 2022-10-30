<script setup>
import { provide } from 'vue'
import ResourceInput from './ResourceInput.vue'

const props = defineProps(['payload'])
provide('payload', props.payload)
</script>

<template>
    <div class="item">
        <slot class="item-left"></slot>
        <div class="item-right">
            <ResourceInput></ResourceInput>
        </div>
    </div>
</template>

<style scoped>
.item {
    display: flex;
}
.item-left {
    flex: 1;
}
.item-right {
    flex: 1;
    text-align: left;
}
</style>