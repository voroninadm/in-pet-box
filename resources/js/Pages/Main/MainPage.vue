<script setup>
import {onMounted, shallowRef, ref} from "vue";
import HomeWithImage from "@/Pages/Main/partials/HomeWithImage.vue";
import HomeWithTable from "@/Pages/Main/partials/HomeWithTable.vue";

const homePage = shallowRef(HomeWithImage);

const setImageView = () => (homePage.value = HomeWithImage);
const setTableView = () => (homePage.value = HomeWithTable);


const props = defineProps({
    cells: {
        type: Array,
        required: true,
    },
});
const cells = ref([]);


onMounted(() => {
    cells.value = props.cells;

    Echo.channel("box-changed")
        .listen('BroadcastBoxChangedEvent', (e) => {
            let cellIdForChanging = e.cell_id;
            let changingBox = cells.value.find(cell => cell.id === cellIdForChanging);
            changingBox.box = e.box;
            console.log(e)
        });
})
</script>

<template>
    <div class="toggle animate__animated animate__fadeInDown">
        <button
            class="toggle__button"
            :class="{ active: homePage === HomeWithImage }"
            @click="setImageView"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                class="w-7 h-7"
                viewBox="0 0 24 24"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m2.3 15.8 5.1-5.2a2.3 2.3 0 0 1 3.2 0l5.1 5.2m-1.4-1.6 1.4-1.4a2.3 2.3 0 0 1 3.1 0l3 3m-18 3.7h16.4a1.5 1.5 0 0 0 1.6-1.5V6a1.5 1.5 0 0 0-1.6-1.5H3.9A1.5 1.5 0 0 0 2.3 6v12a1.5 1.5 0 0 0 1.5 1.5zM14.2 8.2h0v0h0v0zm.4 0a.4.4 0 1 1-.7 0 .4.4 0 0 1 .7 0z"
                />
            </svg>
        </button>
        <button
            class="toggle__button"
            :class="{ active: homePage === HomeWithTable }"
            @click="setTableView"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                class="w-7 h-7"
                viewBox="0 0 24 24"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z"
                />
            </svg>
        </button>
    </div>
    <transition
        name="view"
        enter-active-class="animate__animated animate__fadeInRight"
    >
        <component :is="homePage" :cells="cells">
            <slot/>
        </component>
    </transition>
</template>

<style scoped lang="scss">
.toggle {
    position: relative;
    margin-top: -50px;
    display: flex;
    justify-content: space-between;
    align-self: center;
    width: 70px;


}

.toggle__button {
    display: flex;
    flex-direction: column;

    align-items: center;
    width: 0;
    height: 65px;
    background-color: transparent;
    border: solid 15px rgba(177, 58, 34, 0.45);
    border-bottom: solid 15px transparent;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
         height: 85px;
        outline: none;
     }

    &:focus {
        height: 85px;
        outline: none;
    }
}

.active {
    border-color: rgba(221, 0, 0, 0.78);
    border-bottom-color: transparent;
    height: 85px;
}
</style>
