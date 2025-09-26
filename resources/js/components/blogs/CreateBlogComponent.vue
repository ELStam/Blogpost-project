<template>
    <div class="blog-create">
        <page-layout class="--create" content-class="--create" sidebar-class="--create">
            <template #sidebar>

            </template>

            <template #default>
                {{ title }}
            </template>
        </page-layout>
    </div>
</template>

<script>

import BlogInputTitleComponent from "@/components/blogs/BlogInputTitleComponent.vue";
import PageLayout from "@/components/PageLayout.vue";

export default {
    name: "BlogCreateComponent",

    components: {
        PageLayout,
        BlogInputTitleComponent
    },

    props: {
        title: {
            type: String,
            required: true
        }
    }


}
</script>
