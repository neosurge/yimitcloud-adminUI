<template>
  <div class="flow-chart">
    <div class="header">
      <a-button type="primary" @click="saveFlow">
        <template #icon>
          <SaveOutlined />
        </template>
        保存
      </a-button>
      <a-button @click="execute">
        运行
        <template #icon>
          <PlayCircleOutlined />
        </template>
      </a-button>
      <a-button @click="changeLineType('pro-polyline')">
        <template #icon>
          <ReloadOutlined />
        </template>
        流程线
      </a-button>
      <a-button @click="changeLineType('pro-bezier')">
        <template #icon>
          <SyncOutlined />
        </template>
        曲线
      </a-button>
      <a-button @click="changeLineType('pro-line')">
        直线
        <template #icon>
          <LineOutlined />
        </template>
      </a-button>
      <!-- <a-button>全选</a-button> -->
      <a-button @click="handleBack">
        撤销
        <template #icon>
          <MinusCircleOutlined />
        </template>
      </a-button>

      <a-button @click="deleteNode">
        删除
        <template #icon>
          <DeleteOutlined />
        </template>
      </a-button>
      <!-- <a-button>缩放</a-button>
      <a-button>流程属性</a-button>
      <a-button>调试日志</a-button>
                    <a-button>任务监控</a-button> -->
    </div>
    <div class="flow_box">
      <div ref="container" class="container" />
      <!-- <Setting v-if="currentNode" :node-data="currentNode" class="setting-panel" @change-style="changeStyle" /> -->
      <NodeDrawer @register="registerDetailDrawer" :lf="lf"></NodeDrawer>
      <ExecuteDrawer @register="registerDetailDrawer1" :id="curId.value"></ExecuteDrawer>
    </div>
  </div>
</template>

<script setup>
import { LineOutlined, MinusCircleOutlined, DeleteOutlined, PlayCircleOutlined, ReloadOutlined, SaveOutlined, SyncOutlined } from '@ant-design/icons-vue'
import LogicFlow from '@logicflow/core'
import '@logicflow/core/dist/style/index.css'
import { BpmnElement, DndPanel, SelectionSelect } from '@logicflow/extension'
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { getDetail, updateFlow } from '@/api/flow/list'
import { executeFlow } from '@/api/flow/design'
import { useMessage } from '@/hooks/web/useMessage'
import NodeRedExtension from './node-red/index'
import { useDrawer } from '@/components/Drawer'
import './node-red/style.css'
import Setting from './node-red/tools/Setting.vue'
import { useGo } from '@/hooks/web/usePage'
import { Menu } from "@logicflow/extension";
import { Group } from '@logicflow/extension';
import NodeDrawer from './drawer/NodeDrawer.vue'
import ExecuteDrawer from './drawer/ExecuteDrawer.vue'

const { currentRoute } = useRouter()
const currentNode = ref(null)
const lf = ref(null)
const container = ref(null)//分组
const curFlow = ref({})
const curId = ref('')
const go = useGo()
const [registerDetailDrawer, { openDrawer }] = useDrawer()
const [registerDetailDrawer1, { openDrawer: openDrawer1 }] = useDrawer()

const { createMessage } = useMessage()
// 切换节点样式
// function changeStyle(style) {
//   lf.value.setProperties(currentNode.value.id, {
//     style,
//   })
// }

// 撤销
function handleBack() {
  lf.value.undo()
}

// 切换流程线类型
function changeLineType(v) {
  lf.value.setDefaultEdgeType(v)
}

// 保存流程
function saveFlow() {
  // console.log(lf.value.getGraphData())
  curFlow.value.processData = lf.value.getGraphData()
  curFlow.value.processData.nodes.forEach(node => {
    if (!node?.properties?.nodeId) {
      node.properties.nodeId = (node.properties?.componentScript?.language + '_' + node.id).replaceAll('-', '')
      node.properties.conditionNodeId = node.properties.nodeId.replaceAll('-', '')
    }
  })
  updateFlow(curFlow.value).then(() => {
    createMessage.success('保存成功')
    // go({ name: 'flowList' })
  })
}

