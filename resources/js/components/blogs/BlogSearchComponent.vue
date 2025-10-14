<template>
    <div class="search">
        <SearchBarComponent
            placeholder="Zoek naar blogs op naam..."
            @search="updateSearch"
        />
        <BlogListComponent
            :blogs="blogs"
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
    },

    methods: {
        ...mapActions('blog', ['fetchBlogs']),

        /**
         * Calls the backend when Enter is pressed in the search bar.
         *
         * @param {String} value
         */
        async updateSearch(value) {
            this.searchTerm = value;
            try {
                await this.fetchBlogs(this.searchTerm);
            } catch (error) {
                console.error('Error during search:', error);
            }
        }
    },

    async created() {
        try {
            await this.fetchBlogs();
        } catch (error) {
            console.error("Error during initial fetch:", error);
        }
    }
};
</script>
