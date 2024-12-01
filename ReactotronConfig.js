/* eslint-disable react-hooks/rules-of-hooks */

import AsyncStorage from "@react-native-async-storage/async-storage";
import Reactotron from "reactotron-react-native";

// import { NativeModules } from "react-native";

// add every built-in react native feature.  you also have the ability to pass
// an object as a parameter to configure each individual react-native plugin
// if you'd like.
// for ease of debugging, wrap console.log with reactotron.log

// if we're running in DEV mode, then let's connect!
if (__DEV__) {
  // const hostname = NativeModules.SourceCode.scriptURL
  //   .split("://")[1] // Remove the scheme
  //   .split("/")[0] // Remove the path
  //   .split(":")[0]; // Remove the port
  const goodOldConsoleLog = console.log;
  console.log = (...args) => {
    goodOldConsoleLog(...args);
    Reactotron.log(...args);
  };
  Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({
      name: "react-native-expo-template"
      // host: hostname
    })
    .useReactNative({
      asyncStorage: false,
      networking: {
        ignoreUrls: /symbolicate|127.0.0.1/
      },
      editor: false,
      errors: { veto: (stackFrame) => false },
      overlay: false
    })
    .connect();
}

// export default Reactotron;
