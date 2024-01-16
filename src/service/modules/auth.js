import request from '@/plugin/axios'

export const queryUser = () => request('get', '/user')
