import { ActionTree, createStore, GetterTree, MutationTree } from 'vuex';
import { IState } from './type';

export const state: IState = {
  count: 0,
};

export const getters: GetterTree<IState, IState> = {
  getCount: (stateVar) => stateVar.count,
};

const actions: ActionTree<IState, IState> = {
  increment({ commit }) {
    commit('increment');
  },
  decrement({ commit }) {
    commit('decrement');
  },
};

const mutations: MutationTree<IState> = {
  increment(stateVar: IState) {
    stateVar.count += 1;
  },
  decrement(stateVar: IState) {
    stateVar.count -= 1;
  },
};

export const store = createStore({
  state,
  getters,
  mutations,
  actions,
});
