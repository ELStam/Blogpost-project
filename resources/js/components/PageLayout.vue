<script>
import SidebarLayout from "@/components/SidebarLayout.vue";

export default {
    name: "PageLayout",

    components: {SidebarLayout},

    props: {
        sidebarClass: {type: String, default: ''},
        contentClass: {type: String, default: ''}
    }
}
</script>

<template>
    <main class="page">
        <sidebar-layout :class="sidebarClass">
            <template #default>
                <slot name="sidebar"></slot>
            </template>
        </sidebar-layout>

        <div :class="['page__content', contentClass]">
            <slot></slot>
        </div>
    </main>
</template>
