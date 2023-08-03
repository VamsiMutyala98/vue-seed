import { ActionTree } from 'vuex';
import { IState } from './type';
import mutationTypes from './mutation-type';

const actions: ActionTree<IState, IState> = {
  INCREMENT_COUNT({ commit }) {
    commit(mutationTypes.INCREMENT_COUNT);
  },
  DECREMENT_COUNT({ commit }) {
    commit(mutationTypes.DECREMENT_COUNT);
  },
};

export default actions;
