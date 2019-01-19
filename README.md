# react-native-navigation-redux
Missing Redux feature for awesome Wix React Native Navigation V2

The main goal of this package is to make it possible to navigate outside of React Component, for instance from within sagas.

Like this:

```
function* handleSomeCoolAction(action: someCoolAction) {
  yield put(push({
    component: {
      name: 'screens.SomeCoolScreen',
    },
  }))
}

export default [
  takeLatest(ActionTypes.SOME_COOL_ACTION, handleSomeCoolAction),
];
```

# Installation
## Yarn
`yarn add react-native-navigation-redux`

## NPM
`npm install react-native-navigation-redux`

## HOC (RNNR)
In your main index.js file:

```
import { RNNR } from 'react-native-navigation-redux'
```

```
new RNNR(new App(), store);
```

Sometimes you might want to exclude some components from being exposed as currently visible, 
for instance custom Top Bar Components, as obviously there is no way to navigate within such components.

To do that, simply pass an array of component names (registered screens) that you want to exclude: 
```
const excludedComponents = ['TopBarComponent'];

new RNNR(new App(), store, excludedComponents);
```

## Connect Reducer
In your reducers builder file:

```import { navigation } from 'react-native-navigation-redux'```

## Connect Saga
In your saga builder file:

```import { navigationSaga } from 'react-native-navigation-redux'```

# Usage
```
this.props.dispatch(push({
  component: {
    name: 'screens.Welcome',
  },
}))
```

You can also write your own saga functions to handle navigation actions:
```
const getComponentId = state => state.navigation.componentId;

function* handlePush(action: push) {
  const componentId = yield select(getComponentId);
  yield Navigation.push(componentId, action.layout);
  // Or do what you ever want to do on navigation PUSH action.
}

export default [
  takeLatest(ActionTypes.PUSH, handlePush),
];
```

# Switch active tab programmatically
Assuming that you have defined your BottomTabsId as described in the RNN [documentation](https://wix.github.io/react-native-navigation/#/docs/layout-types?id=selecting-tabs-programmatically)

```
const bottomTabs = {
     id: 'BottomTabsId', <--- here
     children: [...
 ```
 
 All you need to switch tab using this library is simply dispatch switchTabToIndex action
 
 ```javascript
dispatch(switchTabToIndex('BottomTabsId', 2));
``` 
