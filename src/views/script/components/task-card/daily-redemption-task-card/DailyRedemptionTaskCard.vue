<!--
 * @Description: 
 * @Author: thrient
 * @Date: 2025/8/25 12:10
 * @LastEditors: thrient
 * @LastEditTime: 2025/8/25 12:10
-->
<template>
  <el-card class="w-100%" shadow="hover">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-container class="flex gap-x-xs">
          <el-text line-clamp="1" type="primary">银票礼盒:</el-text>
          <el-switch v-model="taskConfigStore.silverNoteGiftBox"/>
        </el-container>
      </el-col>

      <el-col :span="8">
        <el-container class="flex gap-x-xs">
          <el-text line-clamp="1" type="primary">吴越剑坯:</el-text>
          <el-switch v-model="taskConfigStore.wuYueSwordBlank"/>
        </el-container>
      </el-col>

      <el-col :span="8">
        <el-container class="flex gap-x-xs">
          <el-text line-clamp="1" type="primary">白公鼎坯:</el-text>
          <el-switch v-model="taskConfigStore.baiGongDingBlank"/>
        </el-container>
      </el-col>

    </el-row>

  </el-card>
</template>

<script setup lang="ts">
import useDailyRedemptionTaskCard
  from "@/views/script/components/task-card/daily-redemption-task-card/useDailyRedemptionTaskCard.ts";

const {taskConfigStore} = useDailyRedemptionTaskCard()
</script>

<style scoped>

</style>