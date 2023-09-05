<script setup>
import BoxState from "@/components/BoxState.vue";

defineProps({
    cells: {
        type: Array,
        required: true,
    },
});


</script>


<!--<div class="shelves">-->
<!--    <div-->
<!--      v-for="box in boxes"-->
<!--      :key="box.id"-->
<!--      tabindex="0"-->
<!--      class="box"-->
<!--      :class="[-->
<!--        `box-${box.cell}`,-->
<!--        isHoldingDateExpired(box.date_add) ? 'box-forgotten' : 'box-ok',-->
<!--      ]"-->
<!--      @click="$emit('clickToBox', box.id)"-->
<!--      @keyup.enter="$emit('clickToBox', box.id)"-->
<!--    />-->


<template>
    <div class="shelves w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
            <box-state v-for="cell in cells"
                       :key="cell.id" :cell="cell"
            :class="`cell-${cell.box}`"/>
        </div>
</template>


<style lang="scss" scoped>
.shelf {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    //justify-content: space-between;
    align-items: flex-end;
    position: relative;
    z-index: 10;
    margin-bottom: -60px;
    width: 100%;
}

.shelves {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;



//    position: relative;
//    margin: auto;
//    width: 1600px;
//    height: 900px;
//    background: url("@assets/img/shelves.webp") 50% 50% no-repeat;
//    background-size: contain;
}

.shelf-image {
    //background: url("@assets/img/shelf.png") 50% 50% no-repeat;
    //background-size: contain;

    display: block;
    z-index: 9;
    content: url("@assets/img/shelf.png");
    position: relative;
    width: 100%;
}

.box {
    width: 100px;
    height: 100px;
    transition: 0.3s;

    background-size: contain;
    background-repeat: no-repeat;

    &:hover {
        scale: 1.1;
        opacity: 0.85;
    }

    &:focus {
        outline: none;
        scale: 1.1;
        opacity: 0.85;
    }

    &-ok {
        background-image: url("@assets/img/box-ok.webp");
    }

    &-forgotten {
        background-image: url("@assets/img/box-forgotten.webp");
    }
}

///* First shelf */
//.box-1 {
//    grid-column: 1 / 2;
//    grid-row: 1 / 2;
//}
//
//.box-2 {
//    grid-column: 2 / 3;
//    grid-row: 1 / 2;
//}
//
//.box-3 {
//    grid-column: 1 / 2;
//    grid-row: 2 / 3;
//}
//
//.box-4 {
//    grid-column: 2/ 3;
//    grid-row: 2 / 3;
//}
//
//.box-5 {
//    grid-column: 1 / 2;
//    grid-row: 3 / 4;
//}
//
//.box-6 {
//    grid-column: 2 / 3;
//    grid-row: 3 / 4;
//}
//
//.box-7 {
//    grid-column: 1 / 2;
//    grid-row: 4 / 5;
//}
//
//.box-8 {
//    grid-column: 2 / 3;
//    grid-row: 4 / 5;
//}
//
///* Second Shelf */
//
//.box-9 {
//    grid-area: 1 / 1;
//}
//
//.box-10 {
//    grid-area: 1 / 2;
//}
//
//.box-11 {
//    grid-area: 2 / 1;
//}
//
//.box-12 {
//    grid-area: 2 / 2;
//}
//
//.box-13 {
//    top: 410px;
//    grid-area: 3 / 1;
//}
//
//.box-14 {
//    grid-area: 3 / 2;
//}
//
//.box-15 {
//    grid-area: 4 / 1;
//}
//
//.box-16 {
//    grid-area: 4 / 2;
//}
//
///* Third Shelf */
//
//.box-17 {
//    grid-area: 1 / 1;
//}
//
//.box-18 {
//    grid-area: 1 / 2;
//}
//
//.box-19 {
//    grid-area: 2 / 1;
//}
//
//.box-20 {
//    grid-area: 2 / 2;
//}
//
//.box-21 {
//    grid-area: 3 / 1;
//}
//
//.box-22 {
//    grid-area: 3 / 2;
//}
//
//.box-23 {
//    grid-area: 4 / 1;
//}
//
//.box-24 {
//    grid-area: 4 / 2;
//}
</style>
