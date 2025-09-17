<template>
    <div class="profile-page">
        <div class="hero">
            <img alt="Header" src="/assets/luca-bravo-O453M2Liufs-unsplash.jpg"/>
        </div>

        <section class="profile-card">
            <div class="profile-header">
                <div class="profile-picture">
                    <img
                        alt="profile-picture"
                        src="/assets/tyler-nix-PQeoQdkU9jQ-unsplash.jpg"
                    />
                </div>
                <div class="profile-info">
                    <h2>TYLER</h2>
                    <p class="username">@Gebruikersnaam</p>
                    <p class="bio">
                        Dit is de korte omschrijving die op het profiel komt te staan. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit, aenean.
                    </p>
                    <div class="stats">
                        <div><strong>10.504</strong> volgers</div>
                        <div><strong>127</strong> volgend</div>
                    </div>
                </div>
            </div>
        </section>
        <main class="profile-input">
            <section class="writing">
                <img
                    alt="writing"
                    class="writing"
                    src="/assets/writing.png"
                />
                <input
                    v-model="newBlog"
                    placeholder="Schrijf een blog..."
                    type="text"
                    @keyup.enter="postBlog"
                />
            </section>
        </main>
    </div>
</template>

<script>
export default {
    name: 'ProfilePage',
    data() {
        return {
            newBlog: '',
        };
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
