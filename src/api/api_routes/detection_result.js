import {defaultApiInstance} from "@/api";

export const DetectionResultAPI = {
    getAllDetections() {
        const url = '/get_all_detections';
        return defaultApiInstance.get(url);
    },
}
