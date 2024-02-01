<script  setup>
import { BasicDrawer, useDrawerInner } from '@/components/Drawer'
import { ref } from 'vue'
import { List, ListItem, ListItemMeta, Tag } from 'ant-design-vue';
import { executeFlow } from '@/api/flow/design'
import { useModal } from '@/components/Modal'
import ErrorModal from './ErrorModal.vue';
const [registerModal, { openModal }] = useModal()
const props = defineProps({
  id: {
    type: String,
    default: () => { }
  }
})

const loading = ref(false)
const listData = ref([])

const emit = defineEmits(['success', 'register'])


const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
  loading.value = true
  executeFlow(data.id, { way: '' }).then(res => {
    listData.value = res || []
    loading.value = false
  })
})

// 时间戳转年月日时分秒
const getDate = (time) => {
  return new Date(time).toLocaleString().replace(/:\d{1,2}$/, ' ');
}

// 查看失败详情
const showDetail = (data) => {
  openModal(true, data)
}


</script>

<template>
  <BasicDrawer v-bind="$attrs" title="执行记录" width="30%" @register="registerDrawer">
    <List :loading="loading" item-layout="horizontal" :data-source="listData">
      <template #renderItem="{ item }">
        <ListItem>
          <template #actions>
            <a v-if="!item.success" @click="showDetail(item)">查看详情</a>
          </template>
          <ListItemMeta>
            <template #description>
              <div>{{ `开始时间:${getDate(item.startTime)}` }}</div>
              <div>{{ ` 结束时间:${getDate(item.endTime)}` }}</div>
              <div>{{ `耗时:${item.endTime - item.startTime}毫秒` }}</div>
            </template>
            <template #title>
              <span class="node_title">节点名称:{{ item.nodeName }}</span>
              <Tag v-if="item.success" color="green">执行成功</Tag>
              <Tag v-else color="red">执行失败</Tag>
            </template>
            <template #avatar>
              <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </template>
          </ListItemMeta>
        </ListItem>
      </template>
    </List>
  </BasicDrawer>
  <ErrorModal @register="registerModal" />
</template>
<style lang="less" scoped>


.node_title {
  margin-right: 15px;
  font-weight: bold;
}
</style>