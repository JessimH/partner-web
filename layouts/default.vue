<template>
  <div :class="{ dark: darkMode }">
    <div class="bg-white dark:bg-dim-900 min-h-full">
      <div
        class="grid grid-cols-12 gap-2 mx-auto xs:px-2 sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5"
      >
        <!-- LEFT SIDE BAR -->

        <div class="xs:col-span-1 xl:col-span-2">
          <div class="sticky top-0">
            <NavigationLeft />
          </div>
        </div>
        <!-- Main content -->
        <slot />
        <!-- RIGHT SIDE BAR -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const darkMode = ref(false);
</script>
