<template>
    <div class="home">
        <aside class="home__sidebar">

            <category-component
                label="Categorieën"
            />
        </aside>

        <main class="home__content">
            <create-blog-component/>

            <blog-list-component/>
        </main>
    </div>
</template>
<script>

import BlogListComponent from "@/components/blogs/BlogListComponent.vue";
import {mapActions, mapGetters} from "vuex";
import BaseInputComponent from "@/components/forms/BaseInputComponent.vue";
import CategoryComponent from "@/components/navigation/CategoryComponent.vue";
import CreateBlogComponent from "@/components/blogs/CreateBlogComponent.vue";

export default {
    name: "HomeComponent",

    components: {
        CreateBlogComponent,
        CategoryComponent,
        BlogListComponent,
        BaseInputComponent,
    },

    computed: {
        ...mapGetters('blog', ['getCategories'])
    },

    created() {
        this.fetchCategories()
    },

    methods: {
        ...mapActions('blog', ['fetchCategories']),
    }
};
</script>
