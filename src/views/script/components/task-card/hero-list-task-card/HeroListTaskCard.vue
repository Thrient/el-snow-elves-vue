<!--
 * @Description: 
 * @Author: thrient
 * @Date: 2025/9/8 15:25
 * @LastEditors: thrient
 * @LastEditTime: 2025/9/8 15:25
-->
<template>
  <el-card class="w-100% " shadow="hover">
    <el-row class="mb-4" :gutter="5">


      <el-col :span="8">
        <el-container class="flex gap-x-xs">
          <el-text line-clamp="1" type="primary">江湖英雄榜主动退出:</el-text>
          <el-switch v-model="taskConfigStore.heroListInitiativeExit"/>
        </el-container>
      </el-col>

      <el-col :span="8">
        <el-container class="flex gap-x-xs">
          <el-text line-clamp="1" type="primary">江湖英雄榜次数:</el-text>
          <el-input-number v-model="taskConfigStore.$state.heroListCount" :min="1" :max="8"/>
        </el-container>
      </el-col>


    </el-row>

  </el-card>
</template>

<script setup lang="ts">
import useHeroListTaskCard from "@/views/script/components/task-card/hero-list-task-card/useHeroListTaskCard.ts";

const {taskConfigStore} = useHeroListTaskCard()
</script>

<style scoped>

</style>