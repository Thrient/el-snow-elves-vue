<!--
 * @Description: 
 * @Author: thrient
 * @Date: 2025/7/26 13:57
 * @LastEditors: thrient
 * @LastEditTime: 2025/7/26 13:57
-->
<template>
  <div class="flex gap-4 h-100%" ref="listRef">
    <el-table @cell-dblclick="add" highlight-current-row :data="tableData" style="width: 100px" :height="tableHeight">
      <template #empty>
        <span>无任务</span>
      </template>
      <el-table-column label="任务列表">
        <template #header>
          <el-tag>任务列表</el-tag>
        </template>
        <template #default="scope">
          <el-text @click="navigate(scope.row)">{{ scope.row.data }}</el-text>
        </template>
      </el-table-column>
    </el-table>

    <el-table @cell-dblclick="remove" highlight-current-row :data="taskConfigStore.$state.executeList"
              style="width: 100px"
              :height="tableHeight">
      <template #empty>
        <span>无任务</span>
      </template>
      <el-table-column prop="data" label="执行列表">
        <template #header>
          <el-tag>执行列表</el-tag>
        </template>
        <template #default="scope">
          <el-text @click="navigate(scope.row)">{{ scope.row.data }}</el-text>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import useAppList from "@/views/script/components/list/useAppList.ts";

const {listRef, tableData, tableHeight, taskConfigStore, add, remove, navigate} = useAppList()

</script>

<style scoped>

</style>