import type { BasicColumn, FormSchema } from '@/components/Table'
import { useRender } from '@/components/Table'
import { DICT_TYPE } from '@/utils/dict'

export const columns: BasicColumn[] = [
  {
    title: '流程ID',
    dataIndex: 'id',
  },
  {
    title: '流程名称',
    dataIndex: 'processName',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    customRender: ({ text }) => {
      return useRender.renderDate(text)
    },
  },
  {
    title: '修改时间',
    dataIndex: 'updateTime',
    customRender: ({ text }) => {
      return useRender.renderDate(text)
    },
  },
]

export const searchFormSchema: FormSchema[] = [
  {
    label: '流程名称',
    field: 'processName',
    component: 'Input',
    colProps: { span: 8 },
  },
]


export const formSchema: FormSchema[] = [
  {
    label: 'id',
    field: 'id',
    component: 'Input',
    show: false,
  },
  {
    label: 'processData',
    field: 'processData',
    component: 'Input',
    show: false,
  },
  {
    label: '流程名称',
    field: 'processName',
    component: 'Input',
    required: true
  },

]
