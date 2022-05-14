import { defineStore } from 'pinia'
import { getUser } from '~/services/auth'

export const useAuth = defineStore('auth', {
  state: () => ({
    user: null,
    fetched: false,
  }),
  actions: {
    async getUser() {
      const { ok, data } = await getUser()
      this.user = ok ? data : null
      this.fetched = true
    },
  },
})
