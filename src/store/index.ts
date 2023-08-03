import { createStore } from 'vuex';
import { IState } from './type';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

export const state: IState = {
  count: 0,
};

export const store = createStore({
  state,
  getters,
  mutations,
  actions,
});
