import { DiamondNode, DiamondNodeModel, h } from '@logicflow/core'
import { IdUtil } from '../utils/index'

class IfNodeModel extends DiamondNodeModel {
  initNodeData(data: any): void {
    super.initNodeData(data)
    this.setProperties({
      nodeType: 'IF',
      conditionNodeId: IdUtil.makeString(),
    })
  }

  getNodeStyle() {
    const style = super.getNodeStyle()
    style.stroke = 'rgb(24, 125, 255)'
    return style
  }
}

class IfNodeView extends DiamondNode {

}

export default {
  type: 'IfNode',
  view: IfNodeView,
  model: IfNodeModel,
}
