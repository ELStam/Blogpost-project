<template>
    <div class="comment">
        <span class="comment__text">@{{ user.username }}: {{ text }}</span>
        <icon-component
            :blog="blog"
            :comment="commentId"
            @deleteComment="$emit('deleteComment', commentId)"
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
    }
};
</script>
