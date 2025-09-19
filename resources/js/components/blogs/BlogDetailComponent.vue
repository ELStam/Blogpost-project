<template>
    <div>
        <h1>Blog detail van ID: {{ id }}</h1>
        <div v-if="blog">
            <h2>{{ blog.title }}</h2>
            <p>{{ blog.body }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BlogDetailComponent',
    props: ['id'],

    data() {
        return {
            blog: null
        }
    },

    created() {
        // Blog ophalen
    }
}
</script>
