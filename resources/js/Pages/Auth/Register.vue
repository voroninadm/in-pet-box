<script setup>
import InputError from '@/components/InputError.vue';
import InputLabel from '@/components/InputLabel.vue';
import Checkbox from '@/components/Checkbox.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
import TextInput from '@/components/TextInput.vue';
import {useForm} from '@inertiajs/vue3';

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    is_admin: false
});

const submit = () => {
    form.post(route('users.register'), {
        onSuccess: () => form.reset(),
        onFinish: () => form.reset(),
    });
};
</script>

<template>
    <header>
        <h2 class="text-lg font-medium text-gray-900">Создать нового пользователя</h2>

        <p class="mt-1 text-sm text-gray-600">
            Создавая пользователя убедитесь в правильности e-mail и подберите безопасный пароль (не менее 8 символов)
        </p>
    </header>
    <form @submit.prevent="submit" class="mt-6 space-y-6">
        <div>
            <InputLabel for="name" value="Имя"/>

            <TextInput
                id="name"
                type="text"
                class="mt-1 block w-full"
                v-model="form.name"
                required
                autofocus
                autocomplete="name"
            />

            <InputError class="mt-2" :message="form.errors.name"/>
        </div>

        <div class="mt-4">
            <InputLabel for="email" value="Email"/>

            <TextInput
                id="email"
                type="email"
                class="mt-1 block w-full"
                v-model="form.email"
                required
                autocomplete="username"
            />

            <InputError class="mt-2" :message="form.errors.email"/>
        </div>

        <div class="lg:flex lg:justify-between lg:items-center">
            <div class="mt-4 lg:w-2/6 lg:text-center items-center">
                <InputLabel for="password" value="Пароль"/>

                <TextInput
                    id="password"
                    type="password"
                    class="mt-1 block w-full"
                    v-model="form.password"
                    ref="passwordInput"
                    required
                    autocomplete="new-password"
                />

                <InputError class="mt-2" :message="form.errors.password"/>
            </div>

            <div class="mt-4 lg:w-2/6 lg:text-center">
                <InputLabel for="password_confirmation" value="Подтверждение пароля"/>

                <TextInput
                    id="password_confirmation"
                    type="password"
                    class="mt-1 block w-full"
                    v-model="form.password_confirmation"
                    ref="passwordConfirmation"
                    required
                    autocomplete="new-password"
                />

                <InputError class="mt-2" :message="form.errors.password_confirmation"/>
            </div>

            <div class="mt-4 lg:w-1/5 lg:text-center">
                <label>
                    <Checkbox name="is_admin" v-model:checked="form.is_admin"/>
                    <span class="ml-2 text-sm text-gray-600">С правами администратора</span>
                </label>
            </div>

        </div>
        <div class="flex items-center sm:justify-start mt-4">
            <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Сохранить
            </PrimaryButton>
            <Transition
                enter-active-class="transition ease-in-out"
                enter-from-class="opacity-0"
                leave-active-class="transition ease-in-out"
                leave-to-class="opacity-0"
                class="duration-500"
            >
                <p v-if="form.recentlySuccessful" class="ml-5 text-sm text-gray-600">Сохранено.</p>
            </Transition>
        </div>
    </form>
</template>
