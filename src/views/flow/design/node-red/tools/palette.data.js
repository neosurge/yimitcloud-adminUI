import fetchImg from '@/assets/images/flow/fetch.svg'
import startImg from '@/assets/images/flow/start.svg'
import threeParty from '@/assets/images/flow/threeParty.svg'
import phone from '@/assets/images/flow/短信.svg'
import email from '@/assets/images/flow/邮件.svg'
import weixin from '@/assets/images/flow/微信企业号.svg'
import dingding from '@/assets/images/flow/钉钉.svg'
import feishu from '@/assets/images/flow/飞书.svg'
import group from '@/assets/images/flow/group.png'
import switchImg from '@/assets/images/flow/switch.svg'

export const nodeArr = [
  {
    name: '数据输入组件',
    child: [
      {
        type: 'fetch-node',
        text: '数据表输入',
        background: '#e7e7ae',
        icon: fetchImg,
      },
      {
        type: 'fetch-node',
        text: '元数据输入',
        background: '#e7e7ae',
        icon: fetchImg,
      },
      {
        type: 'fetch-node',
        text: '数据表批量输入',
        background: '#e7e7ae',
        icon: fetchImg,
      },
      {
        type: 'fetch-node',
        text: '分布式数据抽取',
        background: '#e7e7ae',
        icon: fetchImg,
      },
      {
        type: 'fetch-node',
        text: 'Restful API输入',
        background: '#e7e7ae',
        icon: fetchImg,
      },
      {
        type: 'fetch-node',
        text: 'Mongo数据输入',
        background: '#e7e7ae',
        icon: fetchImg,
      },
      {
        type: 'fetch-node',
        text: 'Mongo数据输入',
        background: '#e7e7ae',
        icon: fetchImg,
      },
      {
        type: 'fetch-node',
        text: 'Mongo数据输入',
        background: '#e7e7ae',
        icon: fetchImg,
      },
      {
        type: 'fetch-node',
        text: '缓冲库输入',
        background: '#e7e7ae',
        icon: fetchImg,
      },
      {
        type: 'fetch-node',
        text: 'Redis数据输入',
        background: '#e7e7ae',
        icon: fetchImg,
      },
      {
        type: 'fetch-node',
        text: 'Kafka数据输入',
        background: '#e7e7ae',
        icon: fetchImg,
      },
      {
        type: 'fetch-node',
        text: '执行存储过程',
        background: '#e7e7ae',
        icon: fetchImg,
      },
      {
        type: 'fetch-node',
        text: '数据生成器',
        background: '#e7e7ae',
        icon: fetchImg,
      },
    ],
  },
  {
    name: '数据输出组件',
    child: [
      {
        type: 'start-node',
        text: '数据库表输出',
        background: '#a6bbcf',
        icon: startImg,
      },
      {
        type: 'start-node',
        text: 'Oracle数据库表输出',
        background: '#a6bbcf',
        icon: startImg,
      },
      {
        type: 'start-node',
        text: '输出EXCEL文件',
        background: '#a6bbcf',
        icon: startImg,
      },

      {
        type: 'start-node',
        text: '移动或删除文件',
        background: '#a6bbcf',
        icon: startImg,
      },
      {
        type: 'start-node',
        text: 'PDF文件上传',
        background: '#a6bbcf',
        icon: startImg,
      },
      {
        type: 'start-node',
        text: '输出数据文件',
        background: '#a6bbcf',
        icon: startImg,
      },
      {
        type: 'start-node',
        text: '输出EXCEL文件',
        background: '#a6bbcf',
        icon: startImg,
      },
    ],
  },
  {
    name: '数据中台',
    child: [
      {
        type: 'delay-node',
        text: '配置数据源',
        background: '#fff',
        icon: threeParty,
      },
      {
        type: 'delay-node',
        text: '连接数据库',
        background: '#fff',
        icon: threeParty,
      },
      {
        type: 'delay-node',
        text: '查询数据',
        background: '#fff',
        icon: threeParty,
      },

      {
        type: 'delay-node',
        text: '数据清洗',
        background: '#fff',
        icon: threeParty,
      },
      {
        type: 'delay-node',
        text: '数据入库',
        background: '#fff',
        icon: threeParty,
      },
      {
        type: 'delay-node',
        text: '调用数据查询API',
        background: '#fff',
        icon: threeParty,
      },
    ],
  },

  {
    name: '物联网中台',
    child: [
      {
        type: 'delay-node',
        text: '定时任务',
        background: '#fff',
        icon: threeParty,
      },
      {
        type: 'delay-node',
        text: '遥测数据上传',
        background: '#fff',
        icon: threeParty,
      },
      {
        type: 'delay-node',
        text: '获取设备位置',
        background: '#fff',
        icon: threeParty,
      },

      {
        type: 'delay-node',
        text: '设备告警',
        background: '#fff',
        icon: threeParty,
      },
      {
        type: 'delay-node',
        text: '设备接入',
        background: '#fff',
        icon: threeParty,
      },
      {
        type: 'delay-node',
        text: '信息转发',
        background: '#fff',
        icon: threeParty,
      },
    ],
  },

  {
    name: '流程通用组件',
    child: [
      {
        type: 'bpmn:startEvent',
        text: '开始节点',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAAH6ji2bAAAABGdBTUEAALGPC/xhBQAAAnBJREFUOBGdVL1rU1EcPfdGBddmaZLiEhdx1MHZQXApraCzQ7GKLgoRBxMfcRELuihWKcXFRcEWF8HBf0DdDCKYRZpnl7p0svLe9Zzbd29eQhTbC8nv+9zf130AT63jvooOGS8Vf9Nt5zxba7sXQwODfkWpkbjTQfCGUd9gIp3uuPP8bZ946g56dYQvnBg+b1HB8VIQmMFrazKcKSvFW2dQTxJnJdQ77urmXWOMBCmXM2Rke4S7UAW+/8ywwFoewmBps2tu7mbTdp8VMOkIRAkKfrVawalJTtIliclFbaOBqa0M2xImHeVIfd/nKAfVq/LGnPss5Kh00VEdSzfwnBXPUpmykNss4lUI9C1ga+8PNrBD5YeqRY2Zz8PhjooIbfJXjowvQJBqkmEkVnktWhwu2SM7SMx7Cj0N9IC0oQXRo8xwAGzQms+xrB/nNSUWVveI48ayrFGyC2+E2C+aWrZHXvOuz+CiV6iycWe1Rd1Q6+QUG07nb5SbPrL4426d+9E1axKjY3AoRrlEeSQo2Eu0T6BWAAr6COhTcWjRaYfKG5csnvytvUr/WY4rrPMB53Uo7jZRjXaG6/CFfNMaXEu75nG47X+oepU7PKJvvzGDY1YLSKHJrK7vFUwXKkaxwhCW3u+sDFMVrIju54RYYbFKpALZAo7sB6wcKyyrd+aBMryMT2gPyD6GsQoRFkGHr14TthZni9ck0z+Pnmee460mHXbRAypKNy3nuMdrWgVKj8YVV8E7PSzp1BZ9SJnJAsXdryw/h5ctboUVi4AFiCd+lQaYMw5z3LGTBKjLQOeUF35k89f58Vv/tGh+l+PE/wG0rgfIUbZK5AAAAABJRU5ErkJggg==',
        background: '#fff',
        properties: {
          nodeType: 'COMMON',
          componentScript: {
            // 脚本组件属性，只有组件类型为script的时候有值
            language: 'java',
            content: '',
          },
        },
      },
      {
        type: 'bpmn:userTask',
        text: '用户任务',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAEFVwZaAAAABGdBTUEAALGPC/xhBQAAAqlJREFUOBF9VM9rE0EUfrMJNUKLihGbpLGtaCOIR8VjQMGDePCgCCIiCNqzCAp2MyYUCXhUtF5E0D+g1t48qAd7CCLqQUQKEWkStcEfVGlLdp/fm3aW2QQdyLzf33zz5m2IsAZ9XhDpyaaIZkTS4ASzK41TFao88GuJ3hsr2pAbipHxuSYyKRugagICGANkfFnNh3HeE2N0b3nN2cgnpcictw5veJIzxmDamSlxxQZicq/mflxhbaH8BLRbuRwNtZp0JAhoplVRUdzmCe/vO27wFuuA3S5qXruGdboy5/PRGFsbFGKo/haRtQHIrM83bVeTrOgNhZReWaYGnE4aUQgTJNvijJFF4jQ8BxJE5xfKatZWmZcTQ+BVgh7s8SgPlCkcec4mGTmieTP4xd7PcpIEg1TX6gdeLW8rTVMVLVvb7ctXoH0Cydl2QOPJBG21STE5OsnbweVYzAnD3A7PVILuY0yiiyDwSm2g441r6rMSgp6iK42yqroI2QoXeJVeA+YeZSa47gZdXaZWQKTrG93rukk/l2Al6Kzh5AZEl7dDQy+JjgFahQjRopSxPbrbvK7GRe9ePWBo1wcU7sYrFZtavXALwGw/7Dnc50urrHJuTPSoO2IMV3gUQGNg87IbSOIY9BpiT9HV7FCZ94nPXb3MSnwHn/FFFE1vG6DTby+r31KAkUktB3Qf6ikUPWxW1BkXSPQeMHHiW0+HAd2GelJsZz1OJegCxqzl+CLVHa/IibuHeJ1HAKzhuDR+ymNaRFM+4jU6UWKXorRmbyqkq/D76FffevwdCp+jN3UAN/C9JRVTDuOxC/oh+EdMnqIOrlYteKSfadVRGLJFJPSB/ti/6K8f0CNymg/iH2gO/f0DwE0yjAFO6l8JaR5j0VPwPwfaYHqOqrCI319WzwhwzNW/aQAAAABJRU5ErkJggg==',
        background: '#fff',
        properties: {
          nodeType: 'COMMON',
          nodeId: '',
          componentType: 'script', // 组件类型
          componentScript: {
            // 脚本组件属性，只有组件类型为script的时候有值
            language: 'java',
            content: '',
          },
        },
      },
      {
        type: 'IfNode',
        text: '条件判断',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAAHeEJUAAAAABGdBTUEAALGPC/xhBQAAAvVJREFUOBGNVEFrE0EU/mY3bQoiFlOkaUJrQUQoWMGePLX24EH0IIoHKQiCV0G8iE1covgLiqA/QTzVm1JPogc9tIJYFaQtlhQxqYjSpunu+L7JvmUTU3AgmTfvffPNN++9WSA1DO182f6xwILzD5btfAoQmwL5KJEwiQyVbSVZ0IgRyV6PTpIJ81E5ZvqfHQR0HUOBHW4L5Et2kQ6Zf7iAOhTFAA8s0pEP7AXO1uAA52SbqGk6h/6J45LaLhO64ByfcUzM39V7ZiAdS2yCePPEIQYvTUHqM/n7dgQNfBKWPjpF4ISk8q3J4nB11qw6X8l+FsF3EhlkEMfrjIer3wJTLwS2aCNcj4DbGxXTw00JmAuO+Ni6bBxVUCvS5d9aa04+so4pHW5jLTywuXAL7jJ+D06sl82Sgl2JuVBQn498zkc2bGKxULHjCnSMadBKYDYYHAtsby1EQ5lNGrQd4Y3v4Zo0XdGEmDno46yCM9Tk+RiJmUYHS/aXHPNTcjxcbTFna000PFJHIVZ5lFRqRpJWk9/+QtlOUYJj9HG5pVFEU7zqIYDVsw2s+AJaD8wTd2umgSCCyUxgGsS1Y6TBwXQQTFuZaHcd8gAGioE90hlsY+wMcs30RduYtxanjMGal8H5dMW67dmT1JFtYUEe8LiQLRsPZ6IIc7A4J5tqco3T0pnv/4u0kyzrYUq7gASuEyI8VXKvB9Odytv6jS/PNaZBln0nioJG/AVQRZvApOdhjj3Jt8QC8Im09SafwdBdvIpztpxWxpeKCC+EsFdS8DCyuCn2munFpL7ctHKp+Xc5cMybeIyMAN33SPL3ZR9QV1XVwLyzHm6Iv0/yeUuUb7PPlZC4D4HZkeu6dpF4v9j9MreGtMbxMMRLIcjJic9yHi7WQ3yVKzZVWUr5UrViJvn1FfUlwe/KYVfYyWRLSGNu16hR01U9IacajXPei0wx/5BqgInvJN+MMNtNme7ReU9SBbgntovn0kKHpFg7UogZvaZiOue/q1SBo9ktHzQAAAAASUVORK5CYII=',
        background: '#fff',
        properties: {
          nodeType: 'IF',
          nodeId: '',
          componentType: 'script', // 组件类型
          componentScript: {
            // 脚本组件属性，只有组件类型为script的时候有值
            language: 'java',
            content: '',
          },
        },
      },

      {
        type: 'switch-node',
        text: '选择判断',
        icon: switchImg,
        background: '#fff',
        properties: {
          nodeType: 'SWITCH',
          nodeId: '',
          componentType: 'script', // 组件类型
          componentScript: {
            // 脚本组件属性，只有组件类型为script的时候有值
            language: 'java',
            content: '',
          },
        },
      },

      {
        type: 'WhenGroupNode',
        text: '并行分组',
        icon: group,
        background: '#fff',
        hideText: true,
        properties: {
          nodeType: 'WHEN',
        },
      },

      {
        type: 'bpmn:endEvent',
        text: '结束节点',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAAH6ji2bAAAABGdBTUEAALGPC/xhBQAAA1BJREFUOBFtVE1IVUEYPXOf+tq40Y3vPcmFIdSjIorWoRG0ERWUgnb5FwVhYQSl72oUoZAboxKNFtWiwKRN0M+jpfSzqJAQclHo001tKkjl3emc8V69igP3znzfnO/M9zcDcKT67azmjYWTwl9Vn7Vumeqzj1DVb6cleQY4oAVnIOPb+mKAGxQmKI5CWNJ2aLPatxWa3aB9K7/fB+/Z0jUF6TmMlFLQqrkECWQzOZxYGjTlOl8eeKaIY5yHnFn486xBustDjWT6dG7pmjHOJd+33t0iitTPkK6tEvjxq4h2MozQ6WFSX/LkDUGfFwfhEZj1Auz/U4pyAi5Sznd7uKzznXeVHlI/Aywmk6j7fsUsEuCGADrWARXXwjxWQsUbIupDHJI7kF5dRktg0eN81IbiZXiTESic50iwS+t1oJgL83jAiBupLDCQqwziaWSoAFSeIR3P5Xv5az00wyIn35QRYTwdSYbz8pH8fxUUAtxnFvYmEmgI0wYXUXcCCSpeEVpXlsRhBnCEATxWylL9+EKCAYhe1NGstUa6356kS9NVvt3DU2fd+Wtbm/+lSbylJqsqkSm9CRhvoJVlvKPvF1RKY/FcPn5j4UfIMLn8D4UYb54BNsilTDXKnF4CfTobA0FpoW/LSp306wkXM+XaOJhZaFkcNM82ASNAWMrhrUbRfmyeI1FvRBTpN06WKxa9BK0o2E4Pd3zfBBEwPsv9sQBnmLVbLEIZ/Xe9LYwJu/Er17W6HYVBc7vmuk0xUQ+pqxdom5Fnp55SiytXLPYoMXNM4u4SNSCFWnrVIzKG3EGyMXo6n/BQOe+bX3FClY4PwydVhthOZ9NnS+ntiLh0fxtlUJHAuGaFoVmttpVMeum0p3WEXbcll94l1wM/gZ0Ccczop77VvN2I7TlsZCsuXf1WHvWEhjO8DPtyOVg2/mvK9QqboEth+7pD6NUQC1HN/TwvydGBARi9MZSzLE4b8Ru3XhX2PBxf8E1er2A6516o0w4sIA+lwURhAON82Kwe2iDAC1Watq4XHaGQ7skLcFOtI5lDxuM2gZe6WFIotPAhbaeYlU4to5cuarF1QrcZ/lwrLaCJl66JBocYZnrNlvm2+MBCTmUymPrYZVbjdlr/BxlMjmNmNI3SAAAAAElFTkSuQmCC',
        background: '#fff',
        properties: {
          nodeType: 'COMMON',
          componentScript: {
            // 脚本组件属性，只有组件类型为script的时候有值
            language: 'java',
            content: '',
          },
        },
      },
    ],
  },

  {
    name: '第三方组件',
    child: [
      {
        type: 'delay-node',
        text: '短信',
        background: '#fff',
        icon: phone,
      },
      {
        type: 'delay-node',
        text: '邮件',
        background: '#fff',
        icon: email,
        properties: {
          nodeType: 'COMMON',
          nodeId: '',
          componentType: 'script', // 组件类型
          componentScript: {
            // 脚本组件属性，只有组件类型为script的时候有值
            type: 'script',
            language: 'java',
            content: `
            import com.yomahub.liteflow.script.ScriptExecuteWrap;
            import com.yomahub.liteflow.script.body.JaninoCommonScriptBody;
            import com.yomahub.liteflow.slot.DefaultContext;
            import org.springframework.mail.SimpleMailMessage;
            import org.springframework.mail.javamail.JavaMailSenderImpl;

            import java.nio.charset.StandardCharsets;

            public class SendMailScriptBody implements JaninoCommonScriptBody {
                @Override
                public Void body(ScriptExecuteWrap wrap) {
                    DefaultContext ctx = (DefaultContext) wrap.cmp.getContextBean(DefaultContext.class);
                    JavaMailSenderImpl javaMailSender = new JavaMailSenderImpl();
                    javaMailSender.setHost("smtp.163.com");
                    javaMailSender.setUsername("ymitcloud");
                    javaMailSender.setPassword("WOOGBTLFEIVGNZMN");
                    javaMailSender.setPort(25);
                    javaMailSender.setProtocol("smtp");
                    javaMailSender.setDefaultEncoding(StandardCharsets.UTF_8.displayName());
                    SimpleMailMessage smm = new SimpleMailMessage();
                    // 设置收件人，寄件人
                    smm.setTo("收件人邮箱地址");
                    smm.setFrom("ymitcloud@163.com");
                    smm.setSubject("邮件标题");
                    smm.setText("要发送的邮件内容" );
                    // 发送邮件
                    javaMailSender.send(smm);
                    // 必须返回null
                    return null;
                }
            }`,
            name: '邮件',
          },
        },
      },
      {
        type: 'delay-node',
        text: '微信企业号',
        background: '#fff',
        icon: weixin,
      },

      {
        type: 'delay-node',
        text: '钉钉',
        background: '#fff',
        icon: dingding,
      },
      {
        type: 'delay-node',
        text: '飞书',
        background: '#fff',
        icon: feishu,
      },
    ],
  },
]
