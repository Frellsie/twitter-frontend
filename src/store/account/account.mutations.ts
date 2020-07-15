export default {
    setUser(state: { user: any; }, data: any) {
        state.user = data;
    },
    updateUser(state: { user: { name: any; email: any; }; }, data: { name: any; email: any; })
    {
        state.user.name = data.name
        state.user.email = data.email
    }    
}
