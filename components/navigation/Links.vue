<template>
  <NuxtLink
    to="#"
    class="flex flex-row gap-3 items-center p-3 w-min hover:bg-gray-200 rounded-full dark:hover:bg-dim-200 text-black dark:text-white"
    :class="defaultTransition"
  >
    <div class="w-6 h-6 text-dark">
      <slot name="icon" />
    </div>
    <div class="text-xl hidden xl:block" :class="textClasses">
      <slot name="text" />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const { defaultTransition } = useTailwindConfig();

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});

const textClasses = computed(() => {
  return props.active ? "font-semibold" : "font-normal";
});
</script>

<style scoped></style>
