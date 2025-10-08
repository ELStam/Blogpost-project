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
            <span class="blog-card__text">{{ blog.introduction }}</span>

            <router-link :to="{ name: 'BlogDetail', params: { id: blog.id }}">
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

                <div
                    v-for="comment in comments"
                    :key="comment.id"
                    class="blog-card-comment__item"
                >
                    <comment-component
                        :blog="blog"
                        :comment-id="comment.id"
                        :text="comment.body"
                        :user="comment.user"
                        @deleteComment="deleteComment"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProfilePhotoComponent from "@/components/general/ProfilePhotoComponent.vue";
import IconComponent from "@/components/general/IconComponent.vue";
import DateFormatMixin from "@/mixins/DateFormatMixin.vue";
import {mapActions} from 'vuex';
import CommentComponent from "@/components/blogs/CommentComponent.vue";
import CommentService from "@/services/modules/CommentService.js";

export default {
    name: 'BlogCardComponent',

    mixins: [DateFormatMixin],
    components: {CommentComponent, IconComponent, ProfilePhotoComponent},

    props: {
        blog: {type: Object, required: true}
    },

    data() {
        return {
            newComment: '',
            comments: []
        };
    },

    computed: {
        /**
         * Formats the Banner URL for proper viewing
         *
         * @returns {string}
         */
        bannerUrl() {
            return this.blog.banner
                ? `/storage/${this.blog.banner}`
                : '/assets/lukas-blazek-GnvurwJsKaY-unsplash.jpg';
        }
    },

    async mounted() {
        try {
            this.comments = await CommentService.getAllComments(this.blog.id);
        } catch (error) {
            console.error("Failed to load comments:", error);
        }
    },

    methods: {
        ...mapActions('blog', ['removeBlog']),
        ...mapActions('comment', ['removeComment']),

        /**
         * Handles the deletion of the blog.
         * It calls the 'removeBlog' action with the blog's id.
         *
         * @returns {void}
         */
        handleDelete() {
            this.removeBlog(this.blog.id)
                .then(() => alert('Blog deleted successfully'))
                .catch(err => console.error(err));
        },
        /**
         * Submits a new comment for the current blog.
         *
         * @return {Promise<void>}
         */
        async submitComment() {
            if (!this.newComment.trim()) return;
            try {
                const comment = await CommentService.addComment(this.blog.id, this.newComment);
                this.comments.push(comment);
                this.newComment = '';
            } catch (error) {
                console.error("Error adding comment:", error);
            }
        },
        /**
         * Deletes a comment for a given blog.
         *
         * @param blogId
         * @param commentId
         */
        deleteComment({blogId, commentId}) {
            this.removeComment({blogId, commentId})
                .then(() => {
                    this.comments = this.comments.filter(c => c.id !== commentId);
                    alert('Comment deleted successfully');
                })
                .catch(err => {
                    console.error('Failed to delete comment:', err);
                    alert('Could not delete comment.');
                });
        }
    }
}
</script>
