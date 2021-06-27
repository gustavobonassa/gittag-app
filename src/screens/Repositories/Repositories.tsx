import * as React from 'react';
import store from "../../system/Store";

import { FlatList, View, Text } from 'react-native';

import styles from "./Repositories.style"
import { runInAction } from 'mobx';
import InputFilter from '../../components/InputFilter/InputFilter';

import { observer } from 'mobx-react';
import Colors from '../../constants/Colors';

import { getRepositories } from '../../helpers/apiRequests';
import RepositoryItem from "./RepositoryItem/RepositoryItem";
import { filterRepositories } from "./Repositories.logic";
import { Ionicons } from '@expo/vector-icons';

interface IRepositoriesScreen {
  navigation: any;
}

function RepositoriesScreen(props: IRepositoriesScreen) {
  const { navigation } = props;

  const [refreshing, setRefreshing] = React.useState(false);
  const [text, setText] = React.useState("");

  React.useEffect(() => {
    getStarredRepositories();
  }, []);

  async function getStarredRepositories() {
    if (store.token) {
      setRefreshing(true);
      const repositories = await getRepositories(store.token);

      if (repositories?.length) {
        runInAction(() => {
          store.repositories = repositories
        });
      }
      setRefreshing(false);
    }
  }

  const colorScheme = store.theme;
  const colors = Colors[colorScheme];

  const filteredRepositories = filterRepositories(text, store.repositories || []);

  return (
    <View style={styles.container}>
      <InputFilter
        colors={colors}
        dark={colorScheme === "dark"}
        value={text}
        onChangeText={(e) => setText(e)}
        onClear={() => setText("")}
      />
      <FlatList
        data={filteredRepositories}
        style={{
          backgroundColor: colors.repositoriesList,
          padding: 15,
          paddingTop: 10,
        }}
        onRefresh={() => getStarredRepositories()}
        refreshing={refreshing}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <RepositoryItem
            item={item}
            onPress={(i: any) => navigation.navigate("Repository", { item: i })}
            colors={colors}
          />
        )}
        contentContainerStyle={{ paddingBottom: 10 }}
        ListEmptyComponent={() => (
          <>
            {!refreshing && (
              <View style={styles.empty}>
                <Ionicons name="ios-sad-outline" size={50} color="#6e6e6e" />
                <Text style={styles.emptyText}>
                  Nenhum repositório encontrado
                </Text>
              </View>
            )}
          </>
        )}
      />
    </View>
  );
}

export default observer(RepositoriesScreen);
