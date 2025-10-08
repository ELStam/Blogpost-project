<template>
    <div class="posts">
        <page-layout class="--posts">
            <template #sidebar>
                <category-component
                    label="Categorieën"
                />
            </template>
            <template #default>
                <main class="posts-content">
                    <h1 class="posts-content__title">Top Posts</h1>
                    <blog-list-component random/>
                </main>
            </template>
        </page-layout>
    </div>
</template>
<script>
import BlogListComponent from "@/components/blogs/BlogListComponent.vue";
import UsersComponent from "@/components/UsersComponent.vue";
import PageLayout from "@/components/PageLayout.vue";
import CategoryComponent from "@/components/navigation/CategoryComponent.vue";
import BaseButtonComponent from "@/components/forms/BaseButtonComponent.vue";

export default {
    name: "PostsComponent",

    components: {
        BaseButtonComponent,
        CategoryComponent,
        PageLayout,
        UsersComponent,
        BlogListComponent
    },
};
</script>
