import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'

const routes = [{
        path: '/',
        name: 'home',
        component: Home,
        redirect: '/index', //重定向，默认会跳到index页面
        children: [{
                path: '/index',
                name: 'index',
                component: Index,
            },
            {
                path: '/select', //这里children里的path加/,http://localhost:8080/#/select
                name: 'select',
                component: () =>
                    import ('./pages/select.vue')
            }
            //  {
            //     path: '/product/:id',
            //     name: 'product',
            //     component: () =>
            //         import ('./pages/product.vue')
            // }, {
            //     path: '/detail/:id',
            //     name: 'detail',
            //     component: () =>
            //         import ('./pages/detail.vue')
            // }

        ]
    },
    {
        path: '/register',
        name: 'register',
        component: () =>
            import ('./pages/register.vue')
    },
    {
        path: '/order',
        name: 'order',
        component: () =>
            import ('./pages/order'),
        children: [{
            path: 'list', //这里children里的path不加/,http://localhost:8080/#/order/list
            name: 'order-list',
            component: () =>
                import ('./pages/order-list.vue')
        }]
    }

]

const router = createRouter({
    // history: createWebHashHistory(process.env.BASE_URL),
    history: createWebHashHistory(),
    routes
})

export default router