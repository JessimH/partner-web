<template>
  <div :class="{ dark: darkMode }">
    <div class="bg-white dark:bg-black min-h-full">
      <div v-if="user">
        <div class="grid grid-cols-12 xs:px-2 sm:px-6 lg:px-8 lg:gap-5">
          <!-- LEFT SIDE BAR -->
          <div class="xs-col-span-1 xl:col-span-2">
            <div class="sticky top-0">
              <NavigationLeft />
            </div>
          </div>
          <!-- Main content -->
          <div class="col-span-11 md:col-span-11 xl:col-span-10">
            <slot />
          </div>
        </div>
      </div>
      <AuthPage v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
const darkMode = ref(false);
const { useAuthUser, initAuth } = useAuth();
const user = useAuthUser();

onBeforeMount(() => {
  initAuth();
});
</script>
