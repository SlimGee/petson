<template>
    <div>
        <AuthLogin :show="login" />
        <AuthRegister :show="register" />
        <AuthProfile v-if="authenticated" :show="profile" />
    </div>
</template>

<script setup lang="ts">
  import {storeToRefs} from 'pinia'

const { login, register, profile } = storeToRefs(useAuthPages());
const {authenticated} = storeToRefs(useAuthStore())
</script>
