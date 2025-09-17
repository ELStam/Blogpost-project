<template>
    <div class="app-blog-header">
        <img class="app-blog-header__logo" height="30" src="/assets/writing-wit.png" width="30"/>
        <h1 class="app-blog-header__title">BLOG.</h1>
        <nav class="app-blog-header__nav">
            <router-link class="app-blog-header__link" to="/">Home</router-link>
            <router-link class="app-blog-header__link" to="/ontdek">Ontdek</router-link>
            <router-link class="app-blog-header__link" to="/volgend">Volgend</router-link>
            <router-link class="app-blog-header__link" to="/categorieen">Categorieën</router-link>
            <router-link class="app-blog-header__link" to="/TopPosts">Top Posts</router-link>

            <div v-if="isAuthenticated" class="app-blog-header__dropdown">
                <img
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
                            <router-link class="app-blog-header__dropdown-link" to="/profiel">Profiel</router-link>
                        </li>
                        <li class="app-blog-header__dropdown-item">
                            <a class="app-blog-header__dropdown-link app-blog-header__dropdown-link--logout"
                               @click="handleLogout">Uitloggen
                            </a>
                        </li>
                    </ul>
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
            console.log('open')
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