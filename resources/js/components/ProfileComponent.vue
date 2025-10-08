<template>
    <div v-if="currentUser" class="profile">
        <div class="profile-hero">
            <img
                alt="Hero"
                class="profile-hero__image"
                src="/assets/luca-bravo-O453M2Liufs-unsplash.jpg"
            />
        </div>

        <section class="profile-card">
            <div class="profile-card__header">
                <div class="profile-card__picture profile-card__picture--rounded">
                    <img
                        alt="profile-picture"
                        class="profile-card__picture-image"
                        src="/assets/tyler-nix-PQeoQdkU9jQ-unsplash.jpg"
                    />
                </div>

                <div class="profile-card__info">
                    <h2 class="profile-card__name">{{ currentUser.name }}</h2>
                    <span class="profile-card__username">@{{ currentUser.username }}</span>
                    <p class="profile-card__bio">
                        {{ currentUser.bio || 'Geen bio beschikbaar' }}
                    </p>
                    <div class="profile-card-stats">
                        <div class="profile-card-stats-badge">
                            <span class="profile-card-stats-badge__followers"> {{
                                    currentUser.followers
                                }} volgers</span>
                        </div>
                        <div class="profile-card-stats-badge">
                            <span class="profile-card-stats-badge__following">{{
                                    currentUser.following || 0
                                }} volgend</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="profile-blog">
            <blog-list-component :only-current-user="true"/>
        </div>
    </div>
</template>

<script>
import BaseInputComponent from "@/components/forms/BaseInputComponent.vue";
import BlogTitleInputComponent from "@/components/blogs/BlogInputTitleComponent.vue";
import {mapActions, mapGetters} from "vuex";
import BlogListComponent from "@/components/blogs/BlogListComponent.vue";

export default {
    name: "ProfileComponent",

    components: {
        BlogListComponent,
        BaseInputComponent,
        BlogTitleInputComponent,
    },

    data() {
        return {
            newBlog: '',
        };
    },

    computed: {
        ...mapGetters('user', ['currentUser']),
    },

    created() {
        this.fetchCurrentUser();
    },

    methods: {
        ...mapActions('user', ['fetchCurrentUser']),
    },

};
</script>
