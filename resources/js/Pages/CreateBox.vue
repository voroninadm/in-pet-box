<script setup>
import InputLabel from '@/components/InputLabel.vue';
import TextInput from '@/components/TextInput.vue';
import InputError from '@/components/InputError.vue';
import {useForm, router} from "@inertiajs/vue3";
import SaveButton from "@/components/buttons/SaveButton.vue";
import { Head } from '@inertiajs/vue3';


import {totalDaysHolding} from "@/common/constants";

console.log(import.meta.env.TOTAL_DAYS_HOLDING);

import {
    normalizeData,
    deadlineDate,
    // currentDate,
    isHoldingDateExpired,
} from "@/common/helpers";

const props = defineProps({
    lastAddedBox: {
        type: Object
    },
    cellId: {
        type: Number,
        required: true,
    }
});

const form = useForm({
    cell_id: props.cellId,
    customer:  "",
    product:  "",
    invoice:  "",
    date_add: new Date(),
});

const submit = () => {
    form.post(route('box.store'), {
        onFinish: () => {
            form.reset();
        },
        onSuccess: () => {
            form.reset();
        }
    });
}

const click = () => {
    form.customer = props.lastAddedBox.customer;
    form.product = props.lastAddedBox.product;
    form.invoice = props.lastAddedBox.invoice;
}

const goBackPage = () => {
    window.history.back()
}
</script>

<template>

    <Head title="Добавляем на хранение"/>

    <transition
        appear
        enter-active-class="animate__animated animate__slideInDown"
    >
        <section
            class="mx-auto product w-3/4 md:w-2/4 lg:w-1/3 xl:w-1/4 border drop-shadow-xl p-3 bg-slate-50 font-sans"
        >
            <span @click="goBackPage()" class="absolute w-full flex flex-row-reverse">
                <svg class="h-7 w-7 relative right-8 transition duration-300 text-gray-600 hover:text-gray-400 active:text-gray-400"
                     stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </span>

            <div class="product__image"></div>
            <h1 class="text-center text-lg text-gray-700">Добавляем продукт в ячейку №&nbsp;{{ form.cell_id }}</h1>
            <div class="flex justify-center underline">
            <button class="text-xs text-center text-gray-500" @click="click()">(или продолжить последний добавленный)</button>
            </div>
            <form class="flex flex-col" @submit.prevent="submit">
                <div class="flex flex-col my-3 gap-2">
                    <div>
                        <input-label for="invoice">Накладная</input-label>

                        <TextInput
                            id="invoice"
                            type="text"
                            class="mt-1 block w-full"
                            v-model="form.invoice"
                            required
                        />

                        <InputError class="mt-2" :message="form.errors.invoice"/>
                    </div>
                    <div>
                        <input-label for="customer">Заказчик</input-label>

                        <TextInput
                            id="customer"
                            type="text"
                            class="mt-1 block w-full"
                            v-model="form.customer"
                            required
                        />
                        <InputError class="mt-2" :message="form.errors.customer"/>
                    </div>

                    <div>
                        <input-label for="product">Заказ</input-label>

                        <TextInput
                            id="product"
                            type="text"
                            class="mt-1 block w-full"
                            v-model="form.product"
                            required
                        />
                        <InputError class="mt-2" :message="form.errors.product"/>
                    </div>

                    <label class="flex justify-between text-sm md:text-base font-medium text-sm text-gray-700">
                        Начало хранения
                        <span>{{  normalizeData(form.date_add) }}</span>
                    </label>
                    <label class="flex justify-between text-sm md:text-base font-medium text-sm text-gray-700">
                        Окончание хранения
                        <span>{{ deadlineDate(form.date_add) }}</span>
                    </label>
                    <small
                        class="text-center my-1"
                        :class="
              isHoldingDateExpired(form.date_add)
                ? 'text-rose-600 transition animate-pulse'
                : 'text-green-600'
            "
                    >Товар хранится на складе не более
                        {{ totalDaysHolding }} дней!</small
                    >
                </div>
                <save-button />
            </form>
        </section>
<!--        <section v-else class="flex flex-col mx-auto product w-3/4 md:w-2/4 lg:w-1/3 xl:w-1/4 border drop-shadow-xl p-3 bg-slate-50 font-sans"-->
<!--        >-->
<!--            <div class="no_place_image"></div>-->
<!--           <p class="text-center text-lg">Упс!..</p>-->
<!--           <p class="text-center text-sm mt-4">Что-то пошло не так...</p>-->
<!--            <div class="flex justify-center mt-5">-->
<!--            <PrimaryButton @click="router.visit('/main')">Ок, вернемся на главную</PrimaryButton>-->
<!--            </div>-->
<!--        </section>-->
    </transition>
</template>

<style scoped>
.product__image {
    width: 200px;
    height: 200px;
    background: url("@assets/img/box-adding.webp") 50% 50% no-repeat;
    background-size: contain;
    margin: auto;
}

.no_place_image {
    width: 200px;
    height: 200px;
    background: url("@assets/img/box-error.webp") 50% 50% no-repeat;
    background-size: contain;
    margin: auto;
}
</style>
