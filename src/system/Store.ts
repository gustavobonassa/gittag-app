import {
  observable,
  makeObservable,
  reaction,
  runInAction,
} from "mobx";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { IRepository } from "../types/Repository.interface";

interface IStore {
  username?: string;
  repositories: IRepository[];
  token: string;
  theme: "light" | "dark";
}

const store: IStore = {
  theme: "light",
  username: "",
  token: "",
  repositories: [],
}

type IKeyStore = keyof IStore;

/**
 * This is the last store saved in the local storage. In the first access it is null.
 */
export async function loadSavedStore() {
  try {
    try {
      const value = await AsyncStorage.getItem("git@store");
      const saved = JSON.parse(value || "");
      if (saved) {
        Object.keys(saved).map((e) => {
          const key = e as IKeyStore;
          runInAction(() => {
            store[key] = saved[e];
          })
        })
      }
    } catch (ex) {
      // do nothing, oh well
      console.error(ex);
    }
  } finally {
    createLocalStorageReaction(); // starts the reaction
  }
}

makeObservable(store, {
  username: observable,
  token: observable,
  theme: observable,
  repositories: observable,
});


/**
 * Creates a reaction that listen to the changes in the objects
 */
function createLocalStorageReaction() {
  reaction(
    () => JSON.stringify(store), // should update when json changes
    () => saveOnStorage(store) // saves that item on local storage when it changes
  );
}

/**
 * Saves a json in the async storage of the device.
 */
export async function saveOnStorage(data: any) {
  try {
    const value = JSON.stringify(data);
    await AsyncStorage.setItem("git@store", value);
  } catch (ex) {
    console.error(ex);
  }
}

export default store;
