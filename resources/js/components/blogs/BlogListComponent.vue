<template>
    <div class="blog-list">
        <blog-card-component
            v-for="blog in blogs"
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
        ...mapGetters('blog', ['blogs'])
    },

    created() {
        this.fetchBlogs()
        this.fetchCurrentUser()
    },

    methods: {
        ...mapActions('blog', ['fetchBlogs']),
        ...mapActions('user', ['fetchCurrentUser'])
    }
}
</script>
