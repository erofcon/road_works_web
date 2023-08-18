class UserService {
    getLocalRefreshToken() {
        try {
            const user = JSON.parse(localStorage.getItem('current_user'));
            return user?.refresh_token;
        } catch (e) {
            return null;
        }
    }

    getLocalAccessToken() {
        try {
            const user = JSON.parse(localStorage.getItem('current_user'));
            return user?.access_token;
        } catch (e) {
            return null;
        }

    }

    getLocalUserName() {
        const user = JSON.parse(localStorage.getItem('current_user'));
        return user?.user.username;
    }

    getUser() {
        try {
            return JSON.parse(localStorage.getItem('current_user'));
        } catch (e) {
            return null;
        }

    }

    setUser(user) {
        localStorage.setItem('current_user', JSON.stringify(user));
    }

    removeUser() {
        localStorage.removeItem('current_user');
    }
}

export default new UserService();
