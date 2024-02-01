import { createApp } from 'vue'
import FunctionNode from './nodes/FunctionNode'

// import SwitchNode from './nodes/SwitchNode'
import StartNode from './nodes/StartNode'
import FetchNode from './nodes/FetchNode'
import DelayNode from './nodes/DelayNode'
import FlowLink from './FlowLink'
import Palette from './tools/Palette.vue'
import VueHtmlNode from './nodes/VueHtmlNode'
import IfNode from './nodes/IfNode'
import SwitchNode from './nodes/SwitchNode'
import WhenGroupNode from './nodes/WhenGroupNode'

// 注册边
import Ployline from './edge/Polyline'
import Line from './edge/Line'
import Bezier from './edge/Bezier'

class NodeRedExtension {
  static pluginName = 'NodeRedExtension'
  constructor({ lf }) {
    lf.register(IfNode)
    lf.register(SwitchNode)
    lf.register(WhenGroupNode)

    lf.register(FunctionNode)
    lf.register(StartNode)
    lf.register(FetchNode)
    lf.register(FlowLink)
    lf.register(DelayNode)
    lf.register(VueHtmlNode)
    // 注册边
    lf.register(Ployline)
    lf.register(Line)
    lf.register(Bezier)
    lf.setDefaultEdgeType('flow-link')
    this.app = createApp(Palette, {
      lf,
    })
  }

  render(lf, domOverlay) {
    const node = document.createElement('div')
    node.className = 'node-red-palette'
    domOverlay.appendChild(node)
    this.app.mount(node)
  }
}

export default NodeRedExtension
