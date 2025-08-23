<!--
 * @Description: 
 * @Author: thrient
 * @Date: 2025/8/21 18:51
 * @LastEditors: thrient
 * @LastEditTime: 2025/8/21 18:51
-->
<template>
  <el-button type="primary">导入配置</el-button>
  <el-button @click="showDialog" type="success">保存配置</el-button>
  <el-select class="p-x-10px" style="width: 180px">
    <el-option
        v-for="item in configurationList"
        :key="item"
    >
      {{ item }}
    </el-option>
  </el-select>
  <el-button type="danger">删除配置</el-button>
  <el-button type="warning">导出配置</el-button>

  <SelectDialog v-model="dialogVisible" :options="ops" title="保存配置文件" @confirm="saveConfig"/>

</template>

<script setup lang="ts">
import useConfigSetting from "@/views/script/components/header/components/config-setting/useConfigSetting.ts";
import SelectDialog from "@/components/select-dialog/SelectDialog.vue";

const {dialogVisible, configurationList, saveConfig, showDialog} = useConfigSetting()
</script>

<style scoped>

</style>