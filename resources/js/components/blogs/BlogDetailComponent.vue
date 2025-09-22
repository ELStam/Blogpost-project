<template>
    <div>
        <h1>Blog detail van ID: {{ id }}</h1>
        <div v-if="getBlog">
            <h2>{{ getBlog.title }}</h2>
            <p>{{ getBlog.body }}</p>
        </div>
    </div>
</template>


<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: 'BlogDetailComponent',
    props: ['id'],

    computed: {
        ...mapGetters('blog', ['getBlog'])
    },

    created() {
        this.fetchBlog(this.id)
    },

    methods: {
        ...mapActions('blog', ['fetchBlog']),
    }
}
</script>
