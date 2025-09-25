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

            <div class="following__blog__friends">
                <!-- Loop door users -->
                <div
                    v-for="user in users"
                    :key="user.id"
                    class="following__blog__friends__item"
                >
                    <h3 class="following__blog__friends__item-title">@{{ user.username }}</h3>
                    <span class="following__blog__friends__item-name">{{ user.name }}</span>
                    <span class="following__blog__friends__item-followers">{{ user.followers }} volgers</span>
                </div>
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
            return this.$store.getters["user/currentUser"];
        },
        users() {
            return this.$store.getters["user/users"] || [];
        },
    },

    mounted() {
        this.$store
            .dispatch("user/fetchCurrentUser")
            .then(() => console.log("currentUser loaded:", this.currentUser))
            .catch((err) => alert(err));

        this.$store.dispatch("user/fetchUsers").catch((err) => console.error(err));
    },
};
</script>
