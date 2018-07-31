import instance from './instance';

class Api
{
    static list = async () => await instance.get('/top-headlines?sources=lenta');
}

export default Api;