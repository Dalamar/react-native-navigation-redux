// @flow
import {
  call,
  select,
  takeLatest,
} from 'redux-saga/effects';
import { Navigation } from 'react-native-navigation';
import {
  changeAppRoot,
  dismissModal,
  dismissAllModals,
  pop,
  popTo,
  popToRoot,
  push,
  setStackRoot,
  showModal,
} from './actions';
import { ActionTypes } from './types';

const getComponentId = state => state.navigation.componentId;

function* handleRootChanged(action: changeAppRoot) {
  // @todo: Implement generic flow for root change
}

function* handlePush(action: push) {
  const componentId = yield select(getComponentId);
  yield call([Navigation, Navigation.push], componentId, action.layout)
}

function* handlePop(action: pop) {
  const componentId = yield select(getComponentId);
  yield call([Navigation, Navigation.pop], componentId)
}

function* handlePopTo(action: popTo) {
  const componentId = yield select(getComponentId);
  yield call([Navigation, Navigation.popTo], componentId)
}

function* handlePopToRoot(action: popToRoot) {
  const componentId = yield select(getComponentId);
  yield call([Navigation, Navigation.popToRoot], componentId)
}

function* handleSetStackRoot(action: setStackRoot) {
  const componentId = yield select(getComponentId);
  yield call([Navigation, Navigation.setStackRoot], componentId, action.params)
}

function* handleShowModal(action: showModal) {
  yield call([Navigation, Navigation.showModal], action.layout)
}

function* handleDismissModal(action: dismissModal) {
  const componentId = yield select(getComponentId);
  yield call([Navigation, Navigation.dismissModal], componentId)
}

function* handleDismissAllModals(action: dismissAllModals) {
  yield call([Navigation, Navigation.dismissAllModals])
}

export default [
  takeLatest(ActionTypes.ROOT_CHANGED, handleRootChanged),
  takeLatest(ActionTypes.PUSH, handlePush),
  takeLatest(ActionTypes.POP, handlePop),
  takeLatest(ActionTypes.POP_TO, handlePopTo),
  takeLatest(ActionTypes.POP_TO_ROOT, handlePopToRoot),
  takeLatest(ActionTypes.SET_STACK_ROOT, handleSetStackRoot),
  takeLatest(ActionTypes.MODAL_SHOW, handleShowModal),
  takeLatest(ActionTypes.MODAL_DISMISS, handleDismissModal),
  takeLatest(ActionTypes.MODAL_DISMISS_ALL, handleDismissAllModals),
];
