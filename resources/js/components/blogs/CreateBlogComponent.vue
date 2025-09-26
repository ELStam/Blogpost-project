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
        ...mapActions('blog', ['createBlog'])
    }
}
</script>
