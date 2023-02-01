<script setup lang="ts">
  import { ref } from 'vue';
  // import FileUploader from './components/FileUploader.vue'
  function test(t: any){
    files.value = t;
  }
  const files = ref()

  const previewImage = (img: Blob) => {
    return URL.createObjectURL(img)
  }
</script>

<template>
  <main>
      <images-dragger @getImages="test" customClass="custom-class"/>

      <div v-for="(file, i) in files" :key="i">
        <img :src="previewImage(file)" alt="">
      </div>
  </main>
</template>

<style>
  .custom-class {
    background-color: red !important;
    border: 2px solid yellow !important;
    font-size: 1.5rem;
  }
</style>
