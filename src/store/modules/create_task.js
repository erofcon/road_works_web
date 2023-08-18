import {CreateTaskApi} from "@/api/api_routes/create_task.js";

export const createTask = {
    namespaced: true,
    state: () => ({
        groups: [],
        relatedUsers: [],
        description: '',
        location: null,
        expireDatetime: null,
        selectedGroup: null,
        selectedExecutor: null,
        selectedImages: null,
    }),
    mutations: {
        setGroups(state, value) {
            state.groups = value;
        },
        setSelectedGroup(state, value) {
            state.selectedGroup = value;
        },
        setRelatedUsers(state, value) {
            state.relatedUsers = value;
        },
        setSelectedExecutor(state, value) {
            state.selectedExecutor = value;
        },
        setDescription(state, value) {
            state.description = value;
        },
        setLocation(state, value) {
            state.location = value;
        },
        setExpireDatetime(state, value) {
            state.expireDatetime = value;
        },
        setSelectedImages(state, value) {
            state.selectedImages = value;
        },
        deleteSelectedImages(state) {
            state.selectedImages = null;
        },
        deleteOneSelectedImages(state, name) {
            state.selectedImages = state.selectedImages.filter(value => value.name !== name);
        },
        deleteSelectedExecutor(state) {
            state.selectedExecutor = null;
        },
        resetStore(state) {
            state.groups = [];
            state.relatedUsers = [];
            state.description = '';
            state.location = null;
            state.expireDatetime = null;
            state.selectedGroup = null;
            state.selectedExecutor = null;
            state.selectedImages = null;
        },
    },
    actions: {
        getRelatedGroups({commit}) {
            return CreateTaskApi.getRelatedGroups().then(
                value => {
                    commit('setGroups', value.data);
                }
            );
        },
        getRelatedExecutorUsers({commit}, group) {
            return CreateTaskApi.getRelatedExecutorUsers(group.id).then(
                value => {
                    commit('setRelatedUsers', value.data);
                }
            )
        },
        creatTask({state}) {
            return CreateTaskApi.createTask(state.description, state.expireDatetime, state.location?.lat, state.location?.lng,
                state.selectedGroup.id, state.selectedExecutor.id, state.selectedImages).then((value) => {
            }, (reason) => {
                return Promise.reject(reason);
            })
        }

    },
}

