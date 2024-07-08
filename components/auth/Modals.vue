<template>
    <AuthLogin :show="login" />
    <AuthRegister :show="register" />
</template>

<script setup lang="ts">
const { login, register } = useAuthPages();
</script>
