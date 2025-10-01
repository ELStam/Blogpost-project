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

            <div class="blog-card-comment">
                <input
                    v-model="newComment"
                    class="blog-card-comment__input"
                    placeholder="Schrijf een opmerking..."
                    type="text"
                    @keyup.enter="submitComment"
                />

                <div v-for="(comment, index) in comments" :key="index">
                    <comment-component :text="comment.text" :user="comment.user"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProfilePhotoComponent from "@/components/general/ProfilePhotoComponent.vue";
import IconComponent from "@/components/general/IconComponent.vue";
import DateFormatMixin from "@/mixins/DateFormatMixin.vue";
import {mapActions, mapGetters} from "vuex";
import CommentComponent from "@/components/blogs/CommentComponent.vue";

export default {
    name: 'BlogCardComponent',

    mixins: [DateFormatMixin],
    components: {CommentComponent, IconComponent, ProfilePhotoComponent},

    props: {
        blog:
            {type: Object, required: true}
    },

    data() {
        return {
            newComment: '',
            comments: []
        };
    },

    computed: {
        /**
         * Returns the correct banner URL for display.
         * If the blog has a banner, it will use the storage path.
         * Otherwise, this default image is used.
         *
         * @returns {string}
         */
        bannerUrl() {
            return this.blog.banner ? `/storage/${this.blog.banner}` : '/assets/lukas-blazek-GnvurwJsKaY-unsplash.jpg';
        },

        ...mapGetters('user', ['currentUser'])
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
        },

        /**
         * Submits a new comment.
         * Uses the currently logged-in user's username.
         */
        submitComment() {
            if (!this.newComment.trim()) return;

            const username = this.currentUser.username;

            this.comments.push({
                text: this.newComment,
                user: {username}
            });

            this.newComment = '';
        }
    }
}
</script>
