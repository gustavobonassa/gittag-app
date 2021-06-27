import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./src/hooks/useCachedResources";

import Navigation from "./src/navigation";
import Auth from "./src/screens/Auth/Auth";
import { observer } from "mobx-react";
import store, { loadSavedStore } from "./src/system/Store";
import { RootSiblingParent } from "react-native-root-siblings";

function App() {
  React.useEffect(() => {
    onLoad();
  }, []);

  const isLoadingComplete = useCachedResources();
  const colorScheme = store.theme;

  async function onLoad() {
    await loadSavedStore();
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <RootSiblingParent>
        <SafeAreaProvider>
          {!store.token ? (
            <Auth />
          ) : (
            <>
              <Navigation colorScheme={colorScheme} />
              <StatusBar />
            </>
          )}
        </SafeAreaProvider>
      </RootSiblingParent>
    );
  }
}

export default observer(App);
