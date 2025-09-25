<template>
    <div v-if="isOwner" class="blog-icons">
        <img
            alt="Pencil for edit"
            class="blog-icons__image  blog-icons__image--edit"
            src="/assets/draw.png"
        />
        <img
            alt="Bin for delete"
            class="blog-icons__image blog-icons__image--delete"
            src="/assets/bin.png"
        />
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: 'IconComponent',

    props: {
        blog: {
            type: Object,
            required: true
        }
    },

    computed: {
        ...mapGetters('user', ['currentUser']),

        /**
         * Checks if the current user is the owner of the blog.
         *
         * Compares the 'currentUser.id' with the 'blog.user_id'.
         * If they match, the current user is considered the owner.
         *
         * @returns {boolean}
         */
        isOwner() {
            return this.currentUser?.id === this.blog.user_id
        }
    },

    created() {
        this.fetchCurrentUser()
    },

    methods: {
        ...mapActions('user', ['fetchCurrentUser']),

    }

}
</script>
