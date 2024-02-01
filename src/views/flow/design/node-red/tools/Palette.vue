<script lang="ts" setup>
import LogicFlow from '@logicflow/core'
import { Collapse, CollapsePanel } from 'ant-design-vue'
import { ref } from 'vue'
import { nodeArr } from './palette.data'

const props = defineProps({
  lf: {
    type: LogicFlow,
    required: true,
  },
})

const activeKey = ref(['数据输入组件'])
function startDrag(item) {
  const { lf } = props
  lf.dnd.startDrag({
    type: item.type,
    text: item.hideText ? '' : item.text,
    properties: item.properties || {}
  })
}
</script>

<template>
  <div class="demo-collapse">
    <Collapse v-model:activeKey="activeKey" accordion>
      <CollapsePanel v-for="(node) in nodeArr" :key="node.name">
        <template #header>
          <div class="col_header">
            <span>{{ node.name }}</span>
            <span class="num">{{ node.child.length }}</span>
          </div>
        </template>
        <div v-for="(item, index) in node.child" :key="index" class="red-ui-palette-node ui-draggable ui-draggable-handle"
          :style="{ backgroundColor: item.background }" @mousedown="startDrag(item)">

          <div class="red-ui-palette-icon-container" v-if="item.icon">
            <div class="red-ui-palette-icon" :style="{ backgroundImage: `url(${item.icon})` }"></div>
          </div>
          <div class="red-ui-palette-label">
            {{ item.text }}
          </div>
          <div class="red-ui-palette-port red-ui-palette-port-input" />
          <div class="red-ui-palette-port red-ui-palette-port-output" />
        </div>
      </CollapsePanel>
    </Collapse>
  </div>
</template>

<style lang="less" scoped>
.demo-collapse {
  width: 180px;
}

.demo-collapse /deep/ .el-collapse-item__header {
  text-indent: 20px;
}

.red-ui-palette-node {
  position: relative;
  display: flex;
  width: 140px;
  height: 25px;
  margin: 10px auto;
  cursor: move;
  background: #fff;
  background-repeat: no-repeat;
  background-position: 5% 50%;
  background-size: contain;
  border: 1px solid #999;
  border-radius: 5px;
}

.red-ui-palette-label {
  width: calc(100% - 30px);
  overflow: hidden;
  font-size: 13px;
  line-height: 20px;
  color: #333;
  text-align: center;
  user-select: none;
}

.red-ui-palette-icon-container {

  width: 30px;
  text-align: center;
  background-color: rgb(0 0 0 / 5%);
  border-right: 1px solid rgb(0 0 0 / 5%);
}

.red-ui-palette-icon {
  display: inline-block;
  width: 20px;
  height: 100%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;
}

.red-ui-palette-port {
  position: absolute;
  top: 6px;
  left: -5px;
  box-sizing: border-box;
  width: 10px;
  height: 10px;
  background: #f3f4f4;
  border: 1px solid #999;
  border-radius: 3px;
}

.red-ui-palette-port-output {
  right: -6px;
  left: auto;
}

.col_header {
  display: flex;
  justify-content: space-between;

  .num {
    font-family: 'PingFang Regular';
    font-weight: bold;
  }
}
</style>
