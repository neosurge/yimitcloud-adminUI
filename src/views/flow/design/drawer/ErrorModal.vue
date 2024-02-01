<script lang="ts" setup>
import { ref, } from 'vue'
import { BasicModal, useModalInner } from '@/components/Modal'
import { List, ListItem, ListItemMeta, Tag } from 'ant-design-vue';
interface ErrorStack {
  classLoaderName: string,
  className: string,
  fileName: string,
  lineNumber: number,
  methodName: string,
  moduleName: string,
  nativeMethod: boolean
}
interface Exception {
  message: string,
  stackTrace: ErrorStack[]
}
interface ErrorData {
  nodeName: string,
  nodeId: string,
  endTime: number,
  startTime: number,
  exception: Exception
}
const emit = defineEmits(['success', 'register'])
const errorData = ref<ErrorData>({
  nodeName: '',
  nodeId: '',
  endTime: 0,
  startTime: 0,
  exception: {
    message: '',
    stackTrace: []
  }
})

const [registerModal] = useModalInner(async (data) => {
  errorData.value = data
})

const returnListKey = (item) => {
  const keys = Object.keys(item)
  return keys.length ? keys : []
}

</script>

<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :showOkBtn="false" cancelText="关闭">
    <div class="error_title">
      节点名称：{{ errorData.nodeName }}
    </div>
    <div class="error_message">
      {{ `错误信息：${errorData.exception.message}` }}
    </div>
    <div class="des">
      错误堆栈信息:
    </div>
    <List item-layout="horizontal" :data-source="errorData.exception.stackTrace">
      <template #renderItem="{ item }">
        <ListItem>
          <ListItemMeta>
            <template #description>
              <template v-for="key in returnListKey(item)">
                <div>{{ `${key}:${item[key]}` }}</div>
              </template>
            </template>
            <template #title>
              <Tag color="red">错误信息</Tag>
            </template>
          </ListItemMeta>
        </ListItem>
      </template>
    </List>
  </BasicModal>
</template>

<style lang="less" scoped>
.error_title {
  font-weight: bold;
  font-size: 16px;
}
</style>
