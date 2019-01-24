import Vue from 'vue';
import Vuex, { Commit, Dispatch } from 'vuex';
import sum, { SumState as SumState } from './modules/sum';
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
      sum,
    },
  });

export interface StoreState {
    sumState: SumState;
}
