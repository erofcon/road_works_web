import {defaultApiInstance} from "@/api";

export const DashboardAPi = {
    getTaskStatistic() {
        const url = '/get_task_statistic';
        return defaultApiInstance.get(url);
    }, getAllRelatedUsers() {
        const url = '/get_all_related_users';
        return defaultApiInstance.get(url);
    },
    getAllTasks(page = 1, size = 10) {
        const url = '/all_tasks';

        return defaultApiInstance(url, {
            params: {page, size}
        })
    }
}
