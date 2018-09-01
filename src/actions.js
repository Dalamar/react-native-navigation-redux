import { ActionTypes } from './types';

export function changeAppRoot(root) {
  return {
    type: ActionTypes.ROOT_CHANGED,
    root,
  };
}

export function setVisibleComponent(componentId, componentName) {
  return {
    type: ActionTypes.SET_VISIBLE_COMPONENT,
    componentId,
    componentName,
  };
}

export function push(layout = {}) {
  return {
    type: ActionTypes.PUSH,
    layout,
  };
}

export function pop() {
  return {
    type: ActionTypes.POP,
  };
}

export function popTo() {
  return {
    type: ActionTypes.POP_TO,
  };
}

export function popToRoot() {
  return {
    type: ActionTypes.POP_TO_ROOT,
  };
}

export function setStackRoot(params = {}) {
  return {
    type: ActionTypes.POP_TO_ROOT,
    params,
  };
}

export function showModal(layout = {}) {
  return {
    type: ActionTypes.MODAL_SHOW,
    layout,
  };
}

export function dismissModal() {
  return {
    type: ActionTypes.MODAL_DISMISS,
  };
}

export function dismissAllModals() {
  return {
    type: ActionTypes.MODAL_DISMISS_ALL,
  };
}

export type ActionsAll =
  | changeAppRoot
  | setVisibleComponent
  | push
  | pop
  | popTo
  | popToRoot
  | setStackRoot
  | showModal
  | dismissModal
  | dismissAllModals
