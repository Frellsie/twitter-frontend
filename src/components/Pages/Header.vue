<template>
  <!--header-->
  <div class="flex container h-screen w-full">
    <div class="md:block hidden py-2 pb-2 px-6 ml-40 relative">
      <button
        class="h-8 w-12 hover:bg-lightblue text-3xl rounded-full text-blue"
      >
        <i class="fab fa-twitter"></i>
      </button>
    </div>
    <div class="pt-2 relative">
      <input
        class="pl-20 pr-40 rounded-full w-full p-2 bg-lighter text-sm mb-4"
        placeholder="Search Twitter"
      />
      <i
        class="fas fa-search absolute left-0 top-0 pl-10 mt-5 text-sm text-light"
      ></i>
    </div>
    <div class="flex pt-2">
      <button
        type="submit"
        class="h-9  px-6 ml-20 bg-transparent hover:bg-blue text-darkblue font-semibold hover:text-white border border-blue hover:border-transparent rounded-full"
      >
        Log in
      </button>
    </div>
    <div class="flex pt-2">
      <button
        type="submit"
        class="h-9  px-5 ml-2 bg-transparent hover:bg-blue text-darkblue font-semibold hover:text-white border border-blue hover:border-transparent rounded-full"
      >
        Sign Up
      </button>
    </div>
    <div class="pt-3 ml-5">
      <button>
        <i class="fas fa-ellipsis-h text-darkblue h-8"></i>
      </button>
    </div>
    <Explore />
  </div>
</template>

<script>
import Explore from "./Explore";
export default {
  name: "Header",
  components: {
    Explore
  }
};
</script>
