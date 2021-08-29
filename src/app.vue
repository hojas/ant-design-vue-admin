<template>
  <a-layout>
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="py-20px text-white text-20px text-center">朝闻道</div>
      <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
        <a-menu-item key="user">
          <user-outlined />
          <span>用户管理</span>
        </a-menu-item>
        <a-menu-item key="role">
          <video-camera-outlined />
          <span>角色管理</span>
        </a-menu-item>
        <a-menu-item key="category">
          <upload-outlined />
          <span>分类管理</span>
        </a-menu-item>
        <a-menu-item key="article">
          <upload-outlined />
          <span>文章管理</span>
        </a-menu-item>
        <a-menu-item key="tag">
          <upload-outlined />
          <span>标签管理</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="!bg-white !p-0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="
            text-18px
            leading-64px
            px-24px
            cursor-pointer
            transition-color
            duration-300
            hover:text-blue-700
          "
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="
            text-18px
            leading-64px
            px-24px
            cursor-pointer
            transition-color
            duration-300
            hover:text-blue-700
          "
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content class="my-24px mx-16px p-24px bg-white !min-h-300px">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue'

const selectedKeys = ref<string[]>(['user'])
const collapsed = ref<boolean>(false)
</script>
