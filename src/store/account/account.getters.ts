export default {
    getUser(state: { user: any; }) {
        return state.user;
    },
    isLoggedIn(state: { user: null; }) {
        return state.user !== null;
    }    
}
