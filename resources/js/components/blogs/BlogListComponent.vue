<template>
    <div class="blog-list">
        <!--        <span v-for="blog in displayedBlogs">-->
        <!--            {{ blog.title }}-->
        <!--        </span>-->
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
        },
        blogs: {
            type: Array,
            default: null
        }
    },

    computed: {
        ...mapGetters('blog', {allBlogs: 'blogs'}),
        ...mapGetters('user', ['currentUser']),

        /**
         * Filters the displayed blogs
         *
         * @returns {Array}
         */
        displayedBlogs() {
            let list = this.blogs ?? this.allBlogs;

            list = (this.onlyCurrentUser && this.currentUser)
                ? list.filter(blog => blog.user_id === this.currentUser.id)
                : list;

            if (this.random && list.length > 0) {
                let shuffled = [...list].sort(() => 0.5 - Math.random());
                return shuffled.slice(0, 3);
            }
            return list;
        }
    },

    created() {
        if (!this.blogs) this.fetchBlogs();
        this.fetchCurrentUser();
    },

    beforeUnmount() {
        if (!this.blogs) this.resetBlogs();
    },

    methods: {
        ...mapActions('blog', ['fetchBlogs', 'resetBlogs']),
        ...mapActions('user', ['fetchCurrentUser'])
    }
}
</script>
