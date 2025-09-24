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

        isOwner() {
            return this.currentUser.id === this.blog.user_id
        }
    },

    mounted() {
        this.fetchCurrentUser()
    },

    methods: {
        ...mapActions('user', ['fetchCurrentUser']),
        
    }

}
</script>
