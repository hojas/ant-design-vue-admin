import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons-vue'

export const menu = [
  {
    key: 'user',
    to: '/user',
    name: '用户管理',
    icon: UserOutlined,
  },
  {
    key: 'role',
    to: '/role',
    name: '角色管理',
    icon: VideoCameraOutlined,
  },
  {
    key: 'category',
    to: '/category',
    name: '分类管理',
    icon: UploadOutlined,
  },
  {
    key: 'article',
    to: '/article',
    name: '文章管理',
    icon: UploadOutlined,
  },
  {
    key: 'tag',
    to: '/tag',
    name: '标签管理',
    icon: UploadOutlined,
  },
]

export const selectedKeys = ref<string[]>(['user'])
export const collapsed = ref<boolean>(false)

export const useMenu = () => {
  const route = useRoute()

  watch(
    () => route.path,
    path => {
      const matchList = /(\w+)/.exec(path) || []
      const pathKey = matchList.length > 1 ? matchList[1] : 'user'

      selectedKeys.value = [pathKey]
    },
  )
}
