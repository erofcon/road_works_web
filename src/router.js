import {createRouter, createWebHashHistory} from 'vue-router';
import store from "@/store/index.js";
import App from './App.vue';

const authGuard = function (to, from, next) {
    if (!store.state.authenticate.status.loggedIn) next({name: 'login'});
    else next()
}

const routes = [
    {
        path: '/',
        name: 'app',
        component: App,
        beforeEnter: authGuard,
        children: [
            {
                path: '',
                name: 'dashboard',
                component: () => import('./components/Dashboard.vue'),
                beforeEnter: authGuard,
            },
            {
                path: '/create_task',
                name: 'createTask',
                component: () => import('./components/create_task/CreateTask.vue'),
                beforeEnter: authGuard,
            },
            {
                path: '/run_detection',
                name: 'runDetection',
                component: () => import('./components/run_detection/RunDetection.vue'),
                beforeEnter: authGuard,
            },
            {
                path: '/task_list/:tasks_type',
                name: 'TaskList',
                component: () => import('./components/tasklist/TaskList.vue'),
                beforeEnter: authGuard,
            },
            {
                path: '/task/:id',
                name: 'task',
                component: () => import('./components/task_view/TaskView.vue'),
                beforeEnter: authGuard,
            },
            {
                path: '/detection_results_list',
                name: 'detection_results_list',
                component: () => import('./components/detection_results_list/DetectionResultsList.vue'),
                beforeEnter: authGuard,
            },
            {
                path: '/map',
                name: 'map',
                component: () => import('./components/map/Map.vue'),
                beforeEnter: authGuard,
            },
            {
                path: '/detection_results_images/:id',
                name: 'detection_results_images',
                component: () => import('./components/detection_result_images/DetectionResultImages.vue'),
                beforeEnter: authGuard,
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./pages/Login.vue')
    },
    {
        path: '/notfound',
        name: 'notfound',
        component: () => import('./pages/NotFound.vue')
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
