<template>
    <div class="bg-white w-full">
        <div class="container mx-auto flex flex-col lg:flex-row items-center py-4">
            <nav class="w-full lg:w-2/5">
                <a href="#" class="top-nav-item pr-2">
                    <i class="fa fa-home fa-lg"></i> Home
                </a>
                <a href="#" class="top-nav-item pr-2">
                    <i class="fa fa-bolt fa-lg"></i> Moments
                </a>
                <a href="#" class="top-nav-item pr-2">
                    <i class="fa fa-bell fa-lg"></i> Notifications
                </a>
                <a href="#" class="top-nav-item pr-2">
                    <i class="fa fa-envelope fa-lg"></i> Messages
                </a>
            </nav>
            <div class="w-full lg:w-1/5 text-center my-4 lg:my-0">
                <a href="#">
                    <i class="fa fa-twitter fa-lg text-blue"></i>
                </a>
            </div>
            <div class="w-full lg:w-2/5 flex lg:justify-end">
                <div class="mr-4 relative">
                    <input
                        type="text"
                        class="bg-grey-lighter h-8 px-6 py-2 text-xs w-48 rounded-full"
                        placeholder="Search Twitter"
                    />                    
                </div>
                <div class="mr-4">
                    <a href="#">
                        <img :src="'/images/twitter.png'" alt="avatar" class="h-9 w-9 rounded-full" />
                    </a>
                </div>
                <div>
                    <router-link :to="{name: 'home'}">
                        <button
                            class="bg-darkblue hover:bg-teal-dark text-white font-medium py-2 px-4 rounded-full"
                        >Tweet</button>
                    </router-link>
                </div>
            </div>
        </div>
        <!-- end container -->

        <div class="hero h-64 bg-cover h-112"></div>

        <div class="bg-white shadow">
            <div class="container mx-auto flex flex-col lg:flex-row items-center lg:relative">
                <div class="w-full lg:w-1/4">
                    <img
                        :src="'/images/twitter.png'"
                        alt="logo"
                        class="rounded-full h-20 w-20 lg:absolute lg:pin-l lg:pin-t lg:-mt-24"
                    />
                </div>
                <div class="w-full lg:w-1/2">
                    <ul class="list-reset flex">
                        <li
                            class="text-center py-3 px-4 border-b-2 border-solid border-transparent border-teal"
                        >
                            <a href="#" class="text-grey-darker hover:no-underline">
                                <div class="text-sm font-bold tracking-tight mb-1">Tweets</div>
                                <div class="text-lg tracking-tight font-bold text-teal">60</div>
                            </a>
                        </li>
                        <li
                            class="text-center py-3 px-4 border-b-2 border-solid border-transparent hover:border-teal"
                        >
                            <a href="#" class="text-grey-darker hover:no-underline">
                                <div class="text-sm font-bold tracking-tight mb-1">Following</div>
                                <div class="text-lg tracking-tight font-bold hover:text-teal">4</div>
                            </a>
                        </li>
                        <li
                            class="text-center py-3 px-4 border-b-2 border-solid border-transparent hover:border-teal"
                        >
                            <a href="#" class="text-grey-darker hover:no-underline">
                                <div class="text-sm font-bold tracking-tight mb-1">Followers</div>
                                <div class="text-lg tracking-tight font-bold hover:text-teal">3,810</div>
                            </a>
                        </li>
                        <li
                            class="text-center py-3 px-4 border-b-2 border-solid border-transparent hover:border-teal"
                        >
                            <a href="#" class="text-grey-darker hover:no-underline">
                                <div class="text-sm font-bold tracking-tight mb-1">Likes</div>
                                <div class="text-lg tracking-tight font-bold hover:text-teal">9</div>
                            </a>
                        </li>
                        <li
                            class="text-center py-3 px-4 border-b-2 border-solid border-transparent hover:border-teal"
                        >
                            <a href="#" class="text-grey-darker hover:no-underline">
                                <div class="text-sm font-bold tracking-tight mb-1">Moments</div>
                                <div class="text-lg tracking-tight font-bold hover:text-teal">1</div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="w-full lg:w-1/4 flex my-4 lg:my-0 lg:justify-end items-center">
                    <div class="mr-6">
                        <button
                            @click="open = true"
                            class="bg-blue hover:bg-teal-dark text-white font-medium py-2 px-6 rounded-full"
                        >Edit</button>                        
                    </div>
                </div>
            </div>
            <!-- end container -->
        </div>

        <div class="container mx-auto flex flex-col lg:flex-row mt-3 text-sm leading-normal">
            <div class="w-full lg:w-1/4 pl-4 lg:pl-0 pr-6 mt-8 mb-4">
                <h1>
                    <a href="#" class="text-black">{{getUser.name}}</a>
                </h1>
                <div class="mb-0">
                    <a href="#" class="text-grey-darker">@{{getUser.name.replace(' ','')}}</a>
                </div>
                <div class="mt-0 mb-4">
                    <a href="#" class="text-grey-darker">{{getUser.email}}</a>
                </div>

                
            </div>

            <div class="w-full lg:w-1/2 bg-white mb-4">
                <div class="p-3 text-lg font-bold border-b border-solid border-grey-light">
                    <a href="#" class="text-black mr-6">Tweets</a>
                    <a href="#" class="mr-6">Tweets &amp; Replies</a>
                    <a href="#">Media</a>
                </div>

                <div class="flex border-b border-solid border-grey-light" v-for="(tweet, i) in tweets" :key="i">
                    <div class="w-1/8 text-right pl-3 pt-3">
                        <div>
                            <i class="fa fa-thumb-tack text-teal mr-2"></i>
                        </div>
                        <div>
                            <a href="#">
                                <img
                                    :src="'/images/twitter.png'"
                                    alt="avatar"
                                    class="rounded-full h-12 w-12 mr-2"
                                />
                            </a>
                        </div>
                    </div>
                    <div class="w-7/8 p-3 pl-0" style="max-width: calc(100% - 140px);">
                        <div class="text-xs text-grey-dark">Pinned Tweet</div>
                        <div class="flex justify-between">
                            <div>
                                <span class="font-bold">
                                    <a href="#" class="text-black">{{tweet.user.name}}</a>
                                </span>
                                <span class="text-grey-dark">@{{tweet.user.name.replace(' ','')}}</span>
                                <span class="text-grey-dark">&middot;</span>
                                <span class="text-grey-dark">{{tweet.posted_at}}</span>
                            </div>
                            <div>
                                <a href="#" class="text-grey-dark hover:text-teal">
                                    <i class="fa fa-trash"></i>
                                </a>
                            </div>
                        </div>

                        <div class="mb-4">
                            {{tweet.tweet}}
                        </div>

                        <div class="pb-2">
                            <span class="mr-8">
                                <a
                                    href="#"
                                    class="text-grey-dark hover:no-underline hover:text-blue-light"
                                >
                                    <i class="fa fa-comment fa-lg mr-2"></i> {{tweet.comments.length}}                                   
                                </a>
                            </span>                            
                            <span class="mr-8">
                                <a
                                    href="#"
                                    class="text-grey-dark hover:no-underline hover:text-red"
                                >
                                    <i class="fa fa-heart fa-lg mr-2" :class="{ 'text-blue' : tweet.reactions.length }"></i> {{tweet.reactions.length}}
                                </a>
                            </span>                            
                        </div>
                    </div>
                </div>                
            </div>
        </div>

        <!-- modal -->
        <modal-update-profile :open="open" @close="open = false">
            <div class="max-w-lg w-full bg-white rounded-lg shadow-2xl px-6 py-6">
                <form @submit.prevent>
                    <label class="block">
                        <span class="text-gray-700">Name</span>
                        <input
                            class="form-input mt-1 block w-full"
                            v-model="user.name"
                            :placeholder="getUser.name"
                        />
                    </label>
                    <label class="block">
                        <span class="text-gray-700">Email</span>
                        <input
                            class="form-input mt-1 block w-full"
                            v-model="user.email"
                            :placeholder="getUser.email"
                        />
                    </label>
                    <div class="mt-6">
                        <button
                            type="button"
                            @click="updateProfile($event)"                            
                            class="px-4 py-2 text-white font-semibold bg-blue hover:bg-darkblue border border-transparent rounded focus:outline-none focus:shadow-outline"
                        >Save changes</button>
                        <button
                            @click="open = false"
                            class="ml-4 px-4 py-2 text-gray-800 font-semibold bg-white hover:bg-gray-100 border rounded focus:outline-none focus:shadow-outline"
                        >Cancel</button>
                    </div>
                </form>
            </div>
        </modal-update-profile>        
    </div>
