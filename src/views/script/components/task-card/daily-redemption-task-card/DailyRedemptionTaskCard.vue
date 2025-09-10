<!--
 * @Description: 
 * @Author: thrient
 * @Date: 2025/8/25 12:10
 * @LastEditors: thrient
 * @LastEditTime: 2025/8/25 12:10
-->
<template>
  <el-card class="w-100%" shadow="hover">
    <el-checkbox-group v-model="taskConfigStore.dailyExchangeList">
      <el-row class="m-b" :gutter="5">
        <el-col :span="6">
          <el-container class="flex gap-x-xs">
            <el-checkbox label="银票礼盒" value="银票礼盒"/>
          </el-container>
        </el-col>

        <el-col :span="6">
          <el-container class="flex gap-x-xs">
            <el-checkbox label="吴越剑坯" value="吴越剑坯"/>
          </el-container>
        </el-col>

        <el-col :span="6">
          <el-container class="flex gap-x-xs">
            <el-checkbox label="白公鼎坯" value="白公鼎坯"/>
          </el-container>
        </el-col>

        <el-col :span="6">
          <el-container class="flex gap-x-xs">
            <el-checkbox label="摇钱树" value="摇钱树"/>
            <el-select v-model="taskConfigStore.moneyTreeSelect">
              <el-option label="轻轻摇" value="轻轻摇"/>
              <el-option label="用力摇" value="用力摇"/>
              <el-option label="全力摇" value="全力摇"/>
            </el-select>
          </el-container>
        </el-col>
      </el-row>

      <el-row class="m-b" :gutter="5">
        <el-col :span="6">
          <el-container class="flex gap-x-xs">
            <el-checkbox label="商会鸡蛋" value="商会鸡蛋"/>
          </el-container>
        </el-col>

        <el-col :span="6">
          <el-container class="flex gap-x-xs">
            <el-checkbox label="榫头卯眼" value="榫头卯眼"/>
          </el-container>
        </el-col>

        <el-col :span="6">
          <el-container class="flex gap-x-xs">
            <el-checkbox label="锦芳绣残片" value="锦芳绣残片"/>
          </el-container>
        </el-col>

        <el-col :span="6">
          <el-container class="flex gap-x-xs">
            <el-checkbox label="商票上缴" value="商票上缴"/>
          </el-container>
        </el-col>

      </el-row>

      <el-row class="m-b" :gutter="5">
        <el-col :span="6">
          <el-container class="flex gap-x-xs">
            <el-checkbox label="艾草购买" value="艾草购买"/>
          </el-container>
        </el-col>

        <el-col :span="6">
          <el-container class="flex gap-x-xs">
            <el-checkbox label="莲子购买" value="莲子购买"/>
          </el-container>
        </el-col>

        <el-col :span="6">
          <el-container class="flex gap-x-xs">
            <el-checkbox label="帮派铜钱捐献" value="帮派铜钱捐献"/>
          </el-container>
        </el-col>

        <el-col :span="6">
          <el-container class="flex gap-x-xs">
            <el-checkbox label="帮派银两捐献" value="帮派银两捐献"/>
          </el-container>
        </el-col>


      </el-row>

      <el-row class="m-b" :gutter="5">
        <el-col :span="24">
          <el-container class="flex gap-x-xs">
            <el-checkbox label="神厨食材购买" value="神厨食材购买"/>
            <el-input-tag
                v-model="taskConfigStore.chefIngredientsTags"
                placeholder="输入神厨食材名称"
                aria-label="回车确认"
                clearable
            />
          </el-container>
        </el-col>
      </el-row>

      <el-row class="m-b" :gutter="5">
        <el-col :span="24">
          <el-container class="flex gap-x-xs">
            <el-checkbox label="神厨调料购买" value="神厨调料购买"/>
            <el-input-tag
                v-model="taskConfigStore.chefSeasoningTags"
                placeholder="输入神厨调料名称"
                aria-label="回车确认"
                clearable
            />
          </el-container>
        </el-col>


      </el-row>


    </el-checkbox-group>

  </el-card>
</template>

<script setup lang="ts">
import useDailyRedemptionTaskCard
  from "@/views/script/components/task-card/daily-redemption-task-card/useDailyRedemptionTaskCard.ts";

const {taskConfigStore} = useDailyRedemptionTaskCard()
</script>

<style scoped>

</style>