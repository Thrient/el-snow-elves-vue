<!--
 * @Description: 
 * @Author: thrient
 * @Date: 2025/8/25 18:09
 * @LastEditors: thrient
 * @LastEditTime: 2025/8/25 18:09
-->
<template>
  <el-card class="w-100% m-b" shadow="hover">
    <el-row
        class="m-b"
        v-for="(list, row) in [['技能1', '技能2', '技能3', '技能4'], ['技能5', '技能6', '技能7', '技能7']]"
        :key="row"
        :gutter="20"
    >
      <el-col v-for="(text, index) in list" :key="index" :span="6">
        <el-container class="flex gap-x-xs">
          <el-text line-clamp="1" type="primary">{{ text }}:</el-text>
          <el-input
              style="width: 120px"
              clearable
              readonly
              @keydown="handleKeydown($event, row * 4 + index)"
              v-model="taskConfigStore.keyList[row * 4 + index]"
          />
        </el-container>
      </el-col>
    </el-row>

  </el-card>

</template>

<script setup lang="ts">
import useAppSetting from "@/views/setting/useAppSetting.ts";

const {taskConfigStore, handleKeydown} = useAppSetting()
</script>

<style scoped>

</style>