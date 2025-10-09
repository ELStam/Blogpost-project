<template>
    <div class="search">
        <SearchBarComponent
            placeholder="Zoek naar blogs op naam..."
            @search="searchBlogs"
        />
        <BlogListComponent :blogs="blogs"/>
    </div>
</template>

<script>
import SearchBarComponent from "@/components/navigation/SearchBarComponent.vue";
import BlogListComponent from "@/components/blogs/BlogListComponent.vue";
import axios from "axios";

export default {
    name: "BlogSearchComponent",

    components: {
        SearchBarComponent,
        BlogListComponent,
    },

    data() {
        return {
            blogs: [],
        };
    },

    methods: {
        /**
         * Fetch blogs by title
         * @param {string} title
         * @return {Promise<void>}
         */
        async searchBlogs(title) {
            try {
                const response = await axios.get("/api/search", {
                    params: {
                        title: title,
                    },
                });

                this.blogs = response.data.blogs || [];
            } catch (error) {
                console.error("Error fetching blogs by title:", error);
            }
        },
    },
};
</script>


