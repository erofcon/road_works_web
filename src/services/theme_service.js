class ThemeService {
    getLocalTheme() {
        try {
            return JSON.parse(localStorage.getItem('theme_name'));
        } catch (e) {
            return null;
        }
    }

    setTheme(themeName) {
        localStorage.setItem('theme_name', JSON.stringify(themeName));
    }

}

export default new ThemeService();
