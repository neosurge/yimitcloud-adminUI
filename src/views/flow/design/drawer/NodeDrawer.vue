<script  setup>
import { BasicDrawer, useDrawerInner } from '@/components/Drawer'
import { formSchema } from './node.data'
import { BasicForm, useForm } from '@/components/Form'
import { CodeEditor, MODE } from '@/components/CodeEditor'
import { ref } from 'vue'
const props = defineProps({
  lf: {
    type: Object,
    default: () => { }
  }
})

const curNode = ref({})
const emit = defineEmits(['success', 'register'])

const [registerForm, { setFieldsValue, resetFields, validate }] = useForm({
  labelWidth: 80,
  baseColProps: { span: 24 },
  schemas: formSchema,
  showActionButtonGroup: false,
  actionColOptions: { span: 23 },
  showSubmitButton: true,
  layout: 'horizontal',
})
const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
  setDrawerProps({ loading: true })
  resetFields()
  curNode.value = data
  const obj = {
    id: data.id,
    text: data.text?.value,
    language: data.properties?.componentScript?.language || '',
    script: data.properties?.componentScript?.content || ''
  }
  setFieldsValue({ ...obj })
  setDrawerProps({ loading: false })
})




async function handleSubmit() {
  const values = await validate()
  props.lf.updateText(values.id, values.text);
  if (curNode.value.properties)
    curNode.value.properties.componentScript = { language: values.language, content: values.script || '' };
  props.lf.setProperties(values.id, {
    ...curNode.value.properties,
    nodeId: (values.language + '_' + values.id).replaceAll('-', ''),
    conditionNodeId: (values.language + '_' + values.id).replaceAll('-', ''),
  });
  console.log('保存:', {
    ...curNode.value.properties,
    nodeId: (values.language + '_' + values.id).replaceAll('-', ''),
    conditionNodeId: (values.language + '_' + values.id).replaceAll('-', ''),
  })
  emit('success')
  closeDrawer()
}


</script>

<template>
  <BasicDrawer v-bind="$attrs" title="设置节点属性" width="40%" @register="registerDrawer">
    <BasicForm @register="registerForm">
      <template #script="{ model, field }">
        <div class="code_box">
          <CodeEditor v-model:value="model[field]" :mode="MODE.JSON" bordered />
        </div>
      </template>
      <template #formFooter>
        <div class="footer">
          <a-button type="primary" @click="handleSubmit">提交</a-button>
        </div>
      </template>
    </BasicForm>

  </BasicDrawer>
</template>
<style lang="less" scoped>
.code_box {
  width: calc(100% - 60px);
  padding: 5px;
  height: 400px;
  overflow-y: auto;
  border: 1px solid #ccc;
}

.footer {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>