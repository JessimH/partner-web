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
          <UserGroupIcon />
        </template>
        <template #text> Users </template>
      </NavigationLinks>
      <NavigationLinks>
        <template #icon>
          <BoltIcon />
        </template>
        <template #text> SportTypes </template>
      </NavigationLinks>
      <NavigationLinks>
        <template #icon>
          <CircleStackIcon />
        </template>
        <template #text> Sessions </template>
      </NavigationLinks>
      <NavigationLinks>
        <template #icon>
          <ChatBubbleLeftRightIcon />
        </template>
        <template #text> Comments </template>
      </NavigationLinks>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  CircleStackIcon,
  BoltIcon,
} from "@heroicons/vue/24/outline";

const { defaultTransition } = useTailwindConfig();
</script>

<style scoped></style>
