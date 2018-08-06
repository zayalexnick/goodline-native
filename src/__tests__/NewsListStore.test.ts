import instance from '~/api/instance';
import NewsStore from '~/screens/News/List/store/NewsStore';
import mockAdapter from 'axios-mock-adapter';
import PendingEnum from '~/mobx/enums/PendingEnum';
import ItemInterface from '../screens/News/interfaces/ItemInterface';

describe('News List', () => {
    const response: {articles: ItemInterface[]} = {articles: [{
        title: 'Заголовок',
        description: 'Описание',
        urlToImage: 'изображение'
    }]};
    
    const mock = new mockAdapter(instance);
    mock.onGet('/top-headlines?sources=lenta').reply(200, response);

    let store: NewsStore;
    beforeEach(() => {
        store = new NewsStore
    });

    it('get news', async () => {
        await store.getItems();
        expect(store.pending).toBe(PendingEnum.Loaded);
        expect(store.items).toEqual(response.articles);
    })
})