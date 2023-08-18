import {defaultApiInstance} from "@/api";
import store from "@/store/index.js";


export const RunDetectionAPI = {
    runDetectionWithXml(description, video, xmlFile) {
        const form = new FormData();
        form.append('description', description);
        form.append('video_file', video);
        form.append('xml_file', xmlFile);

        return defaultApiInstance.post('/run_detection_with_xml', form, {
            onUploadProgress: function (progressEvent) {
                store.state.runDetection.uploadProgress = parseInt(Math.round((progressEvent.loaded / progressEvent.total) * 100))
            }, headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },

    runDetectionWithTracker(description, video, startDatetime) {
        const form = new FormData();
        form.append('description', description);
        form.append('video_file', video);
        form.append('video_start_datetime', startDatetime.toISOString().slice(0, -5));

        return defaultApiInstance.post('/run_detection_with_tracker', form, {
            onUploadProgress: function (progressEvent) {
                store.state.runDetection.uploadProgress = parseInt(Math.round((progressEvent.loaded / progressEvent.total) * 100))
            }, headers: {'Content-Type': 'multipart/form-data'}
        })
    },
}
