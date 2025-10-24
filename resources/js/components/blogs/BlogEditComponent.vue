<template>
    <div class="blog-edit">
        <page-layout class="--edit" content-class="--edit" sidebar-class="--edit">
            <template #default>
                <main class="blog-edit__container">
                    <h1 class="blog-edit__title">Blog bewerken</h1>

                    <form class="blog-edit__form" @submit.prevent="handleUpdateBlog">
                        <div class="blog-edit__field">
                            <base-input-component
                                v-model="blog.title"
                                class="blog-edit__input"
                                label="Titel van de blog"
                            />
                        </div>

                        <div class="blog-edit__field">
                            <base-textarea-component
                                v-model="blog.introduction"
                                class="blog-edit__textarea --introduction"
                                label="Bewerk hier de introductie..."
                                maxlength="255"
                            />
                        </div>

                        <div class="blog-edit__field">
                            <base-input-component
                                v-model="blog.paragraph_title"
                                class="blog-edit__input"
                                label="Titel van de paragraaf"
                            />
                        </div>

                        <div class="blog-edit__field">
                            <base-textarea-component
                                v-model="blog.paragraph_body"
                                class="blog-edit__textarea --paragraph"
                                label="Bewerk hier de paragraaf..."
                            />
                        </div>

                        <div class="blog-edit__categories">
                            <label class="blog-edit__label --categories">Categorieën</label>
                            <div v-for="category in categories" :key="category.id" class="blog-edit__checkbox">
                                <input
                                    :id="category.id"
                                    v-model="blog.category_id"
                                    :value="category.id"
                                    class="blog-edit__checkbox-input"
                                    type="checkbox"
                                />
                                <label
                                    :for="category.id"
                                    class="blog-edit__label --checkbox"
                                >
                                    {{ category.name }}
                                </label>
                            </div>
                        </div>

                        <div class="blog-edit__file">
                            <input
                                class="blog-edit__file-input"
                                type="file"
                                @change="selectedFile($event)"
                            />
                        </div>

                        <div class="blog-edit__buttons">
                            <base-button-component
                                buttonClass="--submit"
                                class="blog-edit__button"
                                type="submit"
                            >
                                Opslaan
                            </base-button-component>

                            <base-button-component
                                buttonClass="--cancel"
                                class="blog-edit__button"
                                @click="handleOnCancel"
                            >
                                Annuleren
                            </base-button-component>
                        </div>
                    </form>
                </main>
                <transition>
                    <div
                        v-if="showMessage"
                        :class="[
                            'blog-edit__message',
                            'fade',
                             isSuccess ? 'blog-edit__message--success' : 'blog-edit__message--error'
                             ]"
                    >
                        {{ serverMessage }}
                    </div>
                </transition>
            </template>
        </page-layout>
    </div>
</template>

<script>
import PageLayout from "@/components/PageLayout.vue";
import BaseInputComponent from "@/components/forms/BaseInputComponent.vue";
import BaseButtonComponent from "@/components/forms/BaseButtonComponent.vue";
import BaseTextareaComponent from "@/components/forms/BaseTextareaComponent.vue";
import ErrorComponent from "@/components/general/ErrorComponent.vue";
import {mapActions, mapGetters} from "vuex";

export default {
    name: "BlogEditComponent",

    components: {
        ErrorComponent,
        PageLayout,
        BaseInputComponent,
        BaseButtonComponent,
        BaseTextareaComponent,
    },

    props: {
        blogId: {
            type: Number,
            required: true,
        },
    },

    data() {
        return {
            blog: {
                title: "",
                introduction: "",
                category_id: [],
                paragraph_title: "",
                paragraph_body: "",
                banner: null,
            },
            showMessage: false,
            isSuccess: false,
            serverMessage: '',
        };
    },

    computed: {
        ...mapGetters('blog', ['categories', 'test']),
        ...mapGetters('auth', ['getErrors'])
    },

    created() {
        this.fetchCategories();
        this.fetchBlog();
        this.clearErrors();
    },

    methods: {
        ...mapActions('blog', ['fetchCategories', 'updateBlog']),
        ...mapActions('auth', ['clearErrors']),
        /**
         * Fetches a blog by its ID.
         */
        async fetchBlog() {
            try {
                const data = await this.$store.dispatch('blog/fetchBlog', this.blogId);
                this.blog = {
                    title: data.title,
                    introduction: data.introduction,
                    category_id: data.category_id || [],
                    paragraph_title: data.paragraph_title,
                    paragraph_body: data.paragraph_body,
                    banner: null,
                };
            } catch (error) {
                console.error(error);
            }
        },
        /**
         * Handles the file input change event.
         *
         *  @param {Event} event
         */
        selectedFile(event) {
            this.blog.banner = event.target.files[0];
        },
        /**
         * Handles the edit of the blog
         *
         * @returns {Promise<void>}
         */
        async handleUpdateBlog() {
            try {
                await this.$store.dispatch('blog/updateBlog', {id: this.blogId, blog: this.blog});
                this.isSuccess = true;
                this.serverMessage = 'Blog updated successfully!';
                this.showMessage = true;

                setTimeout(() => {
                    this.showMessage = false;
                    this.$router.push({name: "Home"});
                }, 3000);
            } catch (error) {
                if (error.status === 422 || error.response.data.errors) {
                    this.isSuccess = false;
                    this.showMessage = true;
                    this.serverMessage = 'Failed to update blog';

                    setTimeout(() => {
                        this.showMessage = false;
                    }, 3000);
                }
            }
        },
        /**
         * Handles the cancel button.
         * Navigates the user back to the home page.
         *
         * @returns {void}
         */
        handleOnCancel() {
            this.$router.push({name: "Home"});
        },
    },
};
</script>
