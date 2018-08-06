import AuthStore from '~/screens/Auth/Form/store/AuthStore';
import PendingEnum from '~/mobx/enums/PendingEnum';
import mockAsyncStorage from 'mock-async-storage';

describe('Auth', () => {
    jest.mock('AsyncStorage', () => new mockAsyncStorage);

    let store: AuthStore;
    beforeEach(() => store = new AuthStore);

    it('login failed login', async () => {
        await store.login('aasdf', 'asdf');
        expect(store.pending).toBe(PendingEnum.Failed);
        expect(store.authorizied).toBeFalsy();
        expect(store.error).toBe('Неверный логин');
    });

    it('login failed password', async () => {
        await store.login('Admin', 'adsf');
        expect(store.pending).toBe(PendingEnum.Failed);
        expect(store.authorizied).toBeFalsy();
        expect(store.error).toBe('Неверный пароль');
    });

    it('login complete', async () => {
        await store.login('Admin', '12345');
        expect(store.pending).toBe(PendingEnum.Loaded);
        console.log(store);
        expect(store.authorized).toBeTruthy();
    });

    it('logout', async () => {
        store.authorized = true;

        await store.logout();
        expect(store.pending).toBe(PendingEnum.Loaded);
        expect(store.authorized).toBeFalsy();
    });
});