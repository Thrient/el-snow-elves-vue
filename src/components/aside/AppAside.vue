<!--
 * @Description:
 * @Author: thrient
 * @Date: 2025/7/22 14:40
 * @LastEditors: thrient
 * @LastEditTime: 2025/7/22 14:40
-->
<template>
  <el-menu
      class="h-100%"
      router
      default-active="home">
    <el-menu-item-group>
      <el-menu-item index="/home">主页</el-menu-item>
      <el-menu-item index="/script">脚本</el-menu-item>
      <el-menu-item index="/run">运行</el-menu-item>
    </el-menu-item-group>
  </el-menu>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>