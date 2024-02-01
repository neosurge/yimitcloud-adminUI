import { defHttp } from '@/utils/http/axios'

// 执行流程
export function executeFlow(id, data) {
  return defHttp.post({ url: `/rule/process/execute/${id}`, data, timeout: 60 * 1000 })
}
