<template>
    <div class="app-blog">
        <header-component/>
        <div class="app-blog-body">
            <router-view></router-view>
        </div>

        <footer-component/>
    </div>
</template>

<script>
import HeaderComponent from "@/components/navigation/HeaderComponent.vue";
import FooterComponent from "@/components/navigation/FooterComponent.vue";

export default {
    name: 'App',
    components: {FooterComponent, HeaderComponent}
}
</script>

<style lang="scss" src="../scss/_app.scss"></style>
