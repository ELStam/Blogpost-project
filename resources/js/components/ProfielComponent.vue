<template>
    <div v-if="currentUser" class="profile">
        <div class="profile__hero">
            <img
                src="/assets/luca-bravo-O453M2Liufs-unsplash.jpg"
            />
        </div>

        <section class="profile__card">
            <div class="profile__card__header">
                <div class="profile__card__picture profile__card__picture--rounded">
                    <img
                        alt="profile-picture"
                        class="profile__card__picture-image"
                        src="/assets/tyler-nix-PQeoQdkU9jQ-unsplash.jpg"
                    />
                </div>
                <div class="profile__card__info">
                    <h2 class="profile__card__name">{{ currentUser.name }}</h2>
                    <p class="profile__card__username">@{{ currentUser.username }}</p>
                    <p class="profile__card__bio">
                        {{ currentUser.bio || 'Geen bio beschikbaar' }}
                    </p>
                    <div class="profile__card__stats">
                        <div class="profile__card__stats__badge profile__card__stats__badge--followers">
                            <span>{{ currentUser.followers || 0 }} volgers</span>
                        </div>
                        <div class="profile__card__stats__badge profile__card__stats__badge--following">
                            <span>{{ currentUser.following || 0 }} volgend</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <main class="profile-blog">
        <section class="profile-blog__input">
            <img alt="writing" src="/assets/writing.png"/>
            <input
                v-model="newBlog"
                class="profile-blog__input__field"
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
            if (!this.newBlog.trim()) return;
            console.log('Nieuwe blog:', this.newBlog);
            this.newBlog = '';
        },
    },
};
</script>
