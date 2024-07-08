<template>
    <UModal v-model="store.login">
        <UCard class="pb-8">
            <div class="flex items-center justify-end">
                <UButton
                    color="gray"
                    variant="ghost"
                    icon="i-heroicons-x-mark-20-solid"
                    class="-my-1"
                    @click="close"
                />
            </div>
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
                ref="form"
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
                    :disabled="status == 'pending'"
                    class="uppercase w-full text-xs px-3 py-2.5 rounded border font-semibold bg-default text-white"
                >
                    <span v-if="status == 'pending'"> Please wait...</span>
                    <span v-else>Log in</span>
                </button>

                <div class="flex justify-between">
                    <div>
                        <span class="text-blue-600 text-sm"
                            >Forgot password?</span
                        >
                    </div>
                    <div>
                        <button
                            type="button"
                            @click="store.showRegister"
                            class="text-blue-600 text-sm"
                        >
                            Don't have an account? Sign up
                        </button>
                    </div>
                </div>
            </UForm>
        </UCard>
    </UModal>
</template>

<script setup lang="ts">
import { z } from 'zod';

const store = useAuthPages();

const schema = z.object({
    email: z.string().email('Invalid email'),
    password: z.string().min(8, 'Must be at least 8 characters'),
});

const state = reactive({
    email: '',
    password: '',
});

const close = () => {
    store.login = false;
};

const form = ref();

const { data, status, error, execute }: any = useFetch(
    'https://pet-shop.buckhill.com.hr/api/v1/user/login',
    {
        immediate: false,
        watch: false,
        method: 'POST',
        body: state,
    }
);

const toast = useToast();

const onSubmit = async () => {
    await execute();
    if (status.value == 'error') {
        toast.add({
            title: 'Error',
            color: 'rose',
            description: error.value.data.error,
            id: 'error-toast',
        });

        form.value.setErrors([
            {
                path: 'email',
                message: 'Invalid email or password',
            },
        ]);

        state.password = '';
    }
};
</script>
