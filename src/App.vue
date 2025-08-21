<template>
  <el-container class="h-100%">
    <el-header>
      Header
    </el-header>
    <el-container class="h-90%">
      <el-aside width="100px">
        <AppAside/>
      </el-aside>
      <el-main class="h-100%">
        <router-view/>
      </el-main>
    </el-container>
  </el-container>

</template>

<script setup lang="ts">
import {AppAside} from "@/components/aside";
</script>


<style scoped>

</style>
