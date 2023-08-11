<script setup>
import {ref} from 'vue';
import {useForm} from '@inertiajs/vue3';
import {minBoxImage, maxBoxImage} from "@/common/constants.js";
import Checkbox from '@/components/Checkbox.vue';
import InputError from '@/components/InputError.vue';
import InputLabel from '@/components/InputLabel.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
import TextInput from '@/components/TextInput.vue';

const emailInput = ref(null);
let modalImg = ref(getModalImg());

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('auth.login'), {
        onSuccess: () => {
            form.reset();
        },
    });
}

// get random number and add its class to modal image
function getModalImg () {
   return Math.floor(Math.random() * (maxBoxImage - minBoxImage + 1)) + minBoxImage;
}
</script>

<script>
import GuestLayout from '@/Layouts/GuestLayout.vue';

export default {
    layout: GuestLayout
}
</script>

<template>
    <div class="m-4 bg-white rounded-lg p-2">
        <form class="flex flex-col" @submit.prevent="submit">
            <div >
                <div
                    class="login_img"
                    :class="`login_img__${modalImg}`"
                />
                <div>
                    <InputLabel for="email" value="Email"/>

                    <TextInput
                        id="email"
                        type="email"
                        class="mt-1 block w-full"
                        ref="emailInput"
                        v-model="form.email"
                        required
                        autofocus
                        @change="form.errors.email = ''"
                    />

                    <InputError :message="form.errors.email"/>
                </div>

                <div class="mt-3">
                    <InputLabel for="password" value="Пароль"/>

                    <TextInput
                        id="password"
                        type="password"
                        class="mt-1 block w-full"
                        v-model="form.password"
                        required
                        @change="form.errors.password = ''; form.errors.email = ''"
                    />

                    <InputError class="mt-2" :message="form.errors.password"/>
                </div>

                <div class="flex justify-center mt-2">
                    <label class="flex items-center">
                        <Checkbox name="remember" v-model:checked="form.remember"/>
                        <span class="ml-2 text-sm text-gray-600">Запомнить меня</span>
                    </label>
                </div>

                <div class="flex justify-center mt-2">
                    <PrimaryButton class="justify-center w-1/4"
                                   :class="{ 'opacity-25': form.processing }"
                                   :disabled="form.processing">
                        Войти
                    </PrimaryButton>
                </div>
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped>
.login_img {
    width: 250px;
    height: 200px;
    margin: auto;

&__1 {
     background: url("@assets/img/box-1.webp") 50% 50% no-repeat;
     background-size: contain;
 }

&__2 {
     background: url("@assets/img/box-2.webp") 50% 50% no-repeat;
     background-size: contain;
 }

&__3 {
     background: url("@assets/img/box-3.webp") 50% 50% no-repeat;
     background-size: contain;
 }

&__4 {
     background: url("@assets/img/box-4.webp") 50% 50% no-repeat;
     background-size: contain;
 }
}

.adding_icon{
    width: 25px;
    height: 25px;
    margin: 0 20px;
}
</style>
