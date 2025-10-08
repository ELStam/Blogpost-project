<template>
    <div class="category">
        <div class="category-sidebar">
            <h3 class="category__label">
                {{ label }}
            </h3>
            <div class="category__list">
                <ul class="category__list-items">
                    <li class="category__list-item">
                        <button class="category__button category__button--active">
                            Alle blogs
                        </button>
                    </li>
                    <li v-for="category in categories" class="category__list-item">
                        <button class="category__button">
                            {{ category.name }}
                        </button>
                    </li>
                    <li class="category__list-item">
                        <button
                            class="category__button category__button--all"
                            @click="goToCategories"
                        >
                            Bekijk alle categorieën
                        </button>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: 'CategoryComponent',

    props: {
        label: {
            type: String,
            default: '',
        }
    },

    computed: {
        ...mapGetters('blog', ['categories'])
    },

    created() {
        this.fetchCategories();
    },

    methods: {
        ...mapActions('blog', ['fetchCategories']),
        /**
         * Navigates the user to the categories page.
         *
         * @returns {void}
         */
        goToCategories() {
            this.$router.push('/categories');
        }
    }
}
</script>
