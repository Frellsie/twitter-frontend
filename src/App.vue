<template>
  <div id="app" class="flex container h-screen w-full">
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<style lang="scss" scoped>
  @import '~font-awesome/css/font-awesome.css';
</style>