<script setup>
import InputLabel from '@/components/InputLabel.vue';
import TextInput from '@/components/TextInput.vue';
import {useForm} from "@inertiajs/vue3";

import {totalDaysHolding} from "@/common/constants";
import {
    normalizeData,
    deadlineDate,
    currentDate,
    isHoldingDateExpired,
} from "@/common/helpers";

const props = defineProps({
    box: {
        type: Object,
        default: null,
    },
});

const form = useForm({
    customer: "",
    invoice: "",
    date_add: currentDate,
});

const submit = () => {
    form.post(route('main'), {
        onFinish: () => {
            form.reset();
        },
        onSuccess: () => {
            form.reset();
        }
    });
}
</script>

<template>
    <transition
        appear
        enter-active-class="animate__animated animate__slideInDown"
    >
        <section
            class="product w-3/4 md:w-2/4 lg:w-1/3 xl:w-1/4 border drop-shadow-xl p-3 bg-slate-50 font-sans"
        >
            <div class="product__image"></div>
            <h1 class="text-center text-lg text-gray-700">Карточка товара</h1>
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
                    </div>

                    <label class="flex justify-between text-sm md:text-base font-medium text-sm text-gray-700">
                        Начало хранения
                        <span>{{ normalizeData(form.date_add) }}</span>
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
                <slot name="buttons"/>
            </form>
        </section>
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
</style>
