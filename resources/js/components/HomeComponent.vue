<template>
    <div class="home">
        <aside class="home__sidebar">

            <category-component
                label="Categorieën"
            />
        </aside>

        <main class="home__content">
            <base-input-component/>

            <blog-list-component/>
        </main>
<!--        <aside class="sidebar">-->
<!--            <h3>Categorieën</h3>-->
<!--            <ul class="categories">-->
<!--                <li-->
<!--                    v-for="cat in getCategories"-->
<!--                    :key="cat.id"-->
<!--                    :class="cat.class"-->
<!--                >-->
<!--                    <button :class="{-->
<!--            'btn-primary': cat.name === 'Alle blogs',-->
<!--            'btn-secondary': cat.name !== 'Alle blogs' && cat.name !== 'Bekijk alle categorieën',-->
<!--            'btn-tertiary': cat.name === 'Bekijk alle categorieën'}">-->
<!--                        {{ cat.name }}-->
<!--                    </button>-->
<!--                </li>-->
<!--            </ul>-->
<!--            <div class="top-posts">Top Posts</div>-->
<!--        </aside>-->

<!--        <main class="main-content">-->
<!--            &lt;!&ndash; Blog invoerveld (avatar + input + knop) &ndash;&gt;-->
<!--            <section class="blog-input">-->
<!--                <img-->
<!--                    alt="user avatar"-->
<!--                    class="avatar"-->
<!--                    src="/assets/tyler-nix-PQeoQdkU9jQ-unsplash.jpg"-->
<!--                />-->
<!--                <input-->
<!--                    v-model="newBlog"-->
<!--                    placeholder="Schrijf een blog..."-->
<!--                    type="text"-->
<!--                    @keyup.enter="postBlog"-->
<!--                />-->
<!--            </section>-->

<!--            <blog-list-component/>-->


<!--        </main>-->

<!--        <aside class="rightbar"></aside>-->
    </div>
</template>
<script>

import BlogListComponent from "@/components/blogs/BlogListComponent.vue";
import {mapActions, mapGetters} from "vuex";
import BaseInputComponent from "@/components/forms/BaseInputComponent.vue";
import CategoryComponent from "@/components/navigation/CategoryComponent.vue";

export default {
    name: "HomeComponent",

    components: {
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
