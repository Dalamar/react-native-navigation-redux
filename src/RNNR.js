import { Navigation } from 'react-native-navigation';
import { setVisibleComponent } from './actions';

export const RNNR = (Component, store, excludedComponents = []) => {
  Navigation.events().registerComponentDidAppearListener(({ componentId, componentName }) => {
    if (!excludedComponents.includes(componentName)) {
      store.dispatch(setVisibleComponent(componentId, componentName));
    }
  });

  return () => <Component />;
};
