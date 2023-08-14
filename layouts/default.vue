<template>
  <div :class="{ dark: darkMode }">
    <div class="bg-white dark:bg-black min-h-full">
      <LoadingPage v-if="isAuthLoading" />
      <div v-else-if="user && role === 'ADMIN'">
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
      <div v-else-if="user && role === 'USER'">
        <div class="grid grid-cols-12 xs:px-2 sm:px-6 lg:px-8 lg:gap-5">
          <!-- LEFT SIDE BAR -->
          <div class="xs-col-span-1 xl:col-span-2">
            <div class="sticky top-0">
              <NavigationAdminLeft />
            </div>
          </div>
          <!-- Main content -->
          <div class="col-span-11 md:col-span-11 xl:col-span-10">
            <AuthAdminPage />
          </div>
        </div>
      </div>
      <AuthPage v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
const darkMode = ref(false);
const { useAuthUser, initAuth, useAuthLoading, useAuthRole } = useAuth();
const isAuthLoading = useAuthLoading();
const user = useAuthUser();
const role = useAuthRole();

console.log("role", role);

onBeforeMount(() => {
  initAuth();
});
</script>
