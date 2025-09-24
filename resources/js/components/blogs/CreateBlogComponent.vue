<template>
    <div v-if="isAuthenticated" class="blog-create">
        <profile-photo-component
            alt="Profile photo of the user"
            class="--create"
            src="/assets/img.png"
        />

        <base-input-component
            class="blog-create__input"
            label="Titel van de blog..."
            type="text"
        />
    </div>
</template>

<script>
import BaseInputComponent from "@/components/forms/BaseInputComponent.vue";
import {mapActions, mapGetters} from "vuex";
import ProfilePhotoComponent from "@/components/general/ProfilePhotoComponent.vue";

export default {
    name: 'CreateBlogComponent',

    components: {ProfilePhotoComponent, BaseInputComponent},

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
        ...mapActions('blog', ['createBlog'])
    }
}
</script>
