import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/register',
    component: () => import('@/views/register/register'),
    hidden: true
  },
  {
    path: '/home',
    component: Layout,
    redirect: '/home/dashboard',
    name: 'dashboard',
    meta: { title: '车辆列表', icon: 'home' },
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '车辆列表', icon: 'home' }
    }]
  },

  {
    path: '/base-manage',
    component: Layout,
    redirect: '/base-manage',
    name: 'base-manage',
    meta: { title: '基础信息管理', icon: 'manage' },
    children: [
      {
        path: 'vehiclemanage',
        name: 'vehiclemanage',
        component: () => import('@/views/base-manage/vehicle-manage'),
        meta: { title: '车辆管理', icon: 'manage' }
      },
      {
        path: 'drivermanage',
        name: 'drivermanage',
        component: () => import('@/views/base-manage/driver-manage'),
        meta: { title: '驾驶员管理', icon: 'manage' }
      },
      {
        path: 'fleetmanage',
        name: 'fleetmanage',
        component: () => import('@/views/base-manage/fleet-manage'),
        meta: { title: '车队管理', icon: 'manage' }
      },
      {
        path: 'templatemanage',
        name: 'templatemanage',
        component: () => import('@/views/base-manage/template-manage'),
        meta: { title: '短信模板管理', icon: 'manage' }
      }
    ]
  },

  {
    path: '/statistics',
    component: Layout,
    name: 'Statistics',
    meta: { title: '统计分析', icon: 'statistics' },
    children: [
      {
        path: 'mileage',
        name: 'Mileage',
        component: () => import('@/views/table/index'),
        meta: { title: '里程统计', icon: 'statistics' }
      },
      {
        path: 'Speeding',
        name: 'speeding',
        component: () => import('@/views/tree/index'),
        meta: { title: '超速统计', icon: 'statistics' }
      },
      {
        path: 'tired',
        name: 'Tired',
        component: () => import('@/views/tree/index'),
        meta: { title: '疲劳统计', icon: 'statistics' }
      }
    ]
  },
  {
    path: '/history',
    component: Layout,
    name: 'History',
    meta: { title: '历史信息查询', icon: 'history' },
    children: [
      {
        path: 'violationHistory',
        name: 'violationHistory',
        component: () => import('@/views/history-search/violation-history'),
        meta: { title: '违章历史查询', icon: 'history' }
      },
     /* {
        path: 'offlineWarning',
        name: 'offlineWarning',
        component: () => import('@/views/history-search/offline-warning'),
        meta: { title: '离线预警历史', icon: 'history' }
      },*/
      {
        path: 'onlineHistory',
        name: 'onlineHistory',
        component: () => import('@/views/history-search/online-history'),
        meta: { title: '驾驶员换卡历史', icon: 'history' }
      },
      {
        path: 'userMessage',
        name: 'userMessage',
        component: () => import('@/views/history-search/user-message'),
        meta: { title: '用戶消息历史', icon: 'history' }
      },
      {
        path: 'terminalState',
        name: 'terminalState',
        component: () => import('@/views/history-search/terminal-state'),
        meta: { title: '終端状态历史', icon: 'history' }
      },
      {
        path: 'terminalAlarm',
        name: 'terminalAlarm',
        component: () => import('@/views/history-search/terminal-alarm'),
        meta: { title: '終端报警历史', icon: 'history' }
      },
      {
        path: 'vehicleTextmsg',
        name: 'vehicleTextmsg',
        component: () => import('@/views/history-search/vehicle-textmsg'),
        meta: { title: '发送信息历史查询', icon: 'history' }
      }
    ]
  },
  {
    path: '/networkMonitor ',
    component: Layout,
    name: 'networkMonitor',
    meta: { title: '联网监控', icon: 'eye-open' },
    children: [
      {
        path: 'violationDriverStatistic',
        name: 'violationDriverStatistic',
        component: () => import('@/views/network-control/violation-driver-statistic'),
        meta: { title: '驾驶员违章统计', icon: 'eye-open' }
      },
      {
        path: 'violationStatistic',
        name: 'violationStatistic',
        component: () => import('@/views/network-control/violation-statistic'),
        meta: { title: '违章统计', icon: 'eye-open' }
      }
    ]
  },
  {
    path: '/activeSafety ',
    component: Layout,
    name: 'ActiveSafety',
    meta: { title: '主动安全防御', icon: 'safety' },
    children: [
      {
        path: 'companyPortrait',
        name: 'companyPortrait',
        component: () => import('@/views/active-safety/company-portrait'),
        meta: { title: '企业画像', icon: 'safety' }
      },
      {
        path: 'driverPortrait',
        name: 'driverPortrait',
        component: () => import('@/views/active-safety/driver-portrait'),
        meta: { title: '驾驶员画像', icon: 'safety' }
      }
    ]
  },
  /* {
    path: '/videoMonitor',
    component: Layout,
    name: 'VideoMonitor',
    meta: { title: '视频监控', icon: 'conversation' },
    children: [{
      path: 'videoMonitor',
      name: 'videoMonitor',
      component: () => import('@/views/video-monitor/index'),
      meta: { title: '视频监控', icon: 'conversation' }
    }]
  },*/
  {
    path: '/terminalControl',
    component: Layout,
    name: 'TerminalControl',
    meta: { title: '终端管理', icon: 'terminal' },
    children: [
      {
        path: 'terminalParam',
        name: 'TerminalParam',
        component: () => import('@/views/terminal-control/terminal-param'),
        meta: { title: '终端参数管理', icon: 'terminal' }
      },
      {
        path: 'terminalAttribute',
        name: 'TerminalAttribute',
        component: () => import('@/views/terminal-control/terminal-attribute'),
        meta: { title: '终端属性管理', icon: 'terminal' }
      }
    ]
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
