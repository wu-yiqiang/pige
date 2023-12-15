import History from '@/History/index.vue'
import Friends from '@/Friends/index.vue'
import Groups from '@/Groups/index.vue'
import Setting from '@/Setting/index.vue'
export const featureRouters = [
  {
    path: '/History',
    component: History,
    meta: {
      title: '对话',
      icon: 'dialog',
      fullWidth: false
    }
  },
  {
    path: '/friends',
    component: Friends,
    meta: {
      title: '好友',
      icon: 'user',
      fullWidth: false
    }
  },
  {
    path: '/groups',
    component: Groups,
    meta: {
      title: '群组',
      icon: 'group',
      fullWidth: false
    }
  },
  {
    path: '/setting',
    component: Setting,
    meta: {
      title: '设置',
      icon: 'setting',
      fullWidth: true
    }
  }
]
