<script setup>
import ProcessDetail from './ProcessDetail.vue'
import ResourceDeail from './ResourceDetail.vue'
</script>

<template>
    <div class="detail">
        <ResourceDeail class="item" name="available">Available（系统当前资源数）</ResourceDeail>
        <ProcessDetail class="item" name="max">Max（进程所需资源总量）</ProcessDetail>
        <ProcessDetail class="item" name="allocation">Allocation（已分配给进程资源数）</ProcessDetail>
    </div>
</template>

<style scoped>
.detail {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}
.item {
    width: fit-content;
}
</style>