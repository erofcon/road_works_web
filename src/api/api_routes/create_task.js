import {defaultApiInstance} from "@/api";


export const CreateTaskApi = {
    createTask(description, expireDatetime, latitude, longitude, groupID, executorID, files) {
        const form = new FormData();
        form.append('description', description);
        form.append('lead_datetime', expireDatetime.toISOString().slice(0, -1));
        form.append('latitude', latitude ?? '');
        form.append('longitude', longitude ?? '');
        form.append('executor_id', executorID);
        form.append('group_id', groupID);

        if (files) {
            for (let i = 0; i < files.length; i++) {
                form.append('files', files[i]);
            }
        }

        return defaultApiInstance.post('/create_task', form, {headers: {'Content-Type': 'multipart/form-data'}})
    },


    getRelatedGroups() {
        const url = '/related_groups';
        return defaultApiInstance.get(url);
    }, getRelatedExecutorUsers(groupId) {
        const url = '/get_related_executor_users';
        return defaultApiInstance.get(url, {
            params: {'group_id': groupId}
        });
    },

}
