import { MutationTree } from 'vuex';
import { IState } from './type';
import mutationTypes from './mutation-type';

const mutations: MutationTree<IState> = {
  [mutationTypes.INCREMENT_COUNT](stateVar: IState) {
    stateVar.count += 1;
  },
  [mutationTypes.DECREMENT_COUNT](stateVar: IState) {
    stateVar.count -= 1;
  },
};

export default mutations;
