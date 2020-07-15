<template>
    <!-- side nav -->
    <div class="lg:w-1/5 border-r border-lighter px-2 lg:px-6 py-2 flex flex-col justify-between" v-if="isLoggedIn">
        <div>
            <button class="h-12 w-12 hover:bg-lightblue text-3xl rounded-full text-blue">
                <i class="fa fa-twitter"></i>
            </button>
            <div>
                <button
                    v-for="tab in tabs"
                    :key="tab.title"
                    @click="id = tab.id"
                    class="focus:outline-none hover:text-blue flex items-center py-2 px-4 hover:bg-lightblue rounded-full mr-auto mb-3"
                    :class="{ 'text-blue' : id === tab.id}"             
                >
                    <i class="text-2xl mr-4 text-left" :class="tab.icon"></i>
                    <p class="text-lg font-semibold text-left hidden lg:block">{{ tab.title }}</p>
                </button>
            </div>
            <button
                class="text-white bg-blue rounded-full font-semibold focus:outline-none w-12 h-12 lg:h-auto lg:w-full p-3 hover:bg-darkblue"
            >
                <p class="hidden lg:block">Tweet</p>
                <i class="fa fa-plus lg:hidden"></i>
            </button>
        </div>
        <div class="lg:w-full relative">
            <button
                @click="dropdown = !dropdown ? true : false"
                class="flex items-center w-full hover:bg-lightblue rounded-full p-2 focus:outline-none"
            >
                <img :src="'/images/twitter.png'" class="w-10 h-10 rounded-full border border-lighter" />
                <div class="hidden lg:block ml-4">
                    <p class="text-sm font-bold leading-tight">{{getUser.name}}</p>
                    <p class="text-sm leading-tight">@{{getUser.name.replace(' ','')}}</p>
                </div>
                <i class="hidden lg:block fa fa-angle-down ml-auto text-lg"></i>
            </button>
            <div
                v-if="dropdown === true"
                class="absolute bottom-0 left-0 w-64 rounded-lg shadow-md border-lightest bg-white mb-16"
            >
                <button
                    @click="dropdown = false"
                    class="p-3 flex items-center w-full hover:bg-lightest p-2 focus:outline-none"
                >
                    <img :src="'/images/twitter.png'" class="w-10 h-10 rounded-full border border-lighter" />
                    <div class="ml-4">
                        <p class="text-sm font-bold leading-tight">{{getUser.name}}</p>
                        <p class="text-sm leading-tight">@{{getUser.name.replace(' ','')}}</p>
                    </div>
                    <i class="fa fa-check ml-auto test-blue"></i>
                </button>                                
                <router-link :to="{name: 'profile'}"
                    @click="dropdown = false"
                    
                >
                    <button                        
                        class="w-full text-left hover:bg-lightest border-t border-lighter p-3 test-sm focus:outline-none"
                    >Update Profile</button>
                </router-link>
                <button
                
                    @click="dropdown = false"
                    class="w-full text-left hover:bg-lightest border-t border-lighter p-3 test-sm focus:outline-none"
                >Log out @{{getUser.name.replace(' ','')}}</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: "SideNav",
    data() {
        return {
            tabs: [
                { icon: "fa fa-home", title: "Home", id: "home" },
                { icon: "fa fa-hashtag", title: "Explore", id: "explore" },
                {
                    icon: "fa fa-bell",
                    title: "Notifications",
                    id: "notifications"
                },
                { icon: "fa fa-envelope", title: "Messages", id: "messages" },
                {
                    icon: "fa fa-bookmark",
                    title: "Bookmarks",
                    id: "bookmarks"
                },
                { icon: "fa fa-clipboard-list", title: "Lists", id: "lists" },
                { icon: "fa fa-user", title: "Profile", id: "profile" },
                { icon: "fa fa-ellipsis-h", title: "More", id: "more" }
            ],
            id: "home",
            dropdown: false
        };
    },
    computed: {
        ...mapGetters({
            getUser: 'account/getUser',
            isLoggedIn: 'account/isLoggedIn'
        })
    }
};
</script>