// 删除节点
function deleteNode() {
  currentNode.value.id && lf.value.deleteNode(currentNode.value.id);
}

onMounted(async () => {
  // if (currentRoute.value.query?.id) {
  // const res = await getDetail(currentRoute.value.query.id || 'd3890ea1d8b41aab45a6c16467631f33')
  let res = await getDetail(currentRoute.value?.query?.id || 'd3890ea1d8b41aab45a6c16467631f33')
  curFlow.value = res

  // }
  curId.value = currentRoute.value?.query?.id || ''

  lf.value = new LogicFlow({
    container: container.value,
    grid: {
      visible: false,
      type: 'mesh',
      size: 10,
      config: {
        color: '#eeeeee',
      },
    },
    background: '',
    adjustEdge: false,
    hoverOutline: false,
    history: true,
    edgeSelectedOutline: false,
    keyboard: {
      enabled: true,
    },
    keyboard: true,
    plugins: [
      NodeRedExtension,
      BpmnElement,
      SelectionSelect,
      DndPanel,
      Menu,
      Group
    ],
  })
  lf.value.extension.menu.setMenuConfig({
    nodeMenu: [
      {
        className: "lf-menu-delete",
        text: "删除",
        callback(node) {
          lf.deleteNode(node.id);
        },
      },
    ],
    edgeMenu: [
      {
        text: "删除",
        callback(node) {
          lf.value.deleteNode(node.id);
        },
      },
    ],
    edgeMenu: false, // 删除默认的边右键菜单
    graphMenu: [], // 覆盖默认的边右键菜单，与false表现一样
  });


  if (curFlow.value.processData) {
    lf.value.render(curFlow.value.processData)
  } else {
    lf.value.render({
      nodes: [
        {
          id: 'node_1',
          type: 'bpmn:startEvent',
          x: 220,
          y: 200,
          text: '开始',
          properties: {
            nodeType: 'COMMON',
            componentScript: {
              // 脚本组件属性，只有组件类型为script的时候有值
              type: 'script',
              language: 'java',
              content: '',
              name: '条件',
            },
          },
        },
      ],
      edges: [],
    })
  }

  lf.value.on('node-red:start', () => {
    // todo: 让流程跑起来
    console.log('我要开始执行流程了')
  })
  lf.value.on('vue-node:click', (data) => {
    lf.value.setProperties(data.id, {
      t: ++data.val
    })
  })
  lf.value.on('node:click', ({ data }) => {
    currentNode.value = data
    if (data?.properties?.componentType) {
      openDrawer(true, data)
    }

  })
  lf.value.on('blank:click', ({ }) => {
    currentNode.value = null
    openDrawer(false, null)
  })

  lf.value.on('anchor:dragend', ({ data, e, nodeModel }) => {
    console.log('拖拽结束', data, e, nodeModel)
  })

  lf.value.on('edge:add', ({ data }) => {
    console.log('边增加', data,)
  })

})


// 执行流程
const execute = () => {
  const requestParams = {
    id: currentRoute.value?.query?.id,
  }
  openDrawer1(true, requestParams)
}


</script>



<style lang="less" scoped>
.flow-chart {
  position: relative;
  width: 100%;
  height: 100%;
  background: #fff;

  .container {
    width: 100%;
    height: 100%;
  }
}

.header {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border: 2px solid #eee;
}

.flow_box {
  position: relative;
  height: calc(100% - 42px);
  width: 100%;
}


.flow-chart /deep/ .lf-red-node,
.flow-chart /deep/ .lf-element-text {
  cursor: move;
}

.flow-chart /deep/ svg {
  display: block;
}

.flow-chart-palette {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.setting-panel {
  position: absolute;
  top: 0;
  right: 0;
}

:deep(.ant-btn+.ant-btn) {
  margin-left: 8px;
}

// css 设置
.lf-menu-delete .lf-menu-item-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url("./delete.png") no-repeat;
  background-size: 20px;
}
</style>
