<script setup lang="ts">
  import { ref } from 'vue';
  const emit = defineEmits<{
    (e: 'getImages', files: Array<String>): void
  }>()
  function dragover(event: Event) {
    event.preventDefault();
    if (!event.currentTarget.classList.contains('bg-sky-blue')) {
      event.currentTarget.classList.remove('bg-gray');
      event.currentTarget.classList.add('bg-sky-blue');
    }
  }
  function dragleave(event: Event) {
    event.preventDefault();
    event.currentTarget.classList.remove('bg-sky-blue');
    event.currentTarget.classList.add('bg-grap');
  }

  const previewImage = (img: Blob) => {
    return URL.createObjectURL(img)
  }

  interface HTMLInputEvent extends Event {
    target: HTMLInputElement & EventTarget
  }

  const files = ref([])
  function drop(event: Event) {
    event.preventDefault();
    const data = (event as DragEvent).dataTransfer.files;
    let count = 0;
    for (const el of data) {
      files.value.push(el)
      count += 1;
    }

    if (count == data.length) {
      emit('getImages', files.value)
    }

    event.currentTarget.classList.add('bg-gray');
    event.currentTarget.classList.remove('bg-sky-blue');
  }
  function onChange(event: Event) {
    for (const el of (event as HTMLInputEvent).target.files) {
      files.value.push(el)
    }
    emit('files', files.value)
  }

  const removeImage = (img: String) => {
    const index = files.value.indexOf(img);
    files.value.splice(index, 1);
    emit('files', files.value)
  }
</script>

<template>
  <div id="wrapper">
    <div class="uploader-box" @dragover="dragover" @dragleave="dragleave" @drop="drop">
      <label for="file" class="label">
        Drap & Drop File OR <span class="choose-text"> Choose </span>
      </label>
      <input
        type="file"
        @change="onChange"
        class="fields[assetsFieldHandle][]"
        accept="image/*"
        id="file"
        hidden
        multiple
      >
    </div>
    <div class="display-area">
      <div class="img-container"
        v-for="(file, index) in files"
        :key="index"
      >
        <img
          :src="previewImage(file)"
          alt=""
          class="file-input"
        >
        <div class="icon" role="button" @click="removeImage(file)">
          <img src="../assets/dtl-btn.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#wrapper {
  /* display: grid; */
  align-items: center;
  justify-content: center;
}
.uploader-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 150px;
  background-color: #c5c5c5;
  border: 1px solid black;
  border-radius: 15px;
}

.display-area{
  display: grid;
  padding: 16px;
}

@media only screen and (max-width: 1024px){
  .display-area{
    grid-template-columns: repeat(7, 1fr);
  }
}
@media only screen and (min-width: 1024px){
  .display-area{
    grid-template-columns: repeat(7, 1fr);
  }
}

@media only screen and (max-width: 768px) {
  .display-area{
    grid-template-columns: repeat(5, 1fr);
  }
}

@media only screen and (max-width: 480px){
  .uploader-box{
    width: 100%;
  }
  .display-area{
    grid-template-columns: repeat(3, 1fr);
  }
}
.choose-text {
  text-decoration: underline;
  cursor: pointer;
}

.bg-gray{
  background-color: #c5c5c5;
}

.bg-sky-blue{
  background-color: #7ec8f3;
}

.img-container{
  float: left;
  margin: 5px;
  max-width: 200px;
  position: relative;
}

.file-input{
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
}

.img-container div{
  position: absolute;
  top: 0;
  right: 0;
  display: block;
}

.icon img {
  width: 24px;
  cursor: pointer;
}
</style>