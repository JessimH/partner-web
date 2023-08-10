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
      <NavigationLinks active>
        <template #icon>
          <HomeIcon />
        </template>
        <template #text> Home </template>
      </NavigationLinks>
      <NavigationLinks>
        <template #icon>
          <MagnifyingGlassIcon />
        </template>
        <template #text> Explore </template>
      </NavigationLinks>
      <NavigationLinks>
        <template #icon>
          <ChatBubbleLeftRightIcon />
        </template>
        <template #text> Messages </template>
      </NavigationLinks>
      <NavigationLinks>
        <template #icon>
          <MapPinIcon />
        </template>
        <template #text> Map </template>
      </NavigationLinks>
      <NavigationLinks>
        <template #icon>
          <BellIcon />
        </template>
        <template #text> Notification </template>
      </NavigationLinks>
      <NavigationLinks>
        <template #icon>
          <Cog6ToothIcon />
        </template>
        <template #text> Settings </template>
      </NavigationLinks>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  HomeIcon,
  ChatBubbleLeftRightIcon,
  BellIcon,
  MapPinIcon,
  MagnifyingGlassIcon,
  Cog6ToothIcon,
} from "@heroicons/vue/24/outline";

const { defaultTransition } = useTailwindConfig();
</script>

<style scoped></style>
