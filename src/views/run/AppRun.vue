<!--
 * @Description: 
 * @Author: thrient
 * @Date: 2025/7/28 18:56
 * @LastEditors: thrient
 * @LastEditTime: 2025/7/28 18:56
-->
<template>
  <el-row class="h-100%">
    <el-col class="h-100%" :span="14">
      <CharacterTable/>
    </el-col>
    <el-col :span="10">
      <AppLogs/>
    </el-col>
  </el-row>


</template>

<script setup lang="ts">
import CharacterTable from "@/views/run/components/character-table/CharacterTable.vue";
import AppLogs from "@/views/run/components/logs/AppLogs.vue";

</script>

<style scoped>

</style>