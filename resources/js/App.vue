<template>
    <div id="app">
        <header>
            <h1>Blog App</h1>
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