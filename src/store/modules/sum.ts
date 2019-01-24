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
const decreaseAction: Action<SumState, any> =
    (context: {commit: Commit; state: SumState}) => context.commit(SUM_MUTATION.decrease);

const actions: ActionTree<SumState, any> = {
    incrementAction,
    decreaseAction,
};

// mutations
const incrementmutation: Mutation<SumState> = (state: SumState) => {
    state.sum++;
};

const decreasemutation: Mutation<SumState> = (state: SumState) => {
    state.sum--;
};

const mutations: MutationTree<any> = {
    incrementmutation,
    decreasemutation,
};


export default {
    state: sumState,
    getters,
    actions,
    mutations,
    namespaced: true,
  } as ModuleTree<SumState>;

export enum SUM_MUTATION {
    increment = 'incrementmutation',
    decrease = 'decreasemutation',
}
