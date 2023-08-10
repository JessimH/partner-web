<template>
  <div class="border-l min-h-[100vh]" :class="borderColorClasses">
    <div class="sticky top-0 p-4 bg-white/80 backdrop-blur-md dark:bg-black/80">
      <h2 class="text-xl font-bold text-gray-800 dark:text-gray-100">
        {{ props.title }}
      </h2>
    </div>
    <div
      v-if="props.loading"
      class="flex items-center justify-center p-4 border-b"
      :class="borderColorClasses"
    >
      <!-- TODO: REPLACE BY SKELETONS -->
      <UISpinner>loading</UISpinner>
    </div>
    <div v-else>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const { borderColorClasses } = useTailwindConfig();

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  loading: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<style scoped></style>
