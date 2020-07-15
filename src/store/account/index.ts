import state from './account.state';
import getters from './account.getters';
import mutations from './account.mutations';
import actions from './account.actions';

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}