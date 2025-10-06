<template>
    <div class="category">
        <page-layout class="--category" content-class="--category" sidebar-class="--category">
            <template #sidebar>
                <h1 class="category__title">Categorieën</h1>
                <div class="category-sidebar">
                    <h3 class="category__label">Top categorieën</h3>

                    <div class="category__list">
                        <ul class="category__list-items">
                            <li v-for="category in categories" class="category__list-item">
                                <button class="category__button">{{ category.name }}</button>
                            </li>
                        </ul>
                    </div>

                </div>
            </template>

            <template #default>
                <main class="category__content">
                    <div v-for="category in categories" :key="category.id" class="category__card">
                        <img
                            alt="google on the laptop"
                            class="category__image"
                            src="/assets/firmbee-com-eMemmpUojlw-unsplash-905x478.jpg"
                        >
                        <span class="category__name">{{ category.name }}</span>
                    </div>
                </main>
            </template>
        </page-layout>
    </div>
</template>

<script>
import BaseButtonComponent from "@/components/forms/BaseButtonComponent.vue";
import BlogListComponent from "@/components/blogs/BlogListComponent.vue";
import PageLayout from "@/components/PageLayout.vue";
import CategoryComponent from "@/components/navigation/CategoryComponent.vue";
import {mapActions, mapGetters} from "vuex";

export default {
    name: "CategoryListComponent",

    components: {CategoryComponent, PageLayout, BlogListComponent, BaseButtonComponent},

    computed: {
        ...mapGetters('blog', ['categories'])
    },

    created() {
        this.fetchCategories();
    },

    methods: {
        ...mapActions('blog', ['fetchCategories']),
    }
}
</script>
