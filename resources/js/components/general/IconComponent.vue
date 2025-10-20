<template>
    <div v-if="isOwner" class="blog-icons">
        <img
            alt="Pencil for edit"
            class="blog-icons__image blog-icons__image--edit"
            src="/assets/draw.png"
            @click="onEdit()"
        />
        <img
            alt="Bin for delete"
            class="blog-icons__image blog-icons__image--delete"
            src="/assets/bin.png"
            @click="onDelete()"
        />
    </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
    name: 'IconComponent',

    props: {
        blog: {
            type: Object,
            required: true
        },
        comment: {
            type: [String, Number],
            default: ''
        },
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
            return this.currentUser?.id === this.blog.user_id;
        }
    },

    created() {
        this.fetchCurrentUser();
    },

    methods: {
        ...mapActions('user', ['fetchCurrentUser']),

        /**
         * Emits an 'edit' event with the blog object when the edit icon is clicked.
         *
         * @returns {void}
         */
        onEdit() {
            window.location.href = `/blogs/${this.blog.id}/edit`;
        },

        /**
         * Emits a 'delete' event with the blog/comment when the delete icon is clicked.
         *
         * @returns {void}
         */
        onDelete() {
            this.comment
                ? this.$emit('delete', this.blog.id, this.comment)
                : this.$emit('delete', this.blog.id)
        }
    }
}
</script>
