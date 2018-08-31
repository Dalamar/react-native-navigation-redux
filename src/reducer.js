// @flow
import { Reducer } from 'redux';
import { ActionTypes } from './types';
import { ActionsAll } from './actions';

interface IState {
  root: string;
}

const initialState: IState = {
  root: null,
};

export const navigation: Reducer<IState, ActionsAll> = (
  state: IState = initialState,
  action: ActionsAll,
) => {
  switch (action.type) {
    case ActionTypes.ROOT_CHANGED:
      return {
        ...state,
        root: action.root,
      };
    case ActionTypes.SET_VISIBLE_COMPONENT:
      return {
        ...state,
        componentId: action.componentId,
        componentName: action.componentName,
      };
    case ActionTypes.PUSH:
    case ActionTypes.POP:
    case ActionTypes.MODAL_SHOW:
    case ActionTypes.MODAL_HIDE:
      return {
        ...state,
        screen: action.layout,
      };
    default:
      return state;
  }
};
