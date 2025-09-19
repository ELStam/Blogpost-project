<template>
    <div class="blog-card">
        <div class="blog-card__header">
            <img class="blog-card__profile" src="/assets/img.png">
            <span class="blog-card__username">@{{ blog.user.username }}</span>
            <span class="blog-card__date">{{ dateFormat }}</span>
        </div>

        <img class="blog-card__image" src="/assets/luca-bravo-O453M2Liufs-unsplash.jpg">

        <div class="blog-card__body">
            <h1 class="blog-card__title">{{ blog.title }}</h1>

            <p class="blog-card__text">{{ blog.body }}</p>

            <button class="blog-card__button">Lees verder</button>


        </div>
    </div>
</template>

<script>
export default {
    name: 'BlogCardComponent',

    props: {
        blog: {
            type: Object,
            required: true
        }
    },

    computed: {
        dateFormat() {
            return new Date(this.blog.created_at).toLocaleDateString('nl-NL', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            })
        }
    }
}
</script>
