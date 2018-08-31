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

export function push(layout) {
  return {
    type: ActionTypes.PUSH,
    layout,
  };
}

export function pop(layout = {}) {
  return {
    type: ActionTypes.POP,
    layout,
  };
}

export function showModal(layout) {
  return {
    type: ActionTypes.MODAL_SHOW,
    layout,
  };
}

export function hideModal(layout) {
  return {
    type: ActionTypes.MODAL_HIDE,
    layout,
  };
}

export type ActionsAll =
  | changeAppRoot
  | setVisibleComponent
  | push
  | pop
  | showModal
  | hideModal
