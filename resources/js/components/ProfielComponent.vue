<template>
    <div v-if="currentUser" class="profile-page">
        <div class="profile-page-hero">
            <img alt="Header" src="/assets/luca-bravo-O453M2Liufs-unsplash.jpg"/>
        </div>

        <section class="profile-card">
            <div class="profile-card-header">
                <div class="profile-picture">
                    <img alt="profile-picture" src="/assets/tyler-nix-PQeoQdkU9jQ-unsplash.jpg"/>
                </div>
                <div class="profile-info">
                    <h2>{{ currentUser.name }}</h2>
                    <p class="profile-info_username">@{{ currentUser.username }}</p>
                    <p class="profile-info_bio">{{ currentUser.bio }}</p>
                    <div class="profile-stats">
                        <div class="profile-stats_badge">
                            <span>{{ currentUser.followers || 0 }}</span> volgers
                        </div>
                        <div class="profile-stats_badge">
                            <span>{{ currentUser.following || 0 }}</span> volgend
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <main class="profile-blog">
        <section class="profile-blog_input">
            <img
                alt="writing"
                src="/assets/writing.png"
            />
            <input
                v-model="newBlog"
                class="profile-blog-input_input"
                placeholder="Schrijf een blog..."
                type="text"
                @keyup.enter="postBlog"
            />
        </section>
    </main>
</template>

<script>
export default {
    name: 'ProfielComponent',

    data() {
        return {
            newBlog: ''
        }
    },

    computed: {
        currentUser() {
            return this.$store.getters['user/currentUser'];
        }
    },

    mounted() {
        this.$store.dispatch('user/fetchCurrentUser')
            .then(() => console.log('currentUser loaded:', this.currentUser))
            .catch(err => console.error(err));
    },

    methods: {
        postBlog() {
            if (!this.newBlog.trim()) return; // voorkomt lege blogs
            console.log('Nieuwe blog:', this.newBlog);
            this.newBlog = '';
        },
    },
};
</script>
