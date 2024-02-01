import { h } from '@logicflow/core'
import BaseNode from "./BaseNode"
import threeParty from '@/assets/images/flow/threeParty.svg'
class DelayNode extends BaseNode.view {
  getIcon () {
    const {
      width,
      height,
    } = this.props.model;
    return h('image', {
      width: 30,
      height: 30,
      x: - width / 2,
      y: - height / 2,
      href: threeParty
    })
  }
}

class DelayNodeModel extends BaseNode.model {
  initNodeData (data) {
    super.initNodeData(data)
    this.defaultFill = '#bfe2f4'
  }
}

export default {
  type: 'delay-node',
  model: DelayNodeModel,
  view: DelayNode
}
