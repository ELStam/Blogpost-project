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
                    <router-link :to="{name: 'BlogCreate'}">
                        <base-button-component
                            buttonClass="base-button__button --create"
                        >
                            <i class="fa-solid fa-circle-plus icon --home"></i>
                        </base-button-component>
                    </router-link>
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
import BlogInputTitleComponent from "@/components/blogs/BlogInputTitleComponent.vue";
import PageLayout from "@/components/PageLayout.vue";
import BaseButtonComponent from "@/components/forms/BaseButtonComponent.vue";

export default {
    name: "HomeComponent",

    components: {
        BaseButtonComponent,
        PageLayout,
        BlogInputTitleComponent,
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
