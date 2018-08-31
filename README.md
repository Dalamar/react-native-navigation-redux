# react-native-navigation-redux
Missing Redux feature for awesome Wix React Native Navigation

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