<template>
    <div class="blog-card">
        <div class="blog-card__header">
            <profile-photo-component
                alt="Profile photo"
                class="--card"
                src="/assets/img.png"
            />
            <span class="blog-card__username">@{{ blog.user.username }}</span>
            <span class="blog-card__date">{{ dateFormat }}</span>
            <icon-component :blog="blog"/>
        </div>

        <img alt="" class="blog-card__image" src="/assets/lukas-blazek-GnvurwJsKaY-unsplash.jpg">

        <div class="blog-card__body">
            <h2 class="blog-card__title">{{ blog.title }}</h2>

            <p class="blog-card__text">{{ blog.introduction }}</p>

            <router-link :to="{ name: 'BlogDetail', params: {id: blog.id}}">
                <button class="blog-card__button">Lees verder</button>
            </router-link>
        </div>
    </div>
</template>

<script>
import ProfilePhotoComponent from "@/components/general/ProfilePhotoComponent.vue";
import IconComponent from "@/components/general/IconComponent.vue";

export default {
    name: 'BlogCardComponent',
    components: {IconComponent, ProfilePhotoComponent},

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
