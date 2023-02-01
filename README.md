
# Vue Images Dragger

with this simple component you can upload Images or Drag Images


## Features

- Simple to use
- choose images
- drag & drop images


## Installation

Install Vue Images Dragger with npm

```bash
  npm i vue3-images-dragger
```
    
## Setup

Import Images Dragger in main.ts

```bash
  import DraggerPlugin from 'vue3-images-dragger';
  import 'vue3-images-dragger/styles.css';
  app.use(DraggerPlugin)
```

Use as component

```bash
  import {ImagesDragger} from 'vue3-images-dragger';
  import 'vue3-images-dragger/styles.css';
```

##  Usage
```bash
<script setup lang="ts">
  import { ref } from 'vue';
  const images = ref()

  function getImages(data: any){
    images.value = data;
  }

  const previewImage = (img: Blob) => {
    return URL.createObjectURL(img)
  }
</script>

<template>
    <images-dragger @getImages="getImages"/>

    <div v-for="(img, i) in images" :key="i">
    <img :src="previewImage(img)" alt="">
    </div>
</template>

```

## 🔗 Github Repo
[![github](https://img.shields.io/badge/github-000000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/hbilal9/vue3-images-drager)


## Support Me

[![Coffee](https://img.shields.io/badge/Coffee-Buy%20me%20a%20coffee-yellow)](https://www.buymeacoffee.com/hbilal9)
