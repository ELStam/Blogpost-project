<template>
    <div class="category">
        <h3 class="category__label">{{ label }}</h3>

        <div class="category__list">
            <ul class="category__list-items">
                <li class="category__list-item">
                    <button class="category__button category__button--active">
                        Alle blogs
                    </button>
                </li>
                <li v-for="category in getCategories" class="category__list-item">
                    <button class="category__button">{{ category.name }}</button>
                </li>
                <li class="category__list-item">
                    <button class="category__button category__button--all">
                        Bekijk alle categorieën
                    </button>
                </li>
            </ul>
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
        ...mapGetters('blog', ['getCategories'])
    },

    created() {
        this.fetchCategories()
    },

    methods: {
        ...mapActions('blog', ['fetchCategories']),
    }
}
</script>
