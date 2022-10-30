<script setup>
import { watch } from 'vue'
import { tip } from '../store.js'

watch(() => tip.show, (val) => {
    if (val) {
        setTimeout(() => tip.show = false , 1000);
    }
})
</script>

<template>
    <Transition name="fade">
        <div v-if="tip.show" class="tip">
            <div>{{tip.type}}</div>
            <div>{{tip.value}}</div>
        </div>
    </Transition>
</template>

<style scoped>
.tip {
    display: flex;
    padding: 4px 10px;
    position: fixed;
    top: 0;
    left: 30%;
    gap: 10px;
}
.fade-leave-active {
    transition: all 1s ease;
    opacity: 1;
}
.fade-leave-to {
    opacity: 0;
}
</style>