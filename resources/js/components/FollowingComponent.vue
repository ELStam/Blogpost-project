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
                <div class="following__blog__friends__item">
                    <h3 class="following__blog__friends__item-title">@{{ currentUser.username }}</h3>
                    <span class="following__blog__friends__item-name">{{ currentUser.name }}</span>
                    <span class="following__blog__friends__item-followers">{{ currentUser.followers }} volgers</span>
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
