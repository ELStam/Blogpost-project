<template>
    <div v-if="currentUser" class="following">
        <div class="following-sidebar">

            <div class="following-sidebar-profile">
                <span class="following-sidebar-profile__friends">Bekijk meer van je vrienden</span>
                <users-component :users="users"/>
            </div>
        </div>

        <div class="following-blogs">
            <h1 class="following-blogs__title">Volgend</h1>
            <blog-list-component/>
        </div>
    </div>
</template>

<script>
import BlogInputTitleComponent from "@/components/blogs/BlogInputTitleComponent.vue";
import BlogListComponent from "@/components/blogs/BlogListComponent.vue";
import UsersComponent from "@/components/UsersComponent.vue";
import {mapGetters, mapActions} from "vuex";

export default {
    name: "FollowingComponent",

    components: {
        UsersComponent,
        BlogListComponent,
        BlogInputTitleComponent,
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
