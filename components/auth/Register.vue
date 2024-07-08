<template>
    <UModal v-model="store.register">
        <UCard class="pb-8 pt-4">
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
            <div class="flex justify-center mt-2 mb-4">
                <h2 class="font-medium">Sign up</h2>
            </div>
            <UForm
                :schema="schema"
                :state="state"
                ref="form"
                class="space-y-4 px-8"
                @submit="onSubmit"
            >
                <div class="flex space-x-2">
                    <UFormGroup name="first_name">
                        <UInput
                            v-model="state.first_name"
                            placeholder="First Name *"
                            size="lg"
                        />
                    </UFormGroup>
                    <UFormGroup name="first_name">
                        <UInput
                            v-model="state.last_name"
                            placeholder="Last Name *"
                            size="lg"
                        />
                    </UFormGroup>
                </div>
                <UFormGroup name="email">
                    <UInput
                        v-model="state.email"
                        placeholder="Email Address *"
                        size="lg"
                    />
                </UFormGroup>
                <UFormGroup name="address">
                    <UInput
                        v-model="state.address"
                        placeholder="Address *"
                        size="lg"
                    />
                </UFormGroup>
                <UFormGroup name="phone_number">
                    <UInput
                        v-model="state.phone_number"
                        placeholder="Phone number *"
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

                <UFormGroup name="password_confirmation" class="mt-4">
                    <UInput
                        v-model="state.password_confirmation"
                        size="lg"
                        class="mt-4"
                        placeholder="Confirm Password *"
                        type="password"
                    />
                </UFormGroup>

                <UFormGroup name="use_as_shipping">
                    <UCheckbox
                        v-model="state.is_marketing"
                        label="I want to receive inspiration, marketing promotions and updates via email"
                    />
                </UFormGroup>

                <button
                    type="submit"
                    :disabled="status == 'pending'"
                    class="uppercase w-full text-xs px-3 py-2.5 rounded border font-semibold bg-default text-white"
                >
                    <span v-if="status == 'pending'"> Please wait...</span>
                    <span v-else>Sign up</span>
                </button>

                <div class="flex justify-center">
                    <div>
                        <span class="text-blue-600 text-sm"
                            >Already have an account? Log in
                        </span>
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
    first_name: z.string().nonempty(),
    last_name: z.string().nonempty(),
    address: z.string().nonempty(),
    email: z.string().email('Invalid email'),
    password: z.string().min(8, 'Must be at least 8 characters'),
    password_confirmation: z.string().min(8, 'Must be at least 8 characters'),
});

const state = reactive({
    first_name: '',
    last_name: '',
    email: '',
    address: '',
    phone_number: '',
    password: '',
    password_confirmation: '',
    is_marketing: false,
});

const form = ref();
const store = useAuthPages();
const { authenticate, setUser } = useAuthStore();

const { data, status, error, execute }: any = useFetch(
    'https://pet-shop.buckhill.com.hr/api/v1/user/create',
    {
        immediate: false,
        watch: false,
        method: 'POST',
        body: state,
    }
);

const close = () => {
    store.register = false;
};

const onSubmit = async () => {
    await execute();

    if (status.value == 'error') {
        const errors = [];

        for (const key in error.value.data.errors) {
            errors.push({
                path: key,
                message: error.value.data.errors[key][0],
            });
        }

        form.value.setErrors(errors);
        state.password = '';
    }

    if (status.value == 'success') {
        store.register = false;
        setUser(data.value?.data);
        authenticate(data.value?.data?.token);
    }
};
</script>
