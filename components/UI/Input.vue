<template>
  <div>
    <label
      v-if="props.label"
      :for="props.name"
      class="block pl-3 ml-px text-sm font-medium text-gray-700"
      >{{ props.label }}</label
    >
    <input
      @input="(event) => emits('update:modelValue', event.target.value)"
      :name="props.name"
      :type="props.type"
      :value="props.modelValue"
      :placeholder="props.placeholder"
      class="block px-4 w-full border-gray-300 rounded-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    />
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: String,
    default: null,
  },
  label: {
    type: String,
    default: null,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: null,
  },
});
</script>

<style scoped></style>
