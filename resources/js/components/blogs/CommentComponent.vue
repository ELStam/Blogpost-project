<template>
    <div class="comment">
        <span class="comment__text">@{{ user.username }}: {{ text }}</span>
    </div>
</template>

<script>
export default {
    name: "CommentComponent",
    props: {
        text: {
            type: String,
            required: true
        },
        user: {
            type: Object,
            required: true
        }
    }
};
</script>
