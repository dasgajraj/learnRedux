import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import store from './redux/Store';
import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

const AppRedux = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)
registerRootComponent(AppRedux);
