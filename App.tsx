import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Provider} from "react-redux"
import { store } from './src/store/store'
import Home from './src/pages/Home/Home';

export default function App() {
  return (
    <Provider store={store}>
      <Home/>
    </Provider>
  );
}
