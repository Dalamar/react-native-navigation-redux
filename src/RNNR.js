import { Navigation } from 'react-native-navigation';
import { setVisibleComponent, setVisiblePreviousComponent } from './actions';

export const RNNR = (Component, store, excludedComponents = []) => {
  Navigation.events().registerComponentDidAppearListener(({ componentId, componentName }) => {
    if (!excludedComponents.includes(componentName)) {
      store.dispatch(setVisibleComponent(componentId, componentName));
    }
  });

  Navigation.events().registerCommandCompletedListener(({ commandId }) => {
    if (commandId === 'dismissModal') {
      store.dispatch(setVisiblePreviousComponent());
    }
  });

  return () => <Component />;
};
