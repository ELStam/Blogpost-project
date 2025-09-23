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
                    
                    <div v-if="scriptLoaded"
                         :data-sitekey="siteKey"
                         class="g-recaptcha"
                         data-callback="onRecaptchaSuccess">
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
            password: '',
            siteKey: '6LfEQtIrAAAAAAQgDK-dTsBQM0DAfFQ8NaU0QlQq',
            recaptchaToken: null,
            scriptLoaded: false
        }
    },

    methods: {
        ...mapActions('auth', ['login']),

        async submitLogin() {
            if (!this.recaptchaToken) {
                alert("Bevestig de reCAPTCHA.");
                return;
            }

            try {
                await this.login({
                    username: this.username,
                    password: this.password,
                    recaptcha: this.recaptchaToken
                })
                this.$router.push('/')
            } catch (error) {
                console.log(error)
            }
        },

        onRecaptchaSuccess(token) {
            this.recaptchaToken = token;
        },

        loadRecaptcha() {
            return new Promise((resolve) => {
                if (document.getElementById("recaptcha-script")) {
                    resolve();
                    return;
                }
                const script = document.createElement("script");
                script.id = "recaptcha-script";
                script.src = "https://www.google.com/recaptcha/api.js";
                script.async = true;
                script.defer = true;
                script.onload = resolve;
                document.head.appendChild(script);
            });
        }
    },

    async mounted() {
        // maak callback globaal
        window.onRecaptchaSuccess = this.onRecaptchaSuccess;

        await this.loadRecaptcha();
        this.scriptLoaded = true;
    }
}
</script>
