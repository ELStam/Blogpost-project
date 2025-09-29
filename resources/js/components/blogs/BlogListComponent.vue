<template>
    <div class="blog-list">
        <blog-card-component
            v-for="blog in displayedBlogs"
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

    props: {
        onlyCurrentUser: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        ...mapGetters('blog', ['blogs']),
        ...mapGetters('user', ['currentUser']),

        displayedBlogs() {
            if (this.onlyCurrentUser && this.currentUser) {
                return this.blogs.filter(b => b.user_id === this.currentUser.id);
            }
            return this.blogs;
        }
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
