<template>
    <div class="app-blog">
        <header-component/>
        <div class="app-blog-body">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import HeaderComponent from "@/components/navigation/HeaderComponent.vue";

export default {
    name: 'App',
    components: {HeaderComponent}
}
</script>

<style lang="scss" src="../scss/_app.scss"></style>
