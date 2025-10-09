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
        },
        random: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        ...mapGetters('blog', ['blogs']),
        ...mapGetters('user', ['currentUser']),

        /**
         * Filters the displayed blogs
         *
         * @returns {Array}
         */
        displayedBlogs() {
            let list = (this.onlyCurrentUser && this.currentUser)
                ? this.blogs.filter(blog => blog.user_id === this.currentUser.id)
                : this.blogs;

            if (this.random && list.length > 0) {
                let shuffled = [...list].sort(() => 0.5 - Math.random());
                return shuffled.slice(0, 3);
            }
            return list;
        },

        /**
         * Filters the blogs based on search term
         *
         * @returns {Array}
         */
        SearchedBlogs() {
            if (!this.searchTerm || this.searchTerm.trim() === '') {
                return this.blogs;
            }

            const term = this.searchTerm.trim().toLowerCase();

            return this.blogs.filter(blog =>
                blog.title.toLowerCase().includes(term) ||
                (blog.content && blog.content.toLowerCase().includes(term))
            );
        }
    },

    created() {
        this.fetchBlogs();
        this.fetchCurrentUser();
    },

    beforeUnmount() {
        this.resetBlogs();
    },

    methods: {
        ...mapActions('blog', ['fetchBlogs', 'resetBlogs']),
        ...mapActions('user', ['fetchCurrentUser'])
    }
}
</script>
