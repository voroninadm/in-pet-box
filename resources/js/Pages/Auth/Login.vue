<script setup>
import Checkbox from '@/components/Checkbox.vue';
import InputError from '@/components/InputError.vue';
import InputLabel from '@/components/InputLabel.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
import TextInput from '@/components/TextInput.vue';
import {Head, Link, useForm} from '@inertiajs/vue3';

defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <Head title="Log in"/>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 lg:w-6/12 space-y-6">
            <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">

                <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
                    {{ status }}
                </div>

                <form @submit.prevent="submit">
                    <div>
                        <InputLabel for="email" value="Email"/>

                        <TextInput
                            id="email"
                            type="email"
                            class="mt-1 block w-full"
                            v-model="form.email"
                            required
                            autofocus
                            autocomplete="username"
                        />

                        <InputError class="mt-2" :message="form.errors.email"/>
                    </div>

                    <div class="mt-4">
                        <InputLabel for="password" value="Password"/>

                        <TextInput
                            id="password"
                            type="password"
                            class="mt-1 block w-full"
                            v-model="form.password"
                            required
                            autocomplete="current-password"
                        />

                        <InputError class="mt-2" :message="form.errors.password"/>
                    </div>

                    <div class="block mt-4">
                        <label class="flex items-center">
                            <Checkbox name="remember" v-model:checked="form.remember"/>
                            <span class="ml-2 text-sm text-gray-600">Запомнить меня</span>
                        </label>
                    </div>

                    <div class="flex items-center justify-end mt-4">
<!--                        <Link-->
<!--                            v-if="canResetPassword"-->
<!--                            :href="route('password.request')"-->
<!--                            class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"-->
<!--                        >-->
<!--                            Забыли пароль?-->
<!--                        </Link>-->

                        <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }"
                                       :disabled="form.processing">
                            Войти
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
