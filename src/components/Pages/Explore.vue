<template>
  <!--Explore-->
  <div class="md:w-1/2 h-full overflow absolute">
    <div
      class="mt-15 ml-40 px-2 py-3 border-b border-lighter flex items-center justify-between border-l border-r border-t"
    >
      <div class="w-full rounded-lg relative">
        <div class="flex items-center justify-between p-3">
          <h1 class="text-xl font-bold">Explore</h1>
          <i class="fas fa-cog text-lg text-blue"></i>
        </div>
        <div class="flex items-center justify-between p-3">
          <p class="text-lg font-bold">Trends for You</p>
        </div>
        <button
          v-for="trend in trending"
          class="w-full flex justify-between hover:bg-lighter p-3 border-t border-lighter"
        >
          <div>
            <p class="text-xs text-left leading-tight text-dark">
              {{ trend.top }}
            </p>
            <p class="font-semibold text-sm text-left leading-tight">
              {{ trend.title }}
            </p>
            <p class="text-left text-sm leading-tight text-dark">
              {{ trend.bottom }}
            </p>
          </div>
          <i class="fas fa-angle-down text-lg text-dark"></i>
        </button>
        <button
          class="p-3 w-full hover:bg-lighter text-left text-blue border-t border-lighter"
        >
          Show More
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Explore",
  data() {
    return {
      trending: [
        {
          top: "Trending in TX",
          title: "Gigi",
          bottom: "Trending with: Rip Gigi"
        },
        { top: "Music", title: "We Won", bottom: "135K Tweets" },
        { top: "Pop", title: "Blue Ivy", bottom: "40k tweets" },
        { top: "Trending in US", title: "Denim Day", bottom: "40k tweets" },
        { top: "Trending", title: "When Beyonce", bottom: "25.4k tweets" }
      ],
      friends: [
        { src: "elon.jpg", name: "Elon Musk", handle: "@teslaBoy" },
        { src: "monk.jpg", name: "Adrian Monk", handle: "@detective:)" },
        { src: "kevin.jpg", name: "Kevin Hart", handle: "@miniRock" }
      ]
    };
  },
  components: {}
};
</script>
