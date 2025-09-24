<template>
    <div v-if="currentUser" class="following following__layout">
        <div class="following__left">
            <div class="following__blog">
                <create-blog-component
                    :user="currentUser"
                    class="following__layout__create-blog following__layout__create-blog--below-image"
                />
            </div>

            <div class="following__blog__more-friends">
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

export default {
    name: "FollowingComponent",

    components: {
        BlogListComponent,
        CreateBlogComponent,
    },

    computed: {
        currentUser() {
            return this.$store.getters['user/currentUser'];
        },
    },

    mounted() {
        this.$store.dispatch('user/fetchCurrentUser')
            .then(() => console.log('currentUser loaded:', this.currentUser))
            .catch(err => alert(err));
    },
};
</script>
