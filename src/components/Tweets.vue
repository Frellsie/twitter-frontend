<template>
    <!-- tweets -->
    <div class="w-full md:w-1/2 h-full overflow-y-scroll">
        <div class="px-5 py-3 border-b border-lighter flex items-center justify-between">
            <h1 class="text-xl font-bold">Home</h1>
            <i class="fa fa-star text-xl text-blue"></i>
        </div>
        <div class="px-5 py-3 border-b-8 border-lighter flex">
            <div class="flex-none">
                <img
                    :src="'/images/twitter.png'"
                    class="flex-none w-12 h-12 rounded-full border border-lighter"
                />
            </div>
            <form v-on:submit.prevent="tweet($event)" class="w-full px-4 relative">
                <textarea
                    v-model="data.tweet"
                    placeholder="What's up?"
                    class="mt-3 pb-3 w-full focus:outline-none"
                />
                <div class="flex items-center">
                    <i class="text-lg text-blue mr-4 fa fa-image"></i>
                    <i class="text-lg text-blue mr-4 fa fa-film"></i>
                    <i class="text-lg text-blue mr-4 fa fa-chart-bar"></i>
                    <i class="text-lg text-blue mr-4 fa fa-smile"></i>
                </div>
                <button
                    type="submit"
                    class="h-10 px-4 text-white font-semibold bg-blue hover:bg-darkblue focus:outline-none rounded-full absolute bottom-0 right-0"
                >Tweet</button>
            </form>
        </div>
        <div class="flex flex-col-reverse">
            <div
                v-for="(tweet, i) in tweets"
                :key="i"
                class="w-full p-4 border-b hover:bg-lighter flex"
            >
                <div class="flex-none mr-4">
                    <img :src="'/images/twitter.png'" class="h-12 w-12 rounded-full flex-none" />
                </div>
                <div class="w-full">
                    <div class="flex items-center w-full">
                        <p class="font-semibold">{{tweet.user.name}}</p>
                        <p class="text-sm text-dark ml-2">{{tweet.user.email}}</p>
                        <p
                            class="text-sm text-dark ml-2"
                        >{{tweet.posted_at }}</p>
                        <i class="fa fa-trash-o ml-auto" aria-hidden="true" @click="deleteTweet(tweet.id)"></i>
                    </div>
                    <p class="py-2">{{ tweet.tweet }}</p>
                    <div class="flex items-center justify-between w-full">
                        <div class="flex items-center text-sm text-dark" @click="openCommentModal(tweet.id, tweet.comments)">
                            <i class="fa fa-comment mr-3"></i>
                            <p v-if="tweet.comments.length">{{tweet.comments.length}}</p>
                        </div>                        
                        <div class="flex items-center text-sm text-dark" @click="reactToTweet(tweet.id)">
                            <i class="fa fa-heart mr-3" :class="{ 'text-blue' : tweet.reactions.length }"></i>
                            <p v-if="tweet.reactions.length">{{tweet.reactions.length}}</p>
                        </div>                        
                    </div>
                </div>
            </div>
        </div> 
        <modal-comment-on-tweet ref="commentTweet" :open="commentOnTweet" @close="commentOnTweet = false">
            <div class="max-w-lg w-full bg-white rounded-lg shadow-2xl px-6 py-6">
                <form @submit.prevent>                    
                    <label class="block">
                        <span class="text-gray-700">Comment to tweet</span>
                        <input
                            class="form-input mt-1 block w-full"    
                            v-model="reply.comment"                        
                        />
                    </label>
                    <div class="mt-6">
                        <button
                            type="button"
                            @click="commentToTweet($event)"                            
                            class="px-4 py-2 text-white font-semibold bg-blue hover:bg-darkblue border border-transparent rounded focus:outline-none focus:shadow-outline"
                        >Reply</button>                                                
                    </div>
                </form>
                <div v-for="(comment,i) in comments" :key="i">
                    {{comment.comment}} {{comment.user.name}}
                </div>
            </div>
        </modal-comment-on-tweet>      
    </div>
</template>

<script>
import { Tweet } from "../services/tweet";
import ModalCommentOnTweet from "./Pages/ModalCommentOnTweet"
import moment from "moment";
export default {
    name: "Tweets",
    data() {
        return {
            following: [
                {
                    src: "elon.jpg",
                    name: "Elon Musk",
                    handle: "@teslaBoy",
                    time: "20 min",
                    tweet: "Should I just quarantine on mars??",
                    comments: "1,000",
                    retweets: "550",
                    like: "1,000,003"
                },
                {
                    src: "kevin.jpg",
                    name: "Kevin Hart",
                    handle: "@miniRock",
                    time: "55 min",
                    tweet:
                        "Should me and the rock do another sub-par movie together????",
                    comments: "2,030",
                    retweets: "50",
                    like: "20,003"
                },
                {
                    src: "elon.jpg",
                    name: "Elon Musk",
                    handle: "@teslaBoy",
                    time: "1.4 hr",
                    tweet: "Haha just made a flame thrower. Shld I sell them?",
                    comments: "100,000",
                    retweets: "1,000,002",
                    like: "5,000,003"
                },
                {
                    src: "elon.jpg",
                    name: "Elon Musk",
                    handle: "@teslaBoy",
                    time: "1.4 hr",
                    tweet: "Just did something crazyyyyyyy",
                    comments: "100,500",
                    retweets: "1,000,032",
                    like: "5,000,103"
                }
            ],
            commentOnTweet: false,
            reply: {
                tweet_id: null,
                comment: ''
            },
            comments: [],
            tweets: [],
            data: { tweet: "" }
        };
    },
    components: {
        ModalCommentOnTweet
    },
    mounted() {
        this.getTweets();
        console.log(this.$refs.commentTweet)
    },
    methods: {
        tweet(e) {
            let target = e.target.querySelector('button[type="submit"]');
            let defaultText = target.innerHTML;
            target.disabled = true;
            target.innerHTML =
                '<i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Tweeting ...';
            Tweet.add(this.data)
                .then(response => {
                    this.tweets = response.data;
                    target.disabled = false;
                    target.innerHTML = defaultText;
                    this.$toasted.global.info({
                        message: "Tweet posted!"
                    });
                    this.data.tweet = "";
                })
                .catch(err => {                    
                    target.disabled = false;
                    target.innerHTML = defaultText;
                    this.$toasted.global.error({
                        message: err.response.data.message
                    });
                });
        },
        getTweets() {
            Tweet.all().then(response => {
                this.tweets = response.data;
                this.tweets.reverse()
            });
        },
        openCommentModal(id, comments)
        {
            this.reply.tweet_id = id
            this.commentOnTweet = true
            this.comments = comments
        },
        commentToTweet(e)
        {
            let target = e.target
            let defaultText = target.innerHTML;
            target.disabled = true;
            target.innerHTML =
                '<i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Tweeting ...';
            Tweet.comment(this.reply).then(response => {                
                this.$toasted.global.info({
                    message: 'Tweet added!'
                })
                this.reply.comment = ''
                this.reply.tweet_id = null
                this.commentOnTweet = false
                target.disabled = false;
                target.innerHTML = defaultText;
                this.getTweets()                
            }).catch(err => {
                target.disabled = false;
                target.innerHTML = defaultText;
                this.$toasted.global.error({
                    message: err.response.data.message
                });
            })
        },
        reactToTweet(id)
        {
            Tweet.react({tweet_id: id}).then(response => {
                this.getTweets()
            })
        },
        deleteTweet(id)
        {
            Tweet.delete({id: id}).then(response => {
                this.getTweets()
            })
        }
    }
};
</script>
