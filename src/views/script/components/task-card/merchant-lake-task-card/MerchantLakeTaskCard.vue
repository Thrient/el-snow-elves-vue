<!--
 * @Description: 
 * @Author: thrient
 * @Date: 2025/9/14 14:12
 * @LastEditors: thrient
 * @LastEditTime: 2025/9/14 14:12
-->
<template>
  <el-card class="w-100% " shadow="hover">
    <el-row class="mb-4" :gutter="5">


      <el-col :span="8">
        <el-container class="flex gap-x-xs">
          <el-text line-clamp="1" type="primary">江湖行商次数:</el-text>
          <el-input-number v-model="taskConfigStore.merchantLakeCount" :min="1" :max="5"/>
        </el-container>
      </el-col>

      <el-col :span="16">
        <el-container class="flex gap-x-xs">
          <el-text class="w-150px" line-clamp="1" type="primary">江湖行商喊话内容:</el-text>
          <el-input v-model="taskConfigStore.merchantLakeWordShout"></el-input>
        </el-container>
      </el-col>


    </el-row>

  </el-card>
</template>

<script setup lang="ts">
import useMerchantLakeTaskCard
  from "@/views/script/components/task-card/merchant-lake-task-card/useMerchantLakeTaskCard.ts";

const {taskConfigStore} = useMerchantLakeTaskCard()
</script>

<style scoped>

</style>