<template>
    <div class="blog-item">
        <img
            alt="user profile photo"
            class="blog-item__image"
            src="/assets/img.png"
        />

        <div class="blog-item__body">
            <span class="blog-sub-card__username">
                @{{ blog.user.username }}
            </span>

            <h3 class="blog-item__title">
                {{ blog.title }}
            </h3>

            <span class="blog-item__introduction">
                {{ blog.introduction }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BlogItemComponent',

    props: {
        blog: {
            type: Object,
            required: true
        }
    }
}
</script>
