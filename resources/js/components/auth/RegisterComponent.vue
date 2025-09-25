<template>
    <div class="register-page">
        <auth-layout title="Register">
            <template #form>
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
                        v-model="confirmPassword"
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

export default {
    name: "RegisterComponent",
    components: {BaseTextAreaComponent, AuthLayout, BaseInputComponent},

    data() {
        return {
            user: {
                name: '',
                username: '',
                email: '',
                bio: '',
                password: '',
            },
            confirmPassword: ''
            // file: null
        }
    },
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

