<template>
    <div class="explore">
        <page-layout class="--explore">
            <template #sidebar>
                <category-component label="Categorieën"/>
                <div class="following-sidebar-profile">
                    <span class="following-sidebar-profile__friends">
                        Top Bloggers
                    </span>
                    <users-component :users="users"/>
                </div>
            </template>
            <template #default>
                <main class="explore-content">
                    <h1 class="explore-content__title">
                        Ontdek
                    </h1>
                    <blog-list-component random/>
                </main>

                <h1 class="following-blogs__title">
                    Volgend
                </h1>
                <blog-list-component/>
            </template>
        </page-layout>
    </div>
</template>

<script>
import BlogInputTitleComponent from "@/components/blogs/BlogInputTitleComponent.vue";
import BlogListComponent from "@/components/blogs/BlogListComponent.vue";
import UsersComponent from "@/components/UsersComponent.vue";
import {mapGetters, mapActions} from "vuex";
import PageLayout from "@/components/PageLayout.vue";
import BaseButtonComponent from "@/components/forms/BaseButtonComponent.vue";
import CategoryComponent from "@/components/navigation/CategoryComponent.vue";

export default {
    name: "FollowingComponent",

    components: {
        CategoryComponent, BaseButtonComponent, PageLayout,
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
