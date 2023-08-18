import {DetectionResultGridApi} from "@/api/api_routes/detection_result_grid.js";

export const detectionResultGrid = {
    namespaced: true, state: () => ({
        detectionImages: [], oneSelectImage: null, selectedImage: [],
    }), mutations: {
        setDetectionImages(state, value) {
            state.detectionImages = value;
        }, setSelectOneSelectImage(state, value) {
            state.oneSelectImage = value;
        }, setSelectedImages(state, value) {
            state.selectedImage = value;
        }, deleteImages(state) {
            for (let i in state.selectedImage) {
                state.detectionImages = state.detectionImages.filter(value => value.id !== state.selectedImage[i].id)
            }
            state.selectedImage = [];
        }, deleteSelectOneSelectImage(state) {
            state.oneSelectImage = null;
        }, resetStore(state) {
            state.detectionImages = [];
            state.oneSelectImage = null;
            state.selectedImage = [];
        },
    }, actions: {
        getDetectionImages({commit}, {id}) {
            DetectionResultGridApi.getDetectionImages(id).then(value => {
                commit('setDetectionImages', value.data);
            });
        }, async deleteImages({commit, state}) {
            for (let i in state.selectedImage) {
                await DetectionResultGridApi.deleteDetectionImage(state.selectedImage[i].id);
            }
            commit('deleteImages');
        }
    }
}
