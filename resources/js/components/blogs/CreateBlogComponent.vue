<template>
    <div class="blog-create" v-if="isAuthenticated">
        <img class="blog-create__image" :src="image"/>

        <base-input-component
            class="blog-create__input"
            label="Schrijf een blog..."
            type="text"
        />
    </div>
</template>

<script>
import BaseInputComponent from "@/components/forms/BaseInputComponent.vue";
import {mapActions, mapGetters} from "vuex";

export default {
    name: 'CreateBlogComponent',

    components: {BaseInputComponent},

    props: {
        image: {
            type: String,
            required: true
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
        ...mapActions('blog',['createBlog'])
    }
}
</script>
