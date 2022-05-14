import { onMounted, ref } from 'vue'
import { message } from 'ant-design-vue'

import { Pagination, defaultPagination } from '~/types/pagination'
import {
  Comment,
  getCommentList,
  resolveComment,
  rejectComment,
} from '~/services/comment'

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: '内容',
    dataIndex: 'content',
  },
  {
    title: '作者ID',
    dataIndex: 'authorId',
  },
  {
    title: '文章ID',
    dataIndex: 'articleId',
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
  },
  {
    title: '更新时间',
    dataIndex: 'updatedAt',
  },
  {
    title: '操作',
    dataIndex: 'action',
  },
]

export const useComment = () => {
  const commentList = ref<Pagination<Comment>>(defaultPagination)

  onMounted(() => updateCommentList())

  const updateCommentList = async () => {
    commentList.value = await getCommentList()
  }

  const resolve = async (id: number) => {
    const { ok } = await resolveComment(id)

    if (ok) {
      message.success('审核成功')
    }
  }

  const reject = async (id: number) => {
    const { ok } = await rejectComment(id)

    if (ok) {
      message.success('已拒绝')
    }
  }

  return {
    columns,
    commentList,
    resolveComment: resolve,
    rejectComment: reject,
  }
}
