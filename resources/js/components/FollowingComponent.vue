<template>
    <div v-if="currentUser" class="following following__layout">
        <div class="following__left">
            <div class="following__blog">
                <create-blog-component
                    :user="currentUser"
                    class="following__layout__create-blog following__layout__create-blog--below-image"
                />
            </div>

            <div class="following__blog__more-friends">Bekijk meer van je vrienden
                <users-component :users="users"/>
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
import UsersComponent from "@/components/UsersComponent.vue";
import {mapGetters, mapActions} from "vuex";

export default {
    name: "FollowingComponent",

    components: {
        UsersComponent,
        BlogListComponent,
        CreateBlogComponent,
    },

    computed: {
        ...mapGetters('user', ['currentUser', "users"]),
    },

    created() {
        this.fetchCurrentUser();
        this.fetchUsers();
    },

    methods: {
        ...mapActions('user', ['fetchCurrentUser', 'fetchUsers']),
    },
};
</script>
