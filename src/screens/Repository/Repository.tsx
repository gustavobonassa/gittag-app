import * as React from "react";
import store from "../../system/Store";

// import EditScreenInfo from "../components/EditScreenInfo";
import { ActivityIndicator, Alert, ScrollView, Text, View } from "react-native";
import Button from "../../components/Button/Button";
import styles from "./Repository.style";

import { observer } from "mobx-react";
import Colors from "../../constants/Colors";
import Input from "../../components/Input/Input";
import { AntDesign, Octicons, Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import toast from "../../helpers/toast";
import { editTag, getRepositories } from "../../helpers/apiRequests";
import { validateNewTag } from "./Repository.logic";
import { runInAction } from "mobx";

function RepositoryScreen(props: any) {
  const [tag, setTag] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState(props.route?.params?.item || {});

  const colorScheme = store.theme;
  const colors = Colors[colorScheme];

  const updateTag = async(tags: string[]) => {
    setData({
      ...data,
      tags,
    });

    const repositories = await getRepositories(store.token);

    if (repositories?.length) {
      runInAction(() => {
        store.repositories = repositories
      });
    }
  }

  const addTag = async () => {
    setLoading(true);

    const validate = validateNewTag(tag, data);
    if (validate) {
      toast(validate);
      setLoading(false);
      return;
    }

    try {
      const newTags = [tag, ...data.tags]
      const response = await editTag(data.id, newTags, store.token);
      updateTag(response.tags);
      setTag("");
      toast("Tag adicionada com sucesso");
    } catch (error) {
      toast("Erro ao adicionar a Tag");
    }
    setLoading(false);
  };

  const deleteTag = async(t: string) => {
    const tags = data.tags.filter((tag: string) => tag !== t);

    const response = await editTag(data.id, tags, store.token);
    updateTag(response.tags);
    setTag("");
    toast("Tag removida com sucesso");
  }

  const onPressTag = (t: string) => {
    Alert.alert("Deletar Tag", `Tem certeza que deseja deletar a tag ${t}?`, [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        style: "destructive",
        onPress: () => deleteTag(t),
      },
    ]);
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.repositoriesList }]}
    >
      <View style={styles.addContainer}>
        <View style={{ flex: 1 }}>
          <Input
            placeholder="Digite uma tag"
            placeholderTextColor={colors.placeholder}
            value={tag}
            onChangeText={(e) => setTag(e)}
            style={{
              color: colors.text,
            }}
          />
        </View>
        <TouchableOpacity style={styles.plusButton} onPress={() => addTag()}>
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Entypo name="plus" size={30} color="white" />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.card}>
          <View
            style={{
              position: "absolute",
              right: -20,
              top: -10,
            }}
          >
            <Octicons name="repo" size={100} color="rgba(0,0,0,0.2)" />
          </View>

          <Text style={styles.itemTitle}>{data.name}</Text>

          <Text style={styles.itemDescription}>{data.description}</Text>

          <View style={styles.infoContainer}>
            <View style={styles.infoItem}>
              <AntDesign name="eye" size={25} color="#494949" />
              <Text style={styles.infoItemText}>{data.watchers_count}</Text>
            </View>
            <View style={styles.infoItem}>
              <AntDesign name="star" size={25} color="#494949" />
              <Text style={styles.infoItemText}>{data.stargazers_count}</Text>
            </View>
            <View style={styles.infoItem}>
              <Octicons name="repo-forked" size={25} color="#494949" />
              <Text style={styles.infoItemText}>{data.forks_count}</Text>
            </View>
          </View>
        </View>

        <View style={styles.tagContainer}>
          {data.tags.map((e: string, i: number) => (
            <TouchableOpacity
              style={[styles.tagItem, { marginLeft: 5 }]}
              key={i}
              onPress={() => onPressTag(e)}
            >
              <View>
                <Text style={styles.tagText}>{e}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

export default observer(RepositoryScreen);
