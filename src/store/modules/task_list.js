import {taskListApi} from "@/api/api_routes/task_list.js";

export const taskList = {
    namespaced: true,
    state: () => ({
        tasks: null,
    }),
    mutations: {
        setTasks(state, value) {
            if (state.tasks) {
                state.tasks.items = [...state.tasks.items, ...value.items]
            } else {
                state.tasks = value;
            }
        },
        clearTasks(state) {
            if (state.tasks) {
                state.tasks.items = [];
            }
        },
        resetStore(state) {
            state.tasks = null;
        },
    },

    actions: {
        getCurrentTasks({commit}, page = 1) {
            taskListApi.getCurrentTasks(page).then(value => {
                commit('setTasks', value.data);
            }, reason => {
                console.log(reason);
            })
        },
        getExpiredTasks({commit}, page = 1) {
            taskListApi.getExpiredTasks(page).then(value => {
                commit('setTasks', value.data);
            }, reason => {
                console.log(reason);
            })
        },
        getDoneTasks({commit}, page = 1) {
            taskListApi.getDoneTasks(page).then(value => {
                commit('setTasks', value.data);
            }, reason => {
                console.log(reason);
            })
        },
        getAllTasks({commit}, page = 1) {
            taskListApi.getAllTasks(page).then(value => {
                commit('setTasks', value.data);
            }, reason => {
                console.log(reason);
            })
        },
    }
}
