import { runInAction, observable, action } from 'mobx';
import BaseStore from '~/mobx/BaseStore';
import PendingEnum from '~/mobx/enums/PendingEnum';
import { AsyncStorage } from 'react-native';

class AuthStore extends BaseStore
{
    @observable authorized: boolean = false;

    constructor()
    {
        super();

        this._checkAuth();
    }

    _checkAuth = async () => {
        this.authorized = !!await AsyncStorage.getItem('auth');
    }

    @action
    async login(login: string, password: string)
    {
        try
        {
            runInAction(() => this.pending = PendingEnum.Loading);

            if (login !== 'Admin')
                throw new Error('Неверный логин');

            if (password !== '12345')
                throw new Error('Неверный пароль');

            await AsyncStorage.setItem('auth', 'true');
            
            runInAction(() => {
                this.authorized = true;
                this.pending = PendingEnum.Loaded;                
            })
        }
        catch (e)
        {
            runInAction(() => {
                this.pending = PendingEnum.Failed;
                this.error = e.message as string;
            })
        }
    }

    @action
    async logout()
    {
        try
        {
            runInAction(() => this.pending = PendingEnum.Loading);

            await AsyncStorage.removeItem('auth');

            runInAction(() => {
                this.authorized = false;
                this.pending = PendingEnum.Loaded;
            })
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

export default AuthStore;