<template>
  <div class="flex container h-screen w-full">
    <SideNav />
    <Tweets />
    <Trending />
  </div>
</template>

<script>
import SideNav from "../components/SideNav";
import Tweets from "../components/Tweets";
import Trending from "../components/Trending";
import Header from "../components/Pages/Header";
export default {
  name: "Home",
  components: {
    Header,
    SideNav,
    Tweets,
    Trending
  }
};
</script>
