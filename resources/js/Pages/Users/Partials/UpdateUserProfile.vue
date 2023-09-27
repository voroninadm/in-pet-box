<script setup>
import InputError from '@/components/InputError.vue';
import InputLabel from '@/components/InputLabel.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
import TextInput from '@/components/TextInput.vue';
import { Link, useForm, usePage } from '@inertiajs/vue3';
import Checkbox from '@/components/Checkbox.vue';


const props = defineProps(['user']);

const form = useForm({
    user_id: props.user.id,
    name: props.user.name,
    email: props.user.email,
    is_admin: Boolean(props.user.is_admin)
});
</script>

<template>
    <section>
        <header>
            <h2 class="text-lg font-medium text-gray-900">Вы в профиле пользователя {{ props.user.name}}</h2>

            <p class="mt-1 text-sm text-gray-600">
               Как администратор Вы имеете право на обновление профиля, адреса электронной почты и выдачу прав администратора
            </p>
            <p class="mt-1 text-sm text-gray-600">
               Будьте внимательны и не вносите изменения без необходимости!
            </p>
        </header>

        <form @submit.prevent="form.patch(route('users.update-profile'))" class="mt-6 space-y-6">
            <div>
                <InputLabel for="name" value="Имя" />

                <TextInput
                    id="name"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.name"
                    required
                    autofocus
                    autocomplete="name"
                />

                <InputError class="mt-2" :message="form.errors.name" />
            </div>

            <div>
                <InputLabel for="email" value="Email" />

                <TextInput
                    id="email"
                    type="email"
                    class="mt-1 block w-full"
                    v-model="form.email"
                    required
                    autocomplete="username"
                />

                <InputError class="mt-2" :message="form.errors.email" />
            </div>

            <div class="mt-4 lg:w-1/5">
                <label>
                    <Checkbox name="is_admin" v-model:checked="form.is_admin"/>
                    <span class="ml-2 text-sm text-gray-600">С правами администратора</span>
                </label>
            </div>

            <div class="flex items-center gap-4">
                <PrimaryButton :disabled="form.processing">Сохранить</PrimaryButton>

                <Transition
                    enter-active-class="transition ease-in-out"
                    enter-from-class="opacity-0"
                    leave-active-class="transition ease-in-out"
                    leave-to-class="opacity-0"
                >
                    <p v-if="form.recentlySuccessful" class="text-sm text-gray-600">Сохранено.</p>
                </Transition>
            </div>
        </form>
    </section>
</template>
