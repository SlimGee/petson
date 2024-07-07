<template>
    <UModal>
        <UCard class="pb-8 pt-4">
            <div class="flex">
                <div
                    class="mx-auto flex flex-col justify-center items-center p-3 bg-default text-white rounded-full text-center"
                >
                    <Logo />
                    <span class="font-semibold">Petson.</span>
                </div>
            </div>
            <div class="flex justify-center mt-2">
                <h2 class="font-medium">Log in</h2>
            </div>
            <UForm
                :schema="schema"
                :state="state"
                class="space-y-4 px-6"
                @submit="onSubmit"
            >
                <UFormGroup name="email">
                    <UInput
                        v-model="state.email"
                        placeholder="Email Address *"
                        size="lg"
                    />
                </UFormGroup>

                <UFormGroup name="password" class="mt-4">
                    <UInput
                        v-model="state.password"
                        size="lg"
                        class="mt-4"
                        placeholder="Password *"
                        type="password"
                    />
                </UFormGroup>

                <button
                    class="uppercase w-full text-xs px-3 py-2.5 rounded border font-semibold bg-default text-white"
                >
                    Log in
                </button>

                <div class="flex justify-between">
                    <div>
                        <span class="text-blue-600 text-sm"
                            >Forgot password?</span
                        >
                    </div>
                    <div>
                        <span class="text-blue-600 text-sm"
                            >Don't have an account?
                        </span>
                        <NuxtLink
                            to="/auth/register"
                            class="text-blue-600 text-sm"
                            >Sign up</NuxtLink
                        >
                    </div>
                </div>
            </UForm>
        </UCard>
    </UModal>
</template>

<script setup lang="ts">
import { z } from 'zod';
import type { FormSubmitEvent } from '#ui/types';

const schema = z.object({
    email: z.string().email('Invalid email'),
    password: z.string().min(8, 'Must be at least 8 characters'),
});

type Schema = z.output<typeof schema>;

const state = reactive({
    email: '',
    password: '',
});
const { authenticateUser } = useAuthStore();

async function onSubmit(event: FormSubmitEvent<Schema>) {
    // Do something with data
    authenticateUser(state);
}
</script>
