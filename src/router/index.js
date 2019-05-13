import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'

/* 출입 관리 */
import CNGManage from '@/components/cng/CNGmanage'
import userManage from '@/components/cng/usermanage'
import authManage from '@/components/cng/auth'
import userRegist from '@/components/cng/regist'

/* 단말기 관리 */
import DeviceReg from '@/components/device/deviceReg'
import DeviceView from '@/components/device/deviceView'
import DeviceStausView from '@/components/device/deviceStausView'
import DeviceConfSechedule from '@/components/device/deviceConfSchedule'

/* 강의실 관리 */
import RoomReg from '@/components/room/roomReg'
import RoomView from '@/components/room/roomView'

/* 식수 관리 */
import dWaterView from '@/components/dWater/dWaterView'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'subon',
  linkExactActiveClass: 'subon',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/cng/view',
      name: 'userManage',
      component: userManage
    },
    {
      path: '/cng/manage',
      name: 'CNGManage',
      component: CNGManage
    },
    {
      path: '/cng/auth',
      name: 'authManage',
      component: authManage
    },
    {
      path: '/cng/reg',
      name: 'userRegist',
      component: userRegist
    },
    {
      path: '/device/reg',
      name: 'DeviceReg',
      component: DeviceReg
    },
    {
      path: '/device/view',
      name: 'DeviceView',
      component: DeviceView
    },
    {
      path: '/device/statusView',
      name: 'DeviceStausView',
      component: DeviceStausView
    },
    {
      path: '/device/confSchedule',
      name: 'DeviceConfSechedule',
      component: DeviceConfSechedule
    },
    {
      path: '/room/reg',
      name: 'RoomReg',
      component: RoomReg
    },
    {
      path: '/room/view',
      name: 'RoomView',
      component: RoomView
    },
    {
      path: '/water/view',
      name: 'dWaterView',
      component: dWaterView
    }
  ]
})
