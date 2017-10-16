import Vue from 'vue'
import VueRouter from 'vue-router'
// import config from './config.js'

import Index from 'views/Index.vue'
import Errors from 'views/Errors.vue'

import Posts from 'views/information/Posts.vue'
import AddPost from 'views/information/AddPost.vue'

import Push from 'views/push/Push.vue'
import AddPush from 'views/push/AddPush.vue'

import Ads from 'views/ads/Ads.vue'
import AddAd from 'views/ads/AddAd.vue'

import UsersInfo from 'views/users/UsersInfo.vue'
import Users from 'views/users/Users.vue'
import AddUser from 'views/users/AddUser.vue'

import Comments from 'views/comments/Comments.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/',
      name: 'index',
      component: Index,
      meta: {title: 'VMS'}
    },

    { path: '/users',
      name: 'users',
      component: Users,
      meta: {title: 'Users'}
    },
    { path: '/users/new',
      name: 'users-new',
      component: AddUser,
      meta: {title: 'Add User'}
    },
    { path: '/users/info/:id',
      name: 'users-info',
      component: UsersInfo,
      meta: {title: 'UserInfo'}
    },

    { path: '/posts',
      name: 'posts',
      component: Posts,
      meta: {title: 'Posts'}
    },
    { path: '/posts/new',
      name: 'posts-new',
      component: AddPost,
      meta: {title: 'Add Post'}
    },

    { path: '/ads',
      name: 'ads',
      component: Ads,
      meta: {title: 'AD'}
    },
    { path: '/ads/new',
      name: 'ads-new',
      component: AddAd,
      meta: {title: 'Add AD'}
    },
    { path: '/push',
      name: 'push',
      component: Push,
      meta: {title: 'Notifications'}
    },
    { path: '/push/new',
      name: 'push-new',
      component: AddPush,
      meta: {title: 'Add Notification'}
    },

    { path: '/comments',
      name: 'comments',
      component: Comments,
      meta: {title: 'Comments'}
    },
    { path: '*',
      component: Errors,
      meta: {title: 'Error'}
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
