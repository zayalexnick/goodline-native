import PendingEnum from "../enums/PendingEnum";

export default interface StoreInterface {
    pending: PendingEnum;
    error: string;
}