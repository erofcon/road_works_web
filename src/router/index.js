import {createRouter, createWebHistory} from 'vue-router';
import Dashboard from "@/views/Dashboard.vue";
import CreateTask from "@/views/CreateTask.vue";
import Login from "@/views/Login.vue";
import store from "@/store/index.js";
import RunDetection from "@/views/RunDetection.vue";
import DetectionResult from "@/views/DetectionResult.vue";
import DetectionResultGrid from "@/views/DetectionResultGrid.vue";
import TaskList from "@/views/TaskList.vue";
import MapView from "@/views/MapView.vue";
import TaskView from "@/views/TaskView.vue";
import PageNotFound from "@/views/PageNotFound.vue";


const authGuard = function (to, from, next) {
    if (!store.state.authenticate.status.loggedIn) next({name: 'login'});
    else next()
}


const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard,
        beforeEnter: authGuard,
    },
    {
        path: '/create_task',
        name: 'createTask',
        component: CreateTask,
        beforeEnter: authGuard,
    },
    {
        path: '/run_detection',
        name: 'runDetection',
        component: RunDetection,
        beforeEnter: authGuard,
    },
    {
        path: '/task/:id',
        name: 'task',
        component: TaskView,
        beforeEnter: authGuard,
    },
    {
        path: '/detection_result',
        name: 'detectionResult',
        component: DetectionResult,
        beforeEnter: authGuard,
    },
    {
        path: '/detection_result_view/:id',
        name: 'detectionResultView',
        component: DetectionResultGrid,
        beforeEnter: authGuard,
    },
    {
        path: '/task_list/:tasks_type',
        name: 'TaskList',
        component: TaskList,
        beforeEnter: authGuard,
    },
    {
        path: '/map',
        name: 'MapView',
        component: MapView,
        beforeEnter: authGuard,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/pagenotfound',
        name: 'pageNotFound',
        component: PageNotFound,
    },
    {
        path: '/:pathMatch(.*)*',
        component: PageNotFound
    }
    // {
    //     path: '/settings',
    //     name: 'settings',
    //     component: SettingsPage,
    // },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;
