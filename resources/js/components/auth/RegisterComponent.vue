<template>
    <div class="register-page">
        <auth-layout title="Registeren">
            <template #form>
                <error-component :errors="getErrors"/>
                <form class="register-page__form" @submit.prevent="submitRegister">
                    <base-input-component
                        v-model="user.name"
                        class="register-page__input register-page__input--name"
                        label="Naam"
                        type="text"
                    />

                    <base-text-area-component
                        v-model="user.bio"
                        class="register-page__input register-page__input--username"
                        label="Schijf hier iets over jezelf..."
                    />

                    <base-input-component
                        v-model="user.username"
                        class="register-page__input register-page__input--username"
                        label="Gebruikersnaam"
                        type="text"
                    />
                    <base-input-component
                        v-model="user.email"
                        class="register-page__input register-page__input--name"
                        label="Email"
                        type="email"
                    />

                    <base-input-component
                        v-model="user.password"
                        class="register-page__input register-page__input--password"
                        label="Wachtwoord"
                        type="password"
                    />

                    <base-input-component
                        v-model="user.confirm_password"
                        class="register-page__input register-page__input--confirm"
                        label="Herhaal Wachtwoord"
                        type="password"
                    />

                    <button class="register-page__button">Registeren</button>
                </form>
            </template>

            <template #links>
                <div class="register-page__links">
                    <router-link :to="{name: 'Login'}" class="register-page__link">
                    <span class="register-page__link register-page__link--register">
                        Heb je al een account? Log hier in!
                    </span>
                    </router-link>
                </div>
            </template>
        </auth-layout>
    </div>
</template>

<!--<template>-->
<!--    <input type="file" @change="selectedFile($event)"/>-->
<!--</template>-->

<script>
import BaseInputComponent from "@/components/forms/BaseInputComponent.vue";
import AuthLayout from "@/components/auth/AuthLayout.vue";
import BaseTextAreaComponent from "@/components/forms/BaseTextAreaComponent.vue";
import {mapActions, mapGetters} from "vuex";
import ErrorComponent from "@/components/general/ErrorComponent.vue";

export default {
    name: "RegisterComponent",
    components: {ErrorComponent, BaseTextAreaComponent, AuthLayout, BaseInputComponent},

    data() {
        return {
            user: {
                name: '',
                username: '',
                email: '',
                bio: '',
                password: '',
                confirm_password: ''
            },
            // file: null
        }
    },

    computed: {
        ...mapGetters('auth', ['getErrors'])
    },
    
    created() {
        this.clearErrors()
    },

    methods: {
        ...mapActions('auth', ['register', 'clearErrors']),

        /**
         * Handles the register form submission.
         *
         * Calls the register method in the authStore with the provided user.
         * If the register is successful, it navigates the user to the home page.
         *
         * @returns {Promise<void>}
         */
        async submitRegister() {
            try {
                this.getErrors = []
                if (this.user.password !== this.user.confirm_password) {
                    alert("Wachtwoorden komen niet overeen!");
                    return
                }
                await this.register(this.user);
                if (!this.getErrors) {
                    this.$router.push('/')
                }
            } catch (error) {
                console.log(error)
                throw error
            }
        }
    }
    //
    // methods: {
    //
    //     // selectedFile(event) {
    //     //     let formData = new FormData()
    //     //     formData.append('file', event.target.files[0])
    //     //
    //     //     axios.post(route('uploadtest'), formData).then(() => {
    //     //         console.log('Doet nu nog niks')
    //     //     })
    //     // }
    // }
}
</script>

