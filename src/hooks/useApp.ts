import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import {
  DashboardOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  CommentOutlined,
} from '@ant-design/icons-vue'

const menu = [
  {
    key: 'dashboard',
    to: '/',
    name: 'Dashboard',
    icon: DashboardOutlined,
  },
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
  {
    key: 'comment',
    to: '/comment',
    name: '评论管理',
    icon: CommentOutlined,
  },
]

const selectedKeys = ref<string[]>(['dashboard'])
const collapsed = ref<boolean>(false)

export const useApp = () => {
  const route = useRoute()

  watch(
    () => route.path,
    path => {
      const matchList = /(\w+)/.exec(path) || []
      const pathKey = matchList.length > 1 ? matchList[1] : ''

      selectedKeys.value = [pathKey]
    }
  )

  return {
    menu,
    selectedKeys,
    collapsed,
  }
}
