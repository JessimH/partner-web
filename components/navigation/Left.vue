<template>
  <div class="h-screen flex flex-col">
    <div
      class="p-2 my-2 w-min rounded-full hover:bg-blue-50 dark:hover:bg-white/20"
      :class="defaultTransition"
    >
      <NuxtLink to="/">
        <div class="w-8 h-8">
          <Logo />
        </div>
      </NuxtLink>
    </div>

    <div class="mt-2 flex flex-col gap-1">
      <NavigationTab active>
        <template #icon>
          <HomeIcon />
        </template>
        <template #text> Home </template>
      </NavigationTab>
      <NavigationTab>
        <template #icon>
          <HashtagIcon />
        </template>
        <template #text> Explore </template>
      </NavigationTab>
      <NavigationTab>
        <template #icon>
          <BellIcon />
        </template>
        <template #text> Notification </template>
      </NavigationTab>
      <NavigationTab>
        <template #icon>
          <InboxIcon />
        </template>
        <template #text> Messages </template>
      </NavigationTab>
      <NavigationTab>
        <template #icon>
          <BookmarkIcon />
        </template>
        <template #text> Map </template>
      </NavigationTab>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  HomeIcon,
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  DocumentTextIcon,
  UserIcon,
} from "@heroicons/vue/24/outline";

const { defaultTransition } = useTailwindConfig();
</script>

<style scoped></style>
