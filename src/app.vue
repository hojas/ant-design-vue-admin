<script lang="ts" setup>
import { ConfigProvider } from 'ant-design-vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'

import { useApp } from './hooks/useApp'

const { menu, selectedKeys, collapsed } = useApp()
</script>

<template>
  <config-provider :locale="zhCN">
    <a-layout>
      <a-layout-sider
        v-if="!$route.path.includes('/login')"
        v-model:collapsed="collapsed"
        :trigger="null"
        collapsible
      >
        <div class="py-[20px] text-white text-[20px] text-center">朝闻道</div>
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
          <a-menu-item v-for="item in menu" :key="item.key">
            <router-link :to="item.to">
              <component :is="item.icon" />
              <span>{{ item.name }}</span>
            </router-link>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout class="!min-h-[100vh]">
        <a-layout-header class="!bg-white !p-0">
          <component
            :is="collapsed ? MenuUnfoldOutlined : MenuFoldOutlined"
            class="text-18px px-[24px] cursor-pointer transition-color duration-300 hover:text-blue-700"
            @click="() => (collapsed = !collapsed)"
          />
        </a-layout-header>
        <a-layout-content
          class="my-[24px] mx-[16px] p-[24px] bg-white !min-h-[calc(100%_-_64px)]"
        >
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </config-provider>
</template>
