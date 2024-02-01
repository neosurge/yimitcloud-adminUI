import type { AppRouteModule } from '@/router/types'

import { t } from '@/hooks/web/useI18n'
import { LAYOUT } from '@/router/constant'

const about: AppRouteModule = {
  path: '/about',
  name: 'About',
  component: LAYOUT,
  redirect: '/about/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'ant-design:pushpin-filled',
    title: t('routes.dashboard.about'),
    orderNo: 100000,
  },
  children: [
    {
      path: 'index',
      name: 'AboutPage',
      component: () => import('@/views/base/about/index.vue'),
      meta: {
        title: t('routes.dashboard.about'),
        icon: 'ant-design:pushpin-filled',
        hideMenu: true,
      },
    },
  ],
}

export default about
