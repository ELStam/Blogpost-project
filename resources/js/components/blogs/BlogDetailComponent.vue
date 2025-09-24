<template>
    <div v-if="blog" class="blog-detail">
        <header class="blog-detail__header">
            <img class="blog-detail__banner" src="/assets/lukas-blazek-GnvurwJsKaY-unsplash.jpg"/></header>
        <page-layout class="--home" content-class="--detail" sidebar-class="--detail">
            <template #sidebar>
                <profile-photo-component
                    alt="Profile photo of the blogger"
                    class="--blog"
                    src="/assets/img.png"
                />

                <div class="blog-detail__items">
                    <h3 class="blog-detail__more">
                        Meer van deze blogger
                    </h3>

                    <blog-item-component :blog="blog"/>
                    <blog-item-component :blog="blog"/>
                </div>
            </template>

            <template #default>
                <main class="blog-detail__content">
                    <section class="blog-post">

                        <div class="blog-post__header">
                            <button
                                v-for="category in blog.categories"
                                class="blog-post__button"
                            >
                                {{ category.name }}
                            </button>
                            <span
                                class="blog-post__time"
                            >
                                {{ dateFormat }}
                            </span>

                            <icon-component
                                :blog="blog"
                            />
                        </div>
                        <h1 class="blog-detail__title">
                            {{ blog.title }}
                        </h1>

                        <span class="blog-detail__introduction">
                            {{ blog.introduction }}
                        </span>

                        <div class="blog-post__content">
                            <h4 class="blog-post__title">
                                {{ blog.paragraph_title }}
                            </h4>

                            <p class="blog-post__paragraph">
                                {{ blog.paragraph_body }}
                            </p>
                        </div>

                        <div class="blog-post__images">
                            <img
                                alt="Man in a boat"
                                class="blog-post__image"
                                src="/assets/rolands-varsbergs-miKmVyq3qhE-unsplash.jpg"
                            >

                            <img
                                alt="A hand holding a Samsung memory chip"
                                class="blog-post__image"
                                src="/assets/samsung-memory-IfFP9JT-a4s-unsplash.jpg"
                            >

                            <h4 class="blog-post__title">
                                {{ blog.paragraph_title }}
                            </h4>

                            <p class="blog-post__paragraph">
                                {{ blog.paragraph_body }}
                            </p>
                        </div>
                    </section>
                </main>
            </template>
        </page-layout>
    </div>
</template>


<script>
import {mapActions, mapGetters} from "vuex";
import ProfilePhotoComponent from "@/components/general/ProfilePhotoComponent.vue";
import IconComponent from "@/components/general/IconComponent.vue";
import BlogSubCardComponent from "@/components/blogs/BlogItemComponent.vue";
import BlogItemComponent from "@/components/blogs/BlogItemComponent.vue";
import CategoryComponent from "@/components/navigation/CategoryComponent.vue";
import PageLayout from "@/components/PageLayout.vue";
import BlogListComponent from "@/components/blogs/BlogListComponent.vue";
import CreateBlogComponent from "@/components/blogs/CreateBlogComponent.vue";

export default {
    name: 'BlogDetailComponent',
    components: {
        CreateBlogComponent,
        BlogListComponent,
        PageLayout,
        CategoryComponent,
        BlogItemComponent, BlogSubCardComponent, IconComponent, ProfilePhotoComponent
    },
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
