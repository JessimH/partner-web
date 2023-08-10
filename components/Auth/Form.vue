<template>
  <div>
    <div class="pt-5 space-y-6">
      <UIInput
        label="Username"
        name="username"
        placeholder="Tony Stark"
        v-model="data.username"
        value=""
      />
      <UIInput
        label="Password"
        name="password"
        type="password"
        v-model="data.password"
        value=""
      />

      <div>
        <button @click="handleLogin">Login</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const data = reactive({
  username: "",
  password: "",
  loading: false,
});

const handleLogin = async () => {
  const { login } = useAuth();
  data.loading = true;
  try {
    await login({
      username: data.username,
      password: data.password,
    });
  } catch (error) {
    console.log(error);
  } finally {
    data.loading = false;
  }
};
</script>

<style scoped></style>
