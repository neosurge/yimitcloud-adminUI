<script lang="ts" setup>
import BpmFormModal from './FormModal.vue'
import { columns, searchFormSchema } from './form.data'
import { useGo } from '@/hooks/web/usePage'
import { useI18n } from '@/hooks/web/useI18n'
import { useMessage } from '@/hooks/web/useMessage'
import { useModal } from '@/components/Modal'
import { IconEnum } from '@/enums/appEnum'
import { BasicTable, TableAction, useTable } from '@/components/Table'
import { deleteFlow, getList } from '@/api/flow/list'

defineOptions({ name: 'BpmForm' })

const go = useGo()
const { t } = useI18n()
const { createMessage } = useMessage()
const [registerModal, { openModal }] = useModal()

const [registerTable, { reload }] = useTable({
  title: '流程表单列表',
  api: getList,
  columns,
  formConfig: { labelWidth: 120, schemas: searchFormSchema },
  useSearchForm: true,
  showTableSetting: true,
  fetchSetting: {
    // 请求接口当前页数
    pageField: 'page',
    // 每页显示多少条
    sizeField: 'pageSize',
    // 请求结果列表字段  支持 a.b.c
    listField: 'list',
  },
  actionColumn: {
    width: 220,
    title: t('common.action'),
    dataIndex: 'action',
    fixed: 'right',
  },
})

function handleCreate() {
  openModal(true, { isUpdate: false })
}

function openForm(record: Recordable) {
  openModal(true, { isUpdate: true, record })
}

function openDetail(record: Recordable) {
  if (record.id)
    go({ name: 'flowDesign', query: { id: record.id } })
}

async function handleDelete(record: Recordable) {
  await deleteFlow(record.id)
  createMessage.success(t('common.delSuccessText'))
  reload()
}
</script>

<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" :pre-icon="IconEnum.ADD" @click="handleCreate">
          {{ t('action.create') }}
        </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction :actions="[
            { icon: IconEnum.EDIT, label: t('action.edit'), onClick: openForm.bind(null, record) },
            { icon: IconEnum.VIEW, label: '流程配置', onClick: openDetail.bind(null, record) },
            {
              icon: IconEnum.DELETE,
              danger: true,
              label: t('action.delete'),
              popConfirm: {
                title: t('common.delMessage'),
                placement: 'left',
                confirm: handleDelete.bind(null, record),
              },
            },
          ]" />
        </template>
      </template>
    </BasicTable>
    <BpmFormModal @register="registerModal" @success="reload()" />
  </div>
</template>
