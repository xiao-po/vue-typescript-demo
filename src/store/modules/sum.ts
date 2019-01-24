import { Getter, GetterTree, Action, Commit, ActionTree, Mutation, mapMutations, MutationTree, ModuleTree } from 'vuex';
import { StoreState } from '..';


export interface SumState {
    sum: number;
}

const sumState: SumState = {
    sum: 0,
};

// getters
const sum: Getter<StoreState, any>  =  (state: StoreState) => state.sumState.sum;

const getters: GetterTree<StoreState, any> = {
    sum,
  };

// actions
const incrementAction: Action<SumState, any> =
    (context: {commit: Commit; state: SumState}) => context.commit(SUM_MUTATION.increment);

const actions: ActionTree<SumState, any> = {
    incrementAction,
};

// mutations
const incrementmutations: Mutation<SumState> = (state: SumState) => {
    state.sum++;
};

const mutations: MutationTree<any> = {
    incrementmutations,
};


export default {
    state: sumState,
    getters,
    actions,
    mutations,
    namespaced: true,
  } as ModuleTree<SumState>;

export enum SUM_MUTATION {
    increment = 'incrementmutations',
}
