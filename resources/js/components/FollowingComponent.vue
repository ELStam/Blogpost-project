<template>
    <div v-if="currentUser" class="following">
        <div class="following-left">
            <div class="following-blog">
                <div class="following-blog__username">
                    <span class="following-blog__username-text">@{{ currentUser.username }}</span>
                </div>
                <create-blog-component/>
            </div>

            <div class="following-blog__more-friends">
                Bekijk meer van je vrienden
            </div>
        </div>

        <div class="following__content">
            <h1 class="following__title">Volgend</h1>
            <blog-list-component/>
        </div>
    </div>
</template>


<script>
import CreateBlogComponent from "@/components/blogs/CreateBlogComponent.vue";
import BlogListComponent from "@/components/blogs/BlogListComponent.vue";
import {mapActions, mapGetters} from "vuex";

export default {
    name: "FollowingComponent",

    components: {
        BlogListComponent,
        CreateBlogComponent,
    },

    computed: {
        ...mapGetters('user', ['currentUser'])
    },

    created() {
        this.fetchCurrentUser();
    },

    methods: {
        ...mapActions('user', ['fetchCurrentUser'])
    }

};
</script>
