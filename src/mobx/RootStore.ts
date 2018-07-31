import { NewsStore } from '~/screens/News/List';
import { AuthStore } from '~/screens/Auth/Form';

export default {
    News: new NewsStore(),
    Auth: new AuthStore()
}