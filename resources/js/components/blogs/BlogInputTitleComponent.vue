<template>
    <div v-if="isAuthenticated" class="blog-create">
        <div>
            <profile-photo-component
                alt="Profile photo of the user"
                class="--create"
                src="/assets/img.png"
            />
            <span v-if="Object.keys(user).length > 0" class="blog-create__username">@{{
                    user.username
                }}</span>
        </div>
        <base-input-component
            v-model="title"
            class="blog-create__input"
            label="Titel van de blog..."
            type="text"
            @input="updateTitle"
        />

        <router-link :to="{ name: 'BlogCreate', query: { title: title } }">
            <button>Aanmaken</button>
        </router-link>
    </div>
</template>

<script>
import BaseInputComponent from "@/components/forms/BaseInputComponent.vue";
import {mapActions, mapGetters} from "vuex";
import ProfilePhotoComponent from "@/components/general/ProfilePhotoComponent.vue";

export default {
    name: 'BlogInputTitleComponent',

    components: {ProfilePhotoComponent, BaseInputComponent},
    props: {
        user: {
            type: Object, default: ({})
        }
    },

    data() {
        return {
            title: '',
            body: ''
        }
    },

    computed: {
        ...mapGetters('auth', ['isAuthenticated'])
    },

    methods: {
        ...mapActions('blog', ['createBlog']),

        updateTitle() {
            this.$emit("update:title", this.title)
        }
    }
}
</script>
