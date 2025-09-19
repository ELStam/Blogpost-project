<template>
    <div class="category">
        <h3 class="category__label">{{ label }}</h3>

        <ul class="category__list">
            <button class="category__button category__button--active">
                Alle blogs
            </button>
            <li class="category__items" v-for="category in getCategories">
                <button class="category__button">{{category.name}}</button>
            </li>
            <button class="category__button category__button--all">
                Bekijk alle categorieën
            </button>
        </ul>
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
