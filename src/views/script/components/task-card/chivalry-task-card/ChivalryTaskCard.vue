<!--
 * @Description: 
 * @Author: thrient
 * @Date: 2025/8/21 15:40
 * @LastEditors: thrient
 * @LastEditTime: 2025/8/21 15:40
-->
<template>
  <el-card class="w-100%" shadow="hover">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-container class="flex gap-x-xs">
          <el-text line-clamp="1" type="primary">侠缘昵称或编号:</el-text>
          <el-input style="width: 150px" v-model="taskConfigStore.$state.chivalryNameOrNumber"></el-input>
        </el-container>
      </el-col>
      <el-col :span="8">
        <el-container class="flex gap-x-xs">
          <el-text line-clamp="1" type="primary">侠缘喊话次数:</el-text>
          <el-input-number v-model="taskConfigStore.$state.chivalryShoutCount" :min="1" :max="200"/>
        </el-container>
      </el-col>

    </el-row>

  </el-card>
</template>

<script setup lang="ts">

import useChivalryTaskCard from "@/views/script/components/task-card/chivalry-task-card/useChivalryTaskCard.ts";

const {taskConfigStore} = useChivalryTaskCard()
</script>

<style scoped>

</style>