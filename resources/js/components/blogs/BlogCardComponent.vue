<template>
    <div class="blog-card">
        <div class="blog-card__header">
            <profile-photo-component
                alt="Profile photo"
                class="--card"
                src="/assets/img.png"
            />
            <span class="blog-card__username">@{{ blog.user.username }}</span>
            <span class="blog-card__date">{{ dateFormat(blog.created_at) }}</span>
            <icon-component :blog="blog" @delete="handleDelete"/>
        </div>

        <img :alt="blog.title" :src="bannerUrl" class="blog-card__image">

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
import DateFormatMixin from "@/mixins/DateFormatMixin.vue";
import {mapActions} from "vuex";

export default {
    name: 'BlogCardComponent',

    mixins: [DateFormatMixin],

    components: {IconComponent, ProfilePhotoComponent},

    props: {
        blog: {
            type: Object,
            required: true
        }
    },

    computed: {
        /**
         * Formats the Banner URL for proper viewing
         *
         * @returns {string}
         */
        bannerUrl() {
            return this.blog.banner ? `/storage/${this.blog.banner}` : '/assets/lukas-blazek-GnvurwJsKaY-unsplash.jpg';
        }
    },

    methods: {
        ...mapActions('blog', ['removeBlog']),

        /**
         * Handles the deletion of the blog.
         * It calls the 'removeBlog' action with the blog's id.
         *
         * @returns {void}
         */
        handleDelete() {
            this.removeBlog(this.blog.id).then(() => {
                alert('Blog deleted successfully')
            }).catch((error) => {
                throw error
            })
        }
    }
}
</script>
