import { observable, action, runInAction } from 'mobx';
import { AxiosResponse } from 'axios';
import BaseStore from '~/mobx/BaseStore';
import PendingEnum from '~/mobx/enums/PendingEnum';
import ItemInterface from '~/screens/News/interfaces/ItemInterface';
import api from '~/api';

class NewsStore extends BaseStore
{
    @observable items: ItemInterface[] = [];

    @action
    async getItems()
    {
        try
        {
            runInAction(() => this.pending = PendingEnum.Loading);

            const response: AxiosResponse = await api.list();

            runInAction(() => {
                this.pending = PendingEnum.Loaded;
                this.items = response.data.articles as ItemInterface[];
            });
        }
        catch (e)
        {
            runInAction(() => {
                this.pending = PendingEnum.Failed;
                this.error = e.message as string;
            })
        }
    }
}

export default NewsStore;