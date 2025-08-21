<!--
 * @Description: 
 * @Author: thrient
 * @Date: 2025/8/4 5:54
 * @LastEditors: thrient
 * @LastEditTime: 2025/8/4 5:54
-->
<template>
  <div class="h-100%" ref="tableRef">
    <el-table highlight-current-row :height="tableHeight" :data="characterTables">
      <template #empty>
        <span></span>
      </template>
      <el-table-column width="130" label="角色信息">
        <template #header>
          <el-tag>角色信息</el-tag>
        </template>
        <template #default="scope">
          <el-image fit="contain" :src="scope.row.character"></el-image>
        </template>
      </el-table-column>
      <el-table-column width="100" label="任务状态">
        <template #header>
          <el-tag>任务状态</el-tag>
        </template>
        <template #default="scope">
          <el-tag>{{ scope.row.state }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column fixed="right" min-width="280" label="操作">
        <template #header>
          <el-button @click="start" size="small" type="success">开始</el-button>
        </template>
        <template #default="scope">
          <el-button @click="stop(scope.row)" size="small">暂停</el-button>
          <el-button @click="resume(scope.row)" size="small">恢复</el-button>
          <el-button @click="unbind(scope.row)" size="small">解绑</el-button>
          <el-button @click="screenshot(scope.row)" size="small">截图</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

</template>

<script setup lang="ts">
import useCharacterTable from "@/views/run/components/character-table/useCharacterTable.ts";

const {characterTables, tableRef, tableHeight, start, unbind, stop, resume, screenshot} = useCharacterTable()

</script>

<style scoped>

</style>