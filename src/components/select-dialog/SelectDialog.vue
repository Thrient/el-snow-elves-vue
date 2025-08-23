<!--
 * @Description: 
 * @Author: thrient
 * @Date: 2025/8/23 10:07
 * @LastEditors: thrient
 * @LastEditTime: 2025/8/23 10:07
-->
<template>
  <el-dialog
      style="width: 300px"
      :title="title"
      v-model="model"
      align-center
  >
    <el-select
        v-model="value"
        filterable
        allow-create
        :reserve-keyword="false"
        default-first-option
        :placeholder="placeholder"
    >
      <el-option
          v-for="item in options"
          :key="item"
          :label="item"
          :value="item">
      </el-option>
    </el-select>
    <template #footer>
      <el-button @click="model = false">取消</el-button>
      <el-button type="primary" @click="handleConfirm">确认</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import useSelectDialog from "@/components/select-dialog/useSelectDialog.ts";
import {defineEmits, defineProps, defineModel} from "vue";

const model = defineModel()

const emit = defineEmits(['confirm'])

const props = defineProps({
  options: {
    type: Array,
    default: []
  },
  title: {
    type: String,
    default: 'Dialog'
  },
  placeholder: {
    type: String,
    default: ''
  },
})


const {value, handleConfirm} = useSelectDialog(model, emit)

</script>

<style scoped>

</style>