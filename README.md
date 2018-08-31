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