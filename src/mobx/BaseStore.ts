import { observable } from 'mobx';
import StoreInterface from './interfaces/StoreInterface';
import PendingEnum from './enums/PendingEnum';

export default class BaseStore implements StoreInterface {
    @observable pending: PendingEnum;
    @observable error: string;
}