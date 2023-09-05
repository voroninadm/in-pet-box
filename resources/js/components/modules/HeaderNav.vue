<script setup>
import {ref} from 'vue';
import ApplicationLogo from '@/components/ApplicationLogo.vue';
import Dropdown from '@/components/Dropdown.vue';
import DropdownLink from '@/components/DropdownLink.vue';
import ResponsiveNavLink from '@/components/ResponsiveNavLink.vue';
import {Link} from '@inertiajs/vue3';

const showingNavigationDropdown = ref(false);

</script>

<template>
    <nav class="bg-white border-b border-gray-100 w-full">
        <!-- Primary Navigation Menu -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-dots-darker">
            <div class="flex justify-between h-12">
                <div class="flex">
                    <!-- Logo -->
                    <div class="shrink-0 flex items-center">
                        <Link :href="route('main')" class="transition duration-300 hover:scale-110">
                            <ApplicationLogo
                                class="block h-9 w-auto fill-current text-gray-800"
                            />
                        </Link>
<!--                        <Link :href="route('box.create')" class="transition duration-300 hover:scale-110">-->
<!--                            <svg-->
<!--                                class="adding_icon"-->
<!--                                xmlns="http://www.w3.org/2000/svg"-->
<!--                                viewBox="0 0 24 24"-->
<!--                            >-->
<!--                                <g-->
<!--                                    fill="none"-->
<!--                                    stroke="#000"-->
<!--                                    stroke-linecap="round"-->
<!--                                    stroke-linejoin="round"-->
<!--                                    stroke-width="2"-->
<!--                                >-->
<!--                                    <rect-->
<!--                                        width="20"-->
<!--                                        height="20"-->
<!--                                        x="2"-->
<!--                                        y="2"-->
<!--                                        data-name="&#45;&#45;Rectangle"-->
<!--                                        rx="2"-->
<!--                                        ry="2"-->
<!--                                    />-->
<!--                                    <path d="M15.5 12h-7m3.5 3.5v-7"/>-->
<!--                                </g>-->
<!--                            </svg>-->
<!--                        </Link>-->
                    </div>

                    <!-- Navigation Links -->
                    <!--                            <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">-->
                    <!--                                <NavLink :href="route('dashboard')" :active="route().current('dashboard')">-->
                    <!--                                    Главная-->
                    <!--                                </NavLink>-->
                    <!--                            </div>-->
                </div>

                <div class="hidden sm:flex sm:items-center sm:ml-6">
                    <!-- Settings Dropdown -->
                    <div class="ml-3 relative">
                        <Dropdown align="right" width="48">
                            <template #trigger>
                                        <span class="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {{ $page.props.auth.user.name }}

                                                <svg
                                                    class="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                            </template>

                            <template #content>
                                <DropdownLink :href="route('profile.edit')"> Мой профиль</DropdownLink>
                                <DropdownLink :href="route('logout')" method="post" as="button">
                                    Выйти
                                </DropdownLink>
                            </template>
                        </Dropdown>
                    </div>
                </div>

                <!-- Hamburger -->
                <div class="-mr-2 flex items-center sm:hidden">
                    <button
                        @click="showingNavigationDropdown = !showingNavigationDropdown"
                        class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    >
                        <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path
                                :class="{
                                            hidden: showingNavigationDropdown,
                                            'inline-flex': !showingNavigationDropdown,
                                        }"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                            <path
                                :class="{
                                            hidden: !showingNavigationDropdown,
                                            'inline-flex': showingNavigationDropdown,
                                        }"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Responsive Navigation Menu -->
        <div
            :class="{ block: showingNavigationDropdown, hidden: !showingNavigationDropdown }"
            class="sm:hidden"
        >
            <!--                    <div class="pt-2 pb-3 space-y-1">-->
            <!--                        <ResponsiveNavLink :href="route('dashboard')" :active="route().current('dashboard')">-->
            <!--                            Dashboard-->
            <!--                        </ResponsiveNavLink>-->
            <!--                    </div>-->

            <!-- Responsive Settings Options -->
            <div class="pt-2 pb-1 border border-gray-200">
                <div class="px-4 text-center">
                    <div class="font-medium text-base text-gray-800">
                        {{ $page.props.auth.user.name }}
                    </div>
                    <div class="font-medium text-sm text-gray-500">{{ $page.props.auth.user.email }}</div>
                </div>

                <div class="mt-3 space-y-1">
                    <ResponsiveNavLink :href="route('profile.edit')"> Мой профиль</ResponsiveNavLink>
                    <ResponsiveNavLink :href="route('logout')" method="post" as="button">
                        Выйти
                    </ResponsiveNavLink>
                </div>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.bg-dots-darker {
    background-image: url("@assets/icons/simpleBox.svg");
}

@media (prefers-color-scheme: dark) {
    .dark\:bg-dots-lighter {
        /*background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");*/
        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 24 24' fill='none' path stroke='#323232' stroke-width='2' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 15.83V8c0-.3.17-.6.44-.75h.01l7.17-4.04.05-.03a.7.7 0 0 1 .66 0l7.28 4.1c.24.14.39.4.39.67v7.88a.8.8 0 0 1-.4.69l-7.22 4.26a.75.75 0 0 1-.76 0L4.4 16.52a.8.8 0 0 1-.39-.7ZM12 21v-9m0 0L4 7.5m16 0L12 12')fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
    }
}

.adding_icon {
    width: 25px;
    height: 25px;
    margin: 0 20px;
}
</style>
