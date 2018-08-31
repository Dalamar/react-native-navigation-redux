import { Navigation } from 'react-native-navigation';
import { setVisibleComponent } from './actions';

export const RNNR = (Component, store) => {
  Navigation.events().registerComponentDidAppearListener(({ componentId, componentName }) => {
    store.dispatch(setVisibleComponent(componentId, componentName));
  });

  return () => <Component />;
};
