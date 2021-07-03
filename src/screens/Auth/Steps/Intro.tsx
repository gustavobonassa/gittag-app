import React from "react";
import styles from "../Auth.style";
import { View, Text,} from "react-native";
import Button from "../../../components/Button/Button";

interface IIntro {
  /**
   * next step function
   */
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
          - Gerencie seus repositórios favoritos
        </Text>
        <Text style={styles.slideOneList}>
          - Adicione e remova Tags
        </Text>
        <Text style={styles.slideOneList}>
          - Agora com modo escuro!
        </Text>
        <Button
          onPress={() => props.onPress()}
          text="Entrar"
          style={{
            marginTop: 15,
          }}
        />
      </View>
    </View>
  );
}

export default Intro;
