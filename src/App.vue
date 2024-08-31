<template>
  <div id="app" class="bg-gray-100 font-sans">
    <TheHeader />
    <div class="container mx-auto px-4 py-6">
      <div class="flex flex-col md:flex-row mt-6 md:mt-8">
        <TheSidebar />
        <TheMain />
        <router-view class="flex-1 md:ml-4 mt-6 md:mt-0" />
        <TheLogin />
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheSidebar from './components/TheSidebar.vue';
import TheMain from './components/TheMain.vue';




export default {
  name: 'App',
  components: {
    TheHeader,
    TheSidebar,
    TheMain
  }
}

</script>
<!-- 
<style>
@import '~@/assets/tailwind.css';
</style> -->
