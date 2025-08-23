<!--
 * @Description: 
 * @Author: thrient
 * @Date: 2025/8/9 16:56
 * @LastEditors: thrient
 * @LastEditTime: 2025/8/9 16:56
-->
<template>
  <div class="h-100%" ref="tableRef">
    <el-table ref="logTableRef" :data="logList" :height="tableHeight">
      <template #empty>
        <span></span>
      </template>
      <el-table-column width="180">
        <template #header>
          <el-tag>时间</el-tag>
        </template>
        <template #default="scope">
          {{ scope.row.time }}
        </template>
      </el-table-column>
      <el-table-column width="80">
        <template #header>
          <el-tag>等级</el-tag>
        </template>
        <template #default="scope">
          {{ scope.row.info }}
        </template>
      </el-table-column>
      <el-table-column min-width="150" fixed="right">
        <template #header>
          <el-tag>内容</el-tag>
        </template>
        <template #default="scope">
          {{ scope.row.data }}
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script setup lang="ts">
import useAppLogs from "@/views/run/components/logs/useAppLogs.ts";

const {logList, tableHeight, tableRef, logTableRef, addLog} = useAppLogs();

</script>

<style scoped>

</style>