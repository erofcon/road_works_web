import {defaultApiInstance} from "@/api";

export const DetectionResultGridApi = {
    getDetectionImages(detectionId) {
        const url = '/get_detection_images';
        return defaultApiInstance.get(url, {
            params: {'detection_id': detectionId}
        })
    },
    deleteDetectionImage(detectionImageId) {
        const form = new FormData()
        form.append('detection_image_id', detectionImageId)
        return defaultApiInstance.post('/delete_detection_images', form, {headers: {'Content-Type': 'multipart/form-data'}})
    },
}