</template>

<script>
import ModalUpdateProfile from "../Pages/ModalUpdateProfile";

import { Tweet } from '../../services/tweet'
import { mapGetters, mapMutations } from 'vuex';
import { Auth } from '../../services/authentication'
export default {
    name: "Profile",    
    data() {
        return {
            tweets: [],
            open: false,            
            user: {
                name: '',
                email: ''
            }
        };
    },
    components: {
        ModalUpdateProfile        
    },
    computed: {
        ...mapGetters({
            getUser: 'account/getUser'            
        })
    },
    mounted()
    {
        this.getTweets()
    },
    methods: {
        ...mapMutations({
            updateUser: 'account/updateUser'
        }),
        getTweets() {
            Tweet.all().then(response => {
                this.tweets = response.data;
            });
        },
        updateProfile(e)
        {
            ;let target = e.target
            let defaultText = target.innerHTML
            target.disabled = true
            target.innerHTML = '<i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Tweeting ...';
            Auth.update(this.user).then(response => {                
                this.updateUser(response.data.data)
                target.disabled = false
                target.innerHTML = defaultText
                this.$toasted.global.info({
                    message: response.data.message
                })
            }).catch(err => {
                target.disabled = false
                target.innerHTML = defaultText                
                this.$toasted.global.error({
                    message: err.response.data.message
                })
            })
        }
    }
};
</script>
