<!--
 * @Description: 
 * @Author: thrient
 * @Date: 2025/8/21 18:51
 * @LastEditors: thrient
 * @LastEditTime: 2025/8/21 18:51
-->
<template>
  <el-button type="primary">导入配置</el-button>
  <el-button @click="saveDialogVisible = true" type="success">保存配置</el-button>

  <el-select @change="getTaskConfiguration" v-model="sysConfigStore.currentConfiguration" style="width: 180px">
    <el-option
        v-for="(item, index) in configurationList"
        :key="index"
        :label="item"
        :value="item"
    />
  </el-select>

  <el-button @click="deleteDialogVisible = true" type="danger">删除配置</el-button>
  <el-button type="warning">导出配置</el-button>


  <SelectDialog
      v-model="saveDialogVisible"
      :options="configurationList"
      title="保存配置文件"
      @confirm="saveConfig"
  />

  <SelectDialog v-model="deleteDialogVisible"
                :options="configurationList"
                title="删除配置文件"
                @confirm="deleteConfig"
  />

</template>

<script setup lang="ts">
import useConfigSetting from "@/views/script/components/header/components/config-setting/useConfigSetting.ts";
import SelectDialog from "@/components/select-dialog/SelectDialog.vue";

const {
  saveDialogVisible,
  deleteDialogVisible,
  configurationList,
  sysConfigStore,
  getTaskConfiguration,
  saveConfig,
  deleteConfig,
  showDialog
} = useConfigSetting()
</script>

<style scoped>

</style>