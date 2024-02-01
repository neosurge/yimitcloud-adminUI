import type { FormSchema } from '@/components/Table'

export const formSchema: FormSchema[] = [
  {
    label: '编号',
    field: 'id',
    show: false,
    component: 'Input',
  },
  {
    label: '节点名称',
    field: 'text',
    required: true,
    component: 'Input',
  },
  {
    label: '脚本语言',
    field: 'language',
    required: true,
    component: 'Select',
    componentProps: {
      options: [
        { value: 'java' },
        { value: 'groovy' },
        { value: 'javascript' },
      ],
    },
  },
  {
    label: '执行脚本',
    field: 'script',
    component: 'Input',
    slot: 'script',
  },
]

// 根据当前节点追加内容
export const addFormSchema = {
  email: [
    {
      label: '邮箱号',
      field: 'email',
      show: true,
      component: 'Input',
      rules: [
        { required: true, message: '请输入邮箱号', trigger: 'blur' },
        { type: 'email', message: '请输入正确的邮箱号', trigger: ['blur', 'change'] },
      ],
    },
  ],
  phone: [
    {
      label: '手机号',
      field: 'phone',
      show: true,
      component: 'Input',
      rules: [
        { required: true, message: '请输入手机号', trigger: 'blur' },
        { pattern: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/, message: '请输入正确的手机号', trigger: ['blur', 'change'] },
      ],
    },
  ],
}
