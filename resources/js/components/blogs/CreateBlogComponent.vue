<template>
    <div class="blog-create">
        <page-layout class="--create" content-class="--create" sidebar-class="--create">
            <template #default>
                <main class="blog-create__container">
                    <h1 class="blog-create__title">Nieuwe blog aanmaken</h1>

                    <error-component :errors="getErrors"/>

                    <form class="blog-create__form" @submit.prevent="handleCreateBlog">
                        <div class="blog-create__field">
                            <base-input-component
                            class="blog-create__input"
                            label="Titel van de blog"
                            v-model="blog.title"
                            />
                        </div>

                        <div class="blog-create__field">
                            <base-textarea-component
                            class="blog-create__textarea --introduction"
                            label="Schrijf hier een korte introductie..."
                            v-model="blog.introduction"
                            maxlength="255"
                            />
                        </div>

                        <div class="blog-create__field">
                            <base-input-component
                            class="blog-create__input"
                            label="Titel van de paragraaf"
                            v-model="blog.paragraph_title"
                            />
                        </div>

                        <div class="blog-create__field">
                            <base-textarea-component
                            class="blog-create__textarea --paragraph"
                            label="Schrijf hier een paragraaf..."
                            v-model="blog.paragraph_body"
                            />
                        </div>

                        <div class="blog-create__categories">
                            <label class="blog-create__label --categories">Categorieën</label>
                            <div class="blog-create__checkbox" v-for="category in categories" :key="category.id">
                            <input
                                class="blog-create__checkbox-input"
                                type="checkbox"
                                :id="category.id"
                                :value="category.id"
                                v-model="blog.category_id"
                            />
                            <label
                                class="blog-create__label --checkbox"
                                :for="category.id"
                            >
                                {{ category.name }}
                            </label>
                            </div>
                        </div>

                        <div class="blog-create__file">
                            <input
                            class="blog-create__file-input"
                            type="file"
                            @change="selectedFile($event)"
                            />
                        </div>
                        <div class="blog-create__buttons">
                            <base-button-component
                                class="blog-create__button"
                                buttonClass="--submit"
                                type="submit"
                            >
                                Aanmaken
                            </base-button-component>

                            <base-button-component
                                class="blog-create__button"
                                buttonClass="--cancel"
                                @click="handleOnCancel"
                            >
                                Annuleren
                            </base-button-component>
                        </div>  
                        </form>
                </main>
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
    name: "BlogCreateComponent",

    components: {
        PageLayout,
        BaseInputComponent,
        BaseButtonComponent,
        BaseTextareaComponent,
    },

    data() {
        return {
            blog: {
                'title': '',
                'introduction': '',
                'category_id': [],
                'paragraph_title': '',
                'paragraph_body': '',
                'banner': null
            }
        }
    },

    computed: {
        ...mapGetters('blog', ['categories']),
        ...mapGetters('auth', ['getErrors'])
    },

    created() {
        this.fetchCategories()
        this.clearErrors()
    },

    methods: {
        ...mapActions('blog', ['fetchCategories', 'createBlog']),
        ...mapActions('auth', ['clearErrors']),

        /**
         * 
         * Handles the file input change event.
         *
         *  @param {Event} event
         */
        selectedFile(event) {
            this.blog.banner = event.target.files[0];
        },

        /**
         * Handle the creation of a new blog
         * 
         * @returns {Promise<void>}
         */
        async handleCreateBlog() {
            try {
                await this.clearErrors()
                await this.createBlog(this.blog)

                if (Object.keys(this.getErrors).length === 0) {
                    this.$router.push({ name: 'Home'} )
                }
            } catch (error) {
                throw error
            }
        },

        /**
         * Handles the cancel button.
         * Navigates the user back to the home page.
         * 
         * @returns {void}
         */
        handleOnCancel() {
            this.$router.push({ name: 'Home'} )
        }
    },
}
</script>
