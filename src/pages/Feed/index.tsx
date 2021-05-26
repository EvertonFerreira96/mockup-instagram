import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, ViewProps } from 'react-native';

import { Post, Header, Avatar, Name , Description, ActivityIndicator } from './styles';
import LoaderLazyImage from '@/components/LoaderLazyImage'; 

const Feed: React.FC = () => {

  const [feed, setFeed] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [viewable, setViewable] = useState(Array(String));
  

  const limit = 4;  

  
  async function loadFeed(pageNumber = page, shouldRefresh = false) {
    if (totalPage && pageNumber > totalPage)
      return;
      setLoading(true)
    const response =
      await fetch(`http://localhost:3333/feed?_expand=author&_limit=${limit}&_page=${pageNumber}`);

      const totalItems = Number(response.headers.get('X-Total-Count'));
      const data = await response.json() as [];
    setTotalPage(Math.ceil(totalItems / limit));
    setPage(pageNumber + 1);
    setFeed(shouldRefresh ? data : [...feed, ...data]);
    setLoading(false);
  }

  async function RefreshList(pageNumber = page, shouldRefresh = true) {
    setRefreshing(true); 
    await loadFeed(pageNumber, shouldRefresh); 
    setRefreshing(false); 

  }

  useEffect(() => {
    loadFeed();
  }, []);


  const Loading: React.FC = () => {

    if(!loading)
      return null; 

    return(
      <ActivityIndicator />
    );
  }

  const handleViewableChanged = useCallback(({ changed  }) => {
    setViewable(changed.map(({item}: any) => item.id)); 
  },[]);  
  
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        data={feed}
        keyExtractor={(item: any) => String(item.id)}
        onEndReached={() => loadFeed()}
        onEndReachedThreshold={0.1}
        onRefresh={() => RefreshList()}
        refreshing={refreshing}
        ListFooterComponent={<Loading />}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 25, minimumViewTime: 500 }}
        onViewableItemsChanged={handleViewableChanged}
        renderItem={({ item }: any) => (
          <Post>
            <Header>
              <Avatar source={{ uri: item.author.avatar }} />
              <Name>{item.author.name}</Name>
            </Header>
            <LoaderLazyImage shouldLoad={viewable.includes(item.id) } aspectRatio={Number(item.aspectRatio)} originalSource={{ uri: item.image }} smallSource={{ uri: item.small }} />
            <Description>
              <Name>{item.author.name}</Name> {item.description}
            </Description>
          </Post>
        )}
      />
    </View>
  )
}

export default Feed;
