<template>
    <div class="comment">
        <span class="comment__text">@{{ user.username }}: {{ text }}</span>
        <icon-component
            :blog="blog"
            :comment="commentId"
            @deleteComment="handleDelete"
        />
    </div>
</template>

<script>
import IconComponent from "@/components/general/IconComponent.vue";
import {mapActions} from "vuex";

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
    data() {
        return {
            newComment: ""
        };
    },
    methods: {
        ...mapActions('comment', ['deleteComment', 'addComment']),

        /**
         *  Deletes the Comment
         */
        handleDelete() {
            this.deleteComment({
                blogId: this.blog.id,
                commentId: this.commentId
            })
                .then(() => alert('Comment deleted successfully'))
                .catch(err => console.error(err));
        },

        /**
         * Make a new Comment
         */
        async addComment() {
            if (!this.newComment.trim()) return;

            try {
                await this.addComment({
                    blogId: this.blog.id,
                    body: this.newComment
                });
                this.newComment = "";
            } catch (error) {
                console.error(error);
            }
        }
    }
};
</script>
