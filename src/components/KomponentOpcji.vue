<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{
  idKolumny: number;
}>();
</script>

<template>
  <div class="przyciemniaczOpcji">
    <div class="kontenerOpcji"></div>
  </div>
</template>

<style lang="scss">
.przyciemniaczOpcji {
  display: flex;
  width: 100vw;
  height: 100vh;
}
</style>
