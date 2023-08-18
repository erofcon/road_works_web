import {defaultApiInstance} from "@/api";

export const taskListApi = {
    getCurrentTasks(page = 1, size = 10) {
        const url = '/current_tasks';

        return defaultApiInstance(url, {
            params: {page, size}
        })

    }, getExpiredTasks(page = 1, size = 10) {
        const url = '/expired_tasks';

        return defaultApiInstance(url, {
            params: {page, size}
        })

    }, getDoneTasks(page = 1, size = 10) {
        const url = '/done_tasks';

        return defaultApiInstance(url, {
            params: {page, size}
        })

    }, getAllTasks(page = 1, size = 10) {
        const url = '/all_tasks';

        return defaultApiInstance(url, {
            params: {page, size}
        })
    },
}
