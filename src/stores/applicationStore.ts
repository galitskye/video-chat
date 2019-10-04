import { observable } from 'mobx';

class ApplicationStore {
    @observable listArr: string[] = [];

    addToList(item: string) {
        this.listArr.push(item);
    }
}


export default ApplicationStore;
