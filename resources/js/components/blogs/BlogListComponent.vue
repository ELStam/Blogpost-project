<template>
    <div class="blog-list">
        <blog-card-component
            v-for="blog in getBlogs"
            :key="blog.id"
            :blog="blog"
        />
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import BlogCardComponent from "@/components/blogs/BlogCardComponent.vue";

export default {
    name: 'BlogListComponent',

    components: {BlogCardComponent},

    computed: {
        ...mapGetters('blog', ['getBlogs'])
    },

    created() {
        this.fetchBlogs()
    },

    methods: {
        ...mapActions('blog', ['fetchBlogs']),
    }
}
</script>
