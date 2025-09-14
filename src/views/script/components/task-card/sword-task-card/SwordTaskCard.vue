<!--
 * @Description: 
 * @Author: thrient
 * @Date: 2025/9/14 10:17
 * @LastEditors: thrient
 * @LastEditTime: 2025/9/14 10:17
-->
<template>
  <el-card class="w-100% " shadow="hover">
    <el-row class="mb-4" :gutter="5">


      <el-col :span="8">
        <el-container class="flex gap-x-xs">
          <el-text line-clamp="1" type="primary">单人论剑主动退出:</el-text>
          <el-switch v-model="taskConfigStore.swordFightInitiativeExit"/>
        </el-container>
      </el-col>

      <el-col :span="8">
        <el-container class="flex gap-x-xs">
          <el-text line-clamp="1" type="primary">单人论剑次数:</el-text>
          <el-input-number v-model="taskConfigStore.$state.swordFightCount" :min="1" :max="999"/>
        </el-container>
      </el-col>


    </el-row>

  </el-card>
</template>

<script setup lang="ts">
import useSwordTaskCard from "@/views/script/components/task-card/sword-task-card/useSwordTaskCard.ts";

const {taskConfigStore} = useSwordTaskCard()
</script>

<style scoped>

</style>