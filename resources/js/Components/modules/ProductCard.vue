<template>
  <transition
    appear
    enter-active-class="animate__animated animate__slideInDown"
  >
    <section
      class="product w-3/4 md:w-2/4 lg:w-1/3 xl:w-1/4 mt-5 border drop-shadow-xl p-3 bg-slate-50"
    >
      <div class="product__image"></div>
      <h1 class="text-center text-lg">Карточка товара</h1>
      <form action="#" class="flex flex-col">
        <div class="flex flex-col my-3 gap-2">
          <label class="flex justify-between text-sm md:text-base"
            >Накладная
            <input class="text-end border" :value="box.invoice" type="text" />
          </label>
          <label class="flex justify-between text-sm md:text-base"
            >Заказчик
            <input class="text-end border" :value="box.customer" type="text" />
          </label>
          <label class="flex justify-between text-sm md:text-base">
            Начало хранения
            <span>{{ normalizeData(box.date_add) }}</span>
          </label>
          <label class="flex justify-between text-sm md:text-base">
            Окончание хранения
            <span>{{ deadlineDate(box.date_add) }}</span>
          </label>
          <small
            class="text-center my-1"
            :class="
              isHoldingDateExpired(box.date_add)
                ? 'text-rose-600 transition animate-pulse'
                : 'text-green-600'
            "
            >Товар хранится на складе не более
            {{ totalDaysHolding }} дней!</small
          >
        </div>
        <slot name="buttons" />
      </form>
    </section>
  </transition>
</template>

<script setup>
import { totalDaysHolding } from "@/common/constants";
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

const createNewBox = () => ({
  id: "",
  cell: "",
  customer: "",
  invoice: "",
  date_add: currentDate,
});

const box = props.box ? props.box : createNewBox();
</script>

<style scoped>
.product__image {
  width: 200px;
  height: 200px;
  background: url("@/assets/img/box-adding.webp") 50% 50% no-repeat;
  background-size: contain;
  margin: auto;
}
</style>
