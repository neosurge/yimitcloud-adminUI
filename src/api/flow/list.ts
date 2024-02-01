import { defHttp } from '@/utils/http/axios'

// 创建工作流的表单定义
export function createFlow(data) {
  return defHttp.post({ url: '/rule/process', data })
}

// 更新工作流的表单定义
export function updateFlow(data) {
  return defHttp.put({ url: '/rule/process/' + data.id, data })
}


// 获得工作流的表单定义分页
export function getList(params) {
  return defHttp.get({ url: '/rule/process/page', params })
}


// 删除工作流的表单定义
export function deleteFlow(id) {
  return defHttp.delete({ url: `/rule/process/${id}` })
}

// 获得工作流的详情
export function getDetail(id) {
  return defHttp.get({ url: `/rule/process/${id}` })
}


