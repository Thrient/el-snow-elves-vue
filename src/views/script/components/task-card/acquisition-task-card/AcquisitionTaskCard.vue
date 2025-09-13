<!--
 * @Description: 
 * @Author: thrient
 * @Date: 2025/9/13 10:48
 * @LastEditors: thrient
 * @LastEditTime: 2025/9/13 10:48
-->
<template>
  <el-card class="w-100% " shadow="hover">
    <el-row class="mb-4" :gutter="5">
      <el-col :span="8">
        <el-container class="flex gap-x-xs">
          <el-text line-clamp="1" type="primary">采集模式:</el-text>
          <el-select v-model="taskConfigStore.collectionMode" style="width: 150px">
            <el-option label="默认模式" value="默认模式"/>
            <el-option label="自定义模式" value="自定义模式"/>
          </el-select>
        </el-container>
      </el-col>

      <el-col :span="8">
        <el-container class="flex gap-x-xs">
          <el-text line-clamp="1" type="primary">采集次数:</el-text>
          <el-input-number v-model="taskConfigStore.collectionCount" :min="1" :max="9999"/>
        </el-container>
      </el-col>

      <el-col :span="8">
        <el-container class="flex gap-x-xs">
          <el-text line-clamp="1" type="primary">采集换线:</el-text>
          <el-input-number v-model="taskConfigStore.collectionSwitch" :min="1" :max="50"/>
        </el-container>
      </el-col>

    </el-row>

    <el-row class="mb-4" :gutter="5">
      <el-col :span="11">
        <el-container class="flex gap-x-xs">
          <el-text line-clamp="1" type="primary">自动吃鸡蛋:</el-text>
          <el-switch v-model="taskConfigStore.autoEatEgg"/>
          <el-text line-clamp="1" type="primary">鸡蛋数量:</el-text>
          <el-input-number v-model="taskConfigStore.autoEatEggCount" :min="1" :max="8"/>
        </el-container>
      </el-col>

      <el-col :span="5">
        <el-container class="flex gap-x-xs">
          <el-text line-clamp="1" type="primary">自动购买工具:</el-text>
          <el-switch v-model="taskConfigStore.$state.autoBuyTool"/>
        </el-container>
      </el-col>

      <el-col :span="7">
        <el-container class="flex gap-x-xs">
          <el-text line-clamp="1" type="primary">采集物品:</el-text>
          <el-select v-model="taskConfigStore.collectionArticles" style="width: 150px">
            <el-option label="江南杂草" value="江南杂草"/>
            <el-option label="江南野花" value="江南野花"/>
            <el-option label="江南朱果" value="江南朱果"/>
            <el-option label="少林地灵果" value="少林地灵果"/>
            <el-option label="华山灵芝" value="华山灵芝"/>
            <el-option label="风雷岛枯木" value="风雷岛枯木"/>
            <el-option label="金陵翠竹" value="金陵翠竹"/>
            <el-option label="江南翠竹" value="江南翠竹"/>
            <el-option label="江南榆木" value="江南榆木"/>
            <el-option label="江南松木" value="江南松木"/>
            <el-option label="江南桉木" value="江南桉木"/>
            <el-option label="中原碎石" value="中原碎石"/>
            <el-option label="中原黄铜" value="中原黄铜"/>
            <el-option label="中原立银" value="中原立银"/>
            <el-option label="塞北金矿" value="塞北金矿"/>
            <el-option label="塞北祖母绿" value="塞北祖母绿"/>
            <el-option label="塞北钨晶" value="塞北钨晶"/>
            <el-option label="江南碎鸡蛋" value="江南碎鸡蛋"/>
            <el-option label="江南石灰" value="江南石灰"/>
            <el-option label="江南烂木头" value="江南烂木头"/>
          </el-select>
        </el-container>
      </el-col>
    </el-row>

    <el-row class="mb-4" :gutter="5">
      <el-col :span="24">
        <el-container class="flex gap-x-xs">
          <el-input-tag
              v-model="taskConfigStore.customCoordinatesTags"
              delimiter=","
              placeholder="自定义坐标"
              aria-label="回车确认"
              clearable
          >
            <template #prefix>
              <el-select v-model="taskConfigStore.collectionMap" style="width: 100px">
                <el-option label="江南" value="江南"/>
              </el-select>
            </template>
          </el-input-tag>
        </el-container>
      </el-col>

    </el-row>

  </el-card>
</template>

<script setup lang="ts">
import useAcquisitionTaskCard
  from "@/views/script/components/task-card/acquisition-task-card/useAcquisitionTaskCard.ts";

const {taskConfigStore} = useAcquisitionTaskCard();
</script>

<style scoped>

</style>