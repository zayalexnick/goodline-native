import * as React from 'react';
import { FlatList, RefreshControl, ActivityIndicator } from 'react-native';
import { NavigationContainerProps } from 'react-navigation';
import { inject, observer } from 'mobx-react';
import { Container } from './styles';
import NewsStore from './store/NewsStore';
import PendingEnum from '~/mobx/enums/PendingEnum';
import ItemInterface from '~/screens/News/interfaces/ItemInterface';
import Item from './Item';

interface PropsInterface extends NavigationContainerProps {
    News: NewsStore
}

interface StateInterface {

}

@inject("News")
@observer
export default class NewsListScene extends React.Component<PropsInterface, StateInterface>
{
    componentDidMount()
    {
        this._loadNews();
    }

    goTo = (item: ItemInterface) =>
    {
        this.props.navigation.navigate('Item', item);
    }

    _loadNews = () =>
    {
        this.props.News.getItems();
    }

    render()
    {
        const { items, pending, error } = this.props.News;

        return (
            <Container>
                <FlatList
                    refreshControl={<RefreshControl refreshing={pending === PendingEnum.Loading} onRefresh={this._loadNews} />}
                    data={items.length > 0 ? items : []}
                    renderItem={({ item }) => <Item { ...item } goTo={this.goTo} /> }
                    keyExtractor={(items, index) => index.toString()}
                />
            </Container>
        );
    }
}