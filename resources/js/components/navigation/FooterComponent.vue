<template>
    <footer v-if="isAuthenticated" class="app-blog-footer">
        <div class="app-blog-footer__content">
            <h1 class="app-blog-footer__title">blog.</h1>
            <span class="app-blog-footer__contact">Contact</span>
        </div>

    </footer>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: 'FooterComponent',

    computed: {
        ...mapGetters('auth', ['isAuthenticated'])
    },
}
</script>
