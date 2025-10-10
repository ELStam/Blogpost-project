<template>
    <div class="search">
        <SearchBarComponent
            placeholder="Zoek naar blogs op naam..."
            @search="updateSearch"
        />
        <BlogListComponent
            :blogs="filteredBlogs"
        />
    </div>
</template>

<script>
import SearchBarComponent from "@/components/navigation/SearchBarComponent.vue";
import BlogListComponent from "@/components/blogs/BlogListComponent.vue";
import {mapActions, mapGetters} from "vuex";

export default {
    name: "BlogSearchComponent",

    components: {
        SearchBarComponent,
        BlogListComponent,
    },

    data() {
        return {
            searchTerm: ''
        };
    },

    computed: {
        ...mapGetters('blog', ['blogs']),
        /**
         * Returns a list that match the searchTerm
         * If searchTerm is empty, return all blogs.
         *
         * @returns {Array}
         */
        filteredBlogs() {
            if (!this.searchTerm.trim()) return this.blogs;

            const term = this.searchTerm.trim().toLowerCase();
            return this.blogs.filter(blog =>
                blog.title.toLowerCase().includes(term) ||
                (blog.content && blog.content.toLowerCase().includes(term))
            );
        }
    },
    
    methods: {
        ...mapActions('blog', ['fetchBlogs']),
        /**
         * Updated the search Term used for filtering blogs.
         * @param {String} value
         */
        updateSearch(value) {
            this.searchTerm = value;
        }
    },

    created() {
        this.fetchBlogs();
    }
};
</script>
