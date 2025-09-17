<template>
    <div id="app">
        <header>
            <img height="30" src="/assets/writing-wit.png" width="30"/>
            <h1>BLOG.</h1>
            <nav>
                <router-link to="/">Home</router-link>
                <router-link :to="{name: 'UserList'}">Users</router-link>
                <router-link to="/ontdek">Ontdek</router-link>
                <router-link to="/volgend">Volgend</router-link>
                <router-link to="/categorieen">Categorieën</router-link>
                <router-link to="/TopPosts">Top Posts</router-link>
                <router-link to="/profiel">Profiel</router-link> <!-- wordt later aangepast met eigen profielfoto -->
            </nav>
        </header>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style lang="scss" src="../scss/_app.scss"></style>

