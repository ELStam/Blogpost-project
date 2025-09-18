<template>
    <div v-if="currentUser" class="profile-page">
        <div class="hero">
            <img alt="Header" src="/assets/luca-bravo-O453M2Liufs-unsplash.jpg"/>
        </div>

        <section class="profile-card">
            <div class="profile-header">
                <div class="profile-picture">
                    <img alt="profile-picture" src="/assets/tyler-nix-PQeoQdkU9jQ-unsplash.jpg"/>
                </div>
                <div class="profile-info">
                    <h2>{{ currentUser.name }}</h2>
                    <p class="username">@{{ currentUser.username }}</p>
                    <p class="bio">{{ currentUser.bio }}</p>
                    <div class="stats">
                        <div class="stat-badge">
                            <strong>{{ currentUser.followers || 0 }}</strong> volgers
                        </div>
                        <div class="stat-badge">
                            <strong>{{ currentUser.following || 0 }}</strong> volgend
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
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
