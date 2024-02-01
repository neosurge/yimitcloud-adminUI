import { h } from '@logicflow/core'
import BaseNode from './BaseNode'
import switchImg from '@/assets/images/flow/switch.svg'

class SwitchNode extends BaseNode.view {
  getIcon() {
    const {
      width,
      height,
    } = this.props.model
    return h('image', {
      width: 30,
      height: 30,
      x: -width / 2,
      y: -height / 2,
      href: switchImg,
    })
  }
}

class SwitchNodeModel extends BaseNode.model {
  initNodeData(data) {
    super.initNodeData(data)
    this.defaultFill = 'rgb(203, 220, 247)'
  }
}

export default {
  type: 'switch-node',
  model: SwitchNodeModel,
  view: SwitchNode,
}
