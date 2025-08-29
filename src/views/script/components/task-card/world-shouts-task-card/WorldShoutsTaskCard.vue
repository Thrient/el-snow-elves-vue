<!--
 * @Description: 
 * @Author: thrient
 * @Date: 2025/8/29 14:30
 * @LastEditors: thrient
 * @LastEditTime: 2025/8/29 14:30
-->
<template>
  <el-card class="w-100% " shadow="hover">
    <el-row class="mb-4" :gutter="5">
      <el-col :span="12">
        <el-container class="flex gap-x-xs">
          <el-text line-clamp="1" type="primary">普通世界喊话:</el-text>
          <el-switch v-model="taskConfigStore.ordinaryWorldShouts"/>
        </el-container>
      </el-col>

      <el-col :span="12">
        <el-container class="flex gap-x-xs">
          <el-text line-clamp="1" type="primary">互联世界喊话:</el-text>
          <el-switch v-model="taskConfigStore.connectedWorldShouts"/>
        </el-container>
      </el-col>


    </el-row>

    <el-row class="mb-4" :gutter="5">
      <el-col :span="24">
        <el-container class="flex gap-x-xs">
          <el-input
              v-model="taskConfigStore.worldShoutsText"
              :autosize="{ minRows: 4, maxRows: 6 }"
              type="textarea"
              placeholder="世界喊话内容"
          />
        </el-container>
      </el-col>

    </el-row>

  </el-card>

</template>

<script setup lang="ts">
import useWorldShoutsTaskCard
  from "@/views/script/components/task-card/world-shouts-task-card/useWorldShoutsTaskCard.ts";

const {taskConfigStore} = useWorldShoutsTaskCard()

</script>

<style scoped>

</style>