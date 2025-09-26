<template>
    <div class="home">
        <page-layout class="--home" content-class="--home" sidebar-class="--home">
            <template #sidebar>
                <category-component
                    label="Categorieën"
                />
            </template>

            <template #default>
                <main class="home__content">
                    <create-blog-component/>
                    <blog-list-component/>
                </main>
            </template>
        </page-layout>
    </div>
</template>

<script>
import BlogListComponent from "@/components/blogs/BlogListComponent.vue";
import {mapActions, mapGetters} from "vuex";
import BaseInputComponent from "@/components/forms/BaseInputComponent.vue";
import CategoryComponent from "@/components/navigation/CategoryComponent.vue";
import CreateBlogComponent from "@/components/blogs/CreateBlogComponent.vue";
import PageLayout from "@/components/PageLayout.vue";

export default {
    name: "HomeComponent",

    components: {
        PageLayout,
        CreateBlogComponent,
        CategoryComponent,
        BlogListComponent,
        BaseInputComponent,
    },

    computed: {
        ...mapGetters('blog', ['categories'])
    },

    created() {
        this.fetchCategories()
    },

    methods: {
        ...mapActions('blog', ['fetchCategories']),
    }
};
</script>
