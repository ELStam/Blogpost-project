<template>
    <div id="app">
        <header>
            <img src="/assets/writing-wit.png" height="30" width="30"/>
            <h1>Blog.</h1>
            <nav>
                <router-link to="/">Home</router-link>
                <router-link :to="{name: 'UserList'}">Users</router-link>
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

