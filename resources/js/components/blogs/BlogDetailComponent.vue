<template>
    <div v-if="blog" class="blog-detail">
        <div class="blog-detail__header">
            <img class="blog-detail__banner" src="/assets/lukas-blazek-GnvurwJsKaY-unsplash.jpg"/>
        </div>

        <div class="blog-detail__body">
            <aside class="blog-detail__sidebar">
                <profile-photo-component
                    alt="Profile photo of the blogger"
                    class="--blog"
                    src="/assets/img.png"
                />
                <article class="blog-detail__blogs">
                    <h3 class="blog-detail__information">Meer van deze blogger</h3>

                    <blog-item-component :blog="blog"/>
                </article>
            </aside>

            <section class="blog-detail__post">
                <div class="blog-detail__buttons">
                    <button
                        v-for="category in blog.categories"
                        class="blog-detail__button">{{ category.name }}
                    </button>
                    <span
                        class="blog-detail__time"
                    >
                        {{ dateFormat }}
                    </span>
                    <icon-component
                        :blog="blog"
                    />
                </div>

                <h1 class="blog-detail__title">{{ blog.title }}</h1>

                <p class="blog-detail__introduction"> {{ blog.introduction }}</p>

                <div class="blog-detail__content">
                    <h4 class="blog-detail__paragraph-title">
                        {{ blog.paragraph_title }}
                    </h4>

                    <p class="blog-detail__paragraph-body">
                        {{ blog.paragraph_body }}
                    </p>

                    <div class="blog-detail__images">
                        <img
                            alt="A man in a boat"
                            class="blog-detail__image"
                            src="/assets/rolands-varsbergs-miKmVyq3qhE-unsplash.jpg"
                        />
                        <img
                            alt="A man in a boat"
                            class="blog-detail__image"
                            src="/assets/samsung-memory-IfFP9JT-a4s-unsplash.jpg"
                        />
                    </div>

                    <h4 class="blog-detail__paragraph-title">
                        {{ blog.paragraph_title }}
                    </h4>

                    <p class="blog-detail__paragraph-body">
                        {{ blog.paragraph_body }}
                    </p>
                </div>
            </section>
        </div>
    </div>
</template>


<script>
import {mapActions, mapGetters} from "vuex";
import ProfilePhotoComponent from "@/components/general/ProfilePhotoComponent.vue";
import IconComponent from "@/components/general/IconComponent.vue";
import BlogSubCardComponent from "@/components/blogs/BlogItemComponent.vue";
import BlogItemComponent from "@/components/blogs/BlogItemComponent.vue";

export default {
    name: 'BlogDetailComponent',
    components: {BlogItemComponent, BlogSubCardComponent, IconComponent, ProfilePhotoComponent},
    props: {
        id: {
            type: String,
            required: true
        }
    },

    computed: {
        ...mapGetters('blog', ['blog']),

        dateFormat() {
            return new Date(this.blog.created_at).toLocaleDateString('nl-NL', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            })
        }
    },

    created() {
        this.fetchBlog(this.id)
    },

    methods: {
        ...mapActions('blog', ['fetchBlog']),
    }
}
</script>
