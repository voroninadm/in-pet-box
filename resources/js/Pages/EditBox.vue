<script setup>
import InputLabel from '@/components/InputLabel.vue';
import TextInput from '@/components/TextInput.vue';
import InputError from '@/components/InputError.vue';
import {router, useForm} from "@inertiajs/vue3";
import SaveButton from "@/components/buttons/SaveButton.vue";
import DeleteButton from "@/components/buttons/DeleteButton.vue";
import Modal from "@/components/Modal.vue";


import {totalDaysHolding} from "@/common/constants";
import {
    normalizeData,
    deadlineDate,
    currentDate,
    isHoldingDateExpired,
} from "@/common/helpers";

import {ref} from "vue";

const props = defineProps({
    box: {
        type: Object,
        required: true,
    },
});

const form = useForm({
    cell_id: props.box.cell_id,
    customer: props.box['customer'],
    product: props.box['product'],
    invoice: props.box['invoice'],
    date_add: props.box['created_at'],
});

let isModalOpen = ref(false);

const openModal = () => {
    isModalOpen.value = true;
}

const closeModal = () => {
    isModalOpen.value = false;
}

</script>

<template>
    <transition
        appear
        enter-active-class="animate__animated animate__slideInDown"
    >
        <section
            class="mx-auto product w-3/4 md:w-2/4 lg:w-1/3 xl:w-1/4 border drop-shadow-xl p-3 bg-slate-50 font-sans"
        >
            <div class="product__image"></div>
            <h1 class="text-center text-lg text-gray-700">Изменение продукта в ячейке № {{ form.cell_id }}</h1>
            <form class="flex flex-col" @submit.prevent="$event => form.patch(`/box/update/${props.box.id}`)">
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
                <div class="flex space-y-1">
                    <save-button/>
                    <delete-button @click="openModal()"/>
                </div>
            </form>
        </section>
    </transition>

    <Modal :show="isModalOpen" @close="closeModal">
        <div class="p-6 flex items-center m-auto">
            <p class="px-5 text-center">Я подтверждаю удаление выбранного продукта!</p>
            <delete-button @click="router.delete(`/box/destroy/${box.id}`)"/>
        </div>
    </Modal>
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
