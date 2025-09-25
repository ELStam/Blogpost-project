<template>
    <div class="login-page">
        <auth-layout title="Inloggen">
            <template #form>
                <form class="login-page__form" @submit.prevent="submitLogin">
                    <base-input-component
                        v-model="username"
                        class="login-page__input login-page__input--username"
                        label="Gebruikersnaam"
                        type="text"
                    />

                    <base-input-component
                        v-model="password"
                        class="login-page__input login-page__input--password"
                        label="Wachtwoord"
                        type="password"
                    />

                    <div class="login-page__privacy">
                        <input class="login-page__checkbox" type="checkbox"/>
                        <label class="login-page__privacy-label">
                            Ja, Ik ga akkoord met de privacyverklaring
                        </label>
                    </div>

                    <button class="login-page__button">Inloggen</button>
                </form>
            </template>

            <template #links>
                <div class="login-page__links">
                    <img
                        alt="Padlock"
                        class="login-page__link-icon" src="/assets/padlock.png"
                    >
                    <span class="login-page__link login-page__link--forget">
                        Wachtwoord vergeten
                    </span>
                    <router-link :to="{name: 'Register'}" class="login-page__link">
                    <span class="login-page__link login-page__link--register">
                        Nog geen account?
                    </span>
                    </router-link>
                </div>
            </template>
        </auth-layout>
    </div>
</template>

<script>
import BaseInputComponent from "@/components/forms/BaseInputComponent.vue";
import BaseButtonComponent from "@/components/forms/BaseInputComponent.vue";
import {mapActions} from "vuex";
import AuthLayout from "@/components/auth/AuthLayout.vue";

export default {
    name: 'LoginComponent',

    components: {
        AuthLayout,
        BaseInputComponent
    },

    data() {
        return {
            username: '',
            password: ''
        }
    },

    methods: {
        ...mapActions('auth', ['login']),

        /**
         * Handles the login form submission.
         *
         * Calls tge login method in the authStore with the provided username and password.
         * If the login is successful, it navigates the user to the home page.
         *
         * @returns {Promise<void>}
         */
        async submitLogin() {
            try {
                await this.login({username: this.username, password: this.password})
                this.$router.push('/')
            } catch (error) {
                throw error
            }
        }
    }
}
</script>
