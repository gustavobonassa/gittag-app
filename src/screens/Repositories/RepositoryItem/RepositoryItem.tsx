import * as React from 'react';

import { ScrollView, Text, View } from 'react-native';

import styles from "./RepositoryItem.style"

import { TouchableOpacity } from 'react-native-gesture-handler';
import { IRepository } from '../../../types/Repository.interface';

interface IRepositoryItem {
  /**
   * A single FlatList repository
   */
  item: IRepository;
  /**
   * Prop called when user clicks on an item
   */
  onPress: (item: IRepository) => void;
  /**
   * Active theme colors
   */
  colors: any;
}

const RepositoryItem = (props: IRepositoryItem) => {
  const { item, onPress, colors } = props;

  return (
    <TouchableOpacity
      style={[styles.item, { backgroundColor: colors.repositoriesItem }]}
      onPress={() => onPress(item)}
      activeOpacity={0.8}
    >
      <View style={styles.itemRight}>
        <Text style={[styles.itemTitle, { color: colors.text }]}>
          {item.name}
        </Text>
        {!!item.description && (
          <Text
            style={[styles.itemDescription, { color: colors.text }]}
            numberOfLines={2}
          >
            {item.description}
          </Text>
        )}
        <View
          style={{
            width: "100%",
          }}
        >
          <ScrollView
            style={styles.tagContainer}
            horizontal
            fadingEdgeLength={50}
            showsHorizontalScrollIndicator={false}
          >
            {(item?.tags || []).map((e: string, i: number) => (
              <View
                style={[styles.tagItem, { marginLeft: i === 0 ? 0 : 5 }]}
                key={i}
              >
                <Text style={styles.tagText}>
                  {e}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default RepositoryItem;
