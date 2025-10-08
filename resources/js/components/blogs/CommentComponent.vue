<template>
    <div class="comment">
        <span class="comment__text">@{{ user.username }}: {{ text }}</span>
        <icon-component
            :blog="blog"
            :comment="commentId"
            @delete="handleDelete"
        />
    </div>
</template>

<script>
import IconComponent from "@/components/general/IconComponent.vue";

export default {
    name: "CommentComponent",

    components: {IconComponent},

    props: {
        text: {
            type: String,
            required: false
        },
        user: {
            type: Object,
            required: true
        },
        blog: {
            type: Object,
            required: true
        },
        commentId: {
            type: Number,
            required: true
        }
    },
    
    methods: {
        /**
         * Emits an event to delete a comment.
         * The parent component should handle the deletion logic.
         *
         * @returns {void}
         */
        handleDelete(blogId, commentId) {
            this.$emit('deleteComment', {blogId, commentId});
        }
    }
};
</script>
