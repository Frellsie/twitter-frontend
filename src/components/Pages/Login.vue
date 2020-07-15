<template>
    <!--Login-->
    <div class="md:block w-1/3 items-center h-screen">
        <div class="w-full bg-white rounded shadow-lg p-8 m-4">
            <div class="md:block py-2 pb-2 px-6 flex text-center">
                <button class="h-8 w-12 hover:bg-lightblue text-3xl rounded-full text-blue">
                    <i class="fab fa-twitter"></i>
                </button>
            </div>
            <h1 class="block w-full text-center text-black font-bold mb-6">Login to Twitter</h1>
            <div class="flex flex-col mb-4">
                <input
                    class="pb-5 px-3 placeholder-darkblue border border-darkblue bg-lightblue"
                    type="email"
                    v-model="user.email"
                    placeholder="Email"
                />
            </div>
            <div class="flex flex-col mb-4">
                <input
                    class="pb-5 px-3 placeholder-darkblue border border-darkblue bg-lightblue"
                    type="password"
                    v-model="user.password"
                    placeholder="Password"
                />
            </div>
            <button
                @click="loginUser($event)"
                class="block bg-darkblue hover:darkblue text-white text-lg mx-auto px-40 rounded-full"
            >Login</button>
            <router-link
                :to="{name: 'signup'}"
                class="block w-full text-center no-underline text-sm text-darkblue hover:text-grey-darker"
            >Forgot your password?</router-link>
        </div>
    </div>
</template>

<script>
import { Auth } from "../../services/authentication";
import { mapMutations } from 'vuex';
export default {
    name: "Login",
    name: "Signup",
    data() {
        return {
            user: {
                email: "",
                password: ""
            }
        };
    },
    methods: {
        ...mapMutations({
            setUser: 'account/setUser'
        }),
        loginUser(e) {
            let defaultText = e.target.innerHTML;
            e.target.innerHTML = '<i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Loading';
            e.target.disabled = true;
            Auth.login(this.user)
                .then(response => {                    
                    
                    this.setUser(response.data)
                    this.defaultState(e, defaultText);
                    this.$toasted.global.info({
                        message: 'You have successfully logged in'
                    });       
                    this.$router.push({ name: 'home' })             
                })
                .catch(err => {
                    this.defaultState(e, defaultText);
                    this.$toasted.global.error({
                        message: err.response.data.message
                    });
                });
        },
        defaultState(e, defaultText) {
            e.target.innerHTML = defaultText;
            e.target.disabled = false;
        }
    }
};
</script>
