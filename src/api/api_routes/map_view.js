import {defaultApiInstance} from "@/api";

export const MapViewApi = {
    getGeoJsonDoneTasks() {
        const url = '/get_geo_json_done_tasks';
        return defaultApiInstance(url);
    },
    getGeoJsonExpiredTasks() {
        const url = '/get_geo_json_expired_tasks';
        return defaultApiInstance(url);
    }, getGeoJsonCurrentTasks() {
        const url = '/get_geo_json_current_tasks';
        return defaultApiInstance(url);
    }, getAllDetectionForMap() {
        const url = '/get_all_detection_for_map';
        return defaultApiInstance.get(url);
    }, getTaskWithLocation(latitude, longitude) {
        const url = '/get_task_with_location';
        return defaultApiInstance(url, {
            params: {
                latitude: latitude, longitude: longitude,
            }
        });
    },
}
