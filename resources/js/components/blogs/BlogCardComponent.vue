<template>
    <div class="blog-card">
        <div class="blog-card__header">
            <img class="blog-card__profile" src="/assets/img.png">
            <span class="blog-card__username">@{{ blog.user.username }}</span>
            <span class="blog-card__date">{{ dateFormat }}</span>
        </div>

        <img class="blog-card__image" src="/assets/lukas-blazek-GnvurwJsKaY-unsplash.jpg" alt="">

        <div class="blog-card__body">
            <h2 class="blog-card__title">{{ blog.title }}</h2>

            <p class="blog-card__text">{{ blog.body }}</p>

            <router-link :to="{ name: 'BlogDetail', params: {id: blog.id}}">
                <button class="blog-card__button">Lees verder</button>
            </router-link>
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
