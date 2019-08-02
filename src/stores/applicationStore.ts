import { observable } from 'mobx';

class ApplicationStore {
    @observable themeMode: string = 'light';

    changeThemeMode() {
        if (this.themeMode === 'light') {
            this.themeMode = 'dark';
            return;
        }

        this.themeMode = 'light';
    }
}