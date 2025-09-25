<template>
    <div class="app-blog-header">
        <img
            alt="Blog Logo"
            class="app-blog-header__logo" height="30"
            src="/assets/writing-wit.png" width="30"
        />
        <h1 class="app-blog-header__title">blog.</h1>
        <nav class="app-blog-header__nav">
            <div v-if="isAuthenticated" class="app-blog-header__links">
                <router-link class="app-blog-header__link" to="/">Home</router-link>
                <router-link class="app-blog-header__link" to="/ontdek">Ontdek</router-link>
                <router-link class="app-blog-header__link" to="/following">Volgend</router-link>
                <router-link class="app-blog-header__link" to="/categorieen">Categorieën</router-link>
                <router-link class="app-blog-header__link" to="/TopPosts">Top Posts</router-link>

                <div class="app-blog-header__dropdown">
                    <img
                        alt="Profile-image"
                        class="app-blog-header__profile"
                        src="/assets/img.png"
                        @click="toggleDropdown"
                    >
                    <div
                        v-if="open"
                        class="app-blog-header__dropdown-menu"
                    >
                        <ul class="app-blog-header__dropdown-list">
                            <li class="app-blog-header__dropdown-item">
                                <router-link :to="{name: 'Profile'}" class="app-blog-header__dropdown-link">
                                    Profiel
                                </router-link>
                            </li>
                            <li class="app-blog-header__dropdown-item">
                                <a
                                    class="app-blog-header__dropdown-link app-blog-header__dropdown-link--logout"
                                    @click="handleLogout"
                                >
                                    Uitloggen
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <router-link v-else :to="{name: 'Login'}" class="app-blog-header__link">
                <button class="app-blog-header__button">Inloggen</button>
            </router-link>
        </nav>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: 'HeaderComponent',

    data() {
        return {
            open: false
        }
    },

    computed: {
        ...mapGetters('auth', ['isAuthenticated'])
    },

    methods: {
        ...mapActions('auth', ['logout']),

        toggleDropdown() {
            this.open = !this.open
        },

        async handleLogout() {
            this.open = false
            await this.logout()
            this.$router.push({name: 'Login'})
        }
    }
}
</script>
