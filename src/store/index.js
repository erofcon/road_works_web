import {createStore} from "vuex";
import {authenticate} from "./modules/authenticate.js";
import {createTask} from "./modules/create_task.js";
import {runDetection} from "./modules/run_detection.js";
import {detectionResultGrid} from "./modules/detection_result_grid.js";
import {taskList} from "./modules/task_list.js";
import {task} from "./modules/task.js";
import {sidebar} from "./modules/sidebar.js";

export default createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        authenticate: authenticate,
        createTask: createTask,
        runDetection: runDetection,
        detectionResultGrid: detectionResultGrid,
        taskList: taskList,
        task:task,
        sidebar:sidebar,
    },
});
