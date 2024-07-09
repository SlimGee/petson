<template>
    <div>
        <AuthLogin :show="login" />
        <AuthRegister :show="register" />
        <AuthProfile :show="profile" />
    </div>
</template>

<script setup lang="ts">
const { login, register, profile } = useAuthPages();
</script>
