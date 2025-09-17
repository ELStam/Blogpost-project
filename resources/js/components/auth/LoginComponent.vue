<template>
    <div class="login">
        <div class="login__background">
            <img class="login__img" src="/assets/writing.png"/>
        </div>
        <div class="login__box">
            <h1 class="login__title">INLOGGEN</h1>

            <div class="login__content">
                <form class="login__form" @submit.prevent="submitLogin">
                    <base-input-component
                        v-model="username"
                        class="login__input login__input--username"
                        label="Gebruikersnaam"
                        type="text"
                    />

                    <base-input-component
                        v-model="password"
                        class="login__input login__input--password"
                        label="Wachtwoord"
                        type="password"
                    />

                    <div class="login__privacy">
                        <input class="login__checkbox" type="checkbox"/>
                        <label class="login__privacy-label">
                            Ja, Ik ga akkoord met de privacyverklaring
                        </label>
                    </div>

                    <button class="login__button">Inloggen</button>
                </form>

                <div class="login__links">
                    <img class="login__link-icon" src="/assets/padlock.png">
                    <span class="login__link login__link--forget">
                        Wachtwoord vergeten
                    </span>
                    <span class="login__link login__link--register">
                        Nog geen account?
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BaseInputComponent from "@/components/forms/BaseInputComponent.vue";
import BaseButtonComponent from "@/components/forms/BaseInputComponent.vue";
import {mapActions} from "vuex";

export default {
    name: 'LoginComponent',

    components: {
        BaseButtonComponent,
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

        async submitLogin() {
            try {
                await this.login({username: this.username, password: this.password})
                this.$router.push('/')
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>
