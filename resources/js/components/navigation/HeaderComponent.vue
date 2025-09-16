<template>
    <div class="app-blog-header">
        <img class="app-blog-header__logo" height="30" src="/assets/writing-wit.png" width="30"/>
        <h1 class="app-blog-header__title">BLOG.</h1>
        <nav class="app-blog-header__nav">
            <router-link class="app-blog-header__link" to="/">Home</router-link>
            <router-link :to="{name: 'UserList'}" class="app-blog-header__link">Users</router-link>
            <router-link class="app-blog-header__link" to="/ontdek">Ontdek</router-link>
            <router-link class="app-blog-header__link" to="/volgend">Volgend</router-link>
            <router-link class="app-blog-header__link" to="/categorieen">Categorieën</router-link>
            <router-link class="app-blog-header__link" to="/TopPosts">Top Posts</router-link>
            <router-link :to="{ name: 'Login'}" class="app-blog-header__link">
                <img class="app-blog-header__profile" src="/assets/img.png">
            </router-link>
        </nav>
    </div>
</template>
<script>
export default {
    name: 'HeaderComponent'
}
</script>
