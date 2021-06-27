import React from "react";
import styles from "../Auth.style";
import { View, Text,} from "react-native";
import Button from "../../../components/Button/Button";

interface IIntro {
  onPress: () => void;
}

const Intro = (props: IIntro) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.slideOneContainer}>
        <Text style={styles.slideOneTitle}>
          GitTag
        </Text>
        <Text style={styles.slideOneList}>
          - O melhor tagger ja feito
        </Text>
        <Text style={styles.slideOneList}>
          - Gerencie seus repositorios favoritos
        </Text>
        <Text style={styles.slideOneList}>
          - Adicione e remova Tags
        </Text>
        <Text style={styles.slideOneList}>
          - Agora com modo escuro!
        </Text>
      </View>
      <Button onPress={() => props.onPress()} text="Entrar" />
    </View>
  );
}

export default Intro;
