import {defaultApiInstance} from "@/api";


export const TaskViewAPI = {
    getTask(taskID) {
        const url = '/get_task';

        return defaultApiInstance.get(url, {
            params: {'task_id': taskID}
        });
    }, getAnswers(taskID) {
        const url = '/get_answers';

        return defaultApiInstance.get(url, {
            params: {'task_id': taskID}
        });
    }, closeTask(taskId){
        const url = '/close_task';

        return defaultApiInstance(url, {
            params: {'task_id': taskId}
        });
    },
    createAnswer(description, files, taskID) {
        const form = new FormData();
        form.append('description', description ?? '');
        form.append('task_id', taskID);

        if (files) {
            for (let i = 0; i < files.length; i++) {
                form.append('files', files[i]);
            }
        }

        return defaultApiInstance.post('/create_answer', form, {headers: {'Content-Type': 'multipart/form-data'}})
    },
}
