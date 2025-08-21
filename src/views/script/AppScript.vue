<!--
 * @Description:
 * @Author: thrient
 * @Date: 2025/7/24 15:54
 * @LastEditors: thrient
 * @LastEditTime: 2025/7/24 15:54
-->
<template>
  <el-container class="h-100%">
    <el-header>
      <div class="flex justify-between">
        <AppHeader/>
      </div>
    </el-header>
    <el-main>
      <el-container class="flex gap-x-10 h-100%">
        <AppList class="h-100%"/>
        <router-view />
      </el-container>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import AppHeader from "@/views/script/components/header/AppHeader.vue";
import AppList from "@/views/script/components/list/AppList.vue";


</script>

<style scoped>

</style>