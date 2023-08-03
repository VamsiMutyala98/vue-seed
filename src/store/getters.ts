import { GetterTree } from 'vuex';
import { IState } from './type';

const getters: GetterTree<IState, IState> = {
  getCount: (stateVar) => stateVar.count,
};

export default getters;
