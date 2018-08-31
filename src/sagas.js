// @flow
import {
  select,
  takeLatest,
} from 'redux-saga/effects';
import { Navigation } from 'react-native-navigation';
import {
  changeAppRoot,
  hideModal,
  pop,
  push,
  showModal,
} from './actions';
import { ActionTypes } from './types';

const getComponentId = state => state.navigation.componentId;

function* handleRootChanged(action: changeAppRoot) {
  // @todo: Implement generic flow for root change
}

function* handlePush(action: push) {
  const componentId = yield select(getComponentId);
  yield Navigation.push(componentId, action.layout);
}

function* handlePop(action: pop) {
  const componentId = yield select(getComponentId);
  yield Navigation.pop(componentId);
}

function* handleShowModal(action: showModal) {
  yield Navigation.showModal(action.layout);
}

function* handleHideModal(action: hideModal) {
  const componentId = yield select(getComponentId);
  yield Navigation.dismissModal(componentId, action.layout);
}

export default [
  takeLatest(ActionTypes.ROOT_CHANGED, handleRootChanged),
  takeLatest(ActionTypes.PUSH, handlePush),
  takeLatest(ActionTypes.POP, handlePop),
  takeLatest(ActionTypes.MODAL_SHOW, handleShowModal),
  takeLatest(ActionTypes.MODAL_HIDE, handleHideModal),
];
