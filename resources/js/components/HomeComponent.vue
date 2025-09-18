<template>
    <div class="home">
        <!-- LINKS: Sidebar -->
        <aside class="home-sidebar">
            <h3>Categorieën</h3>
            <ul class="home-sidebar_categories">
                <li
                    v-for="cat in categories"
                    :key="cat.id"
                    :class="cat.class"
                >
                    <button :class="{
            'btn-primary': cat.name === 'Alle blogs',
            'btn-secondary': cat.name !== 'Alle blogs' && cat.name !== 'Bekijk alle categorieën',
            'btn-tertiary': cat.name === 'Bekijk alle categorieën'}">
                        {{ cat.name }}
                    </button>
                </li>
            </ul>
            <div class="top-posts">Top Posts</div>
        </aside>

        <main class="main-content">
            <!-- Blog invoerveld (avatar + input) -->
            <section class="blog-input">
                <img
                    alt="user avatar"
                    class="avatar"
                    src="/assets/tyler-nix-PQeoQdkU9jQ-unsplash.jpg"
                />
                <input
                    v-model="newBlog"
                    placeholder="Schrijf een blog..."
                    type="text"
                    @keyup.enter="postBlog"
                />
            </section>
        </main>

        <!-- RECHTS: ruimte voor extra content -->
        <aside class="rightbar"></aside>
    </div>
</template>

<script>

export default {
    name: "HomeComponent",
    data() {
        return {
            categories: [
                {id: 1, name: "Alle blogs", class: "alle"},
                {id: 2, name: "Creativiteit", class: "creativiteit"},
                {id: 3, name: "Cultuur", class: "cultuur"},
                {id: 4, name: "Eten", class: "eten"},
                {id: 5, name: "Lifestyle", class: "lifestyle"},
                {id: 6, name: "Muziek", class: "muziek"},
                {id: 7, name: "Bekijk alle categorieën", class: "bekijk"},
            ],
            newBlog: "",
            posts: [],
        };
    },
    methods: {
        postBlog() {
            const text = this.newBlog && this.newBlog.trim();
            if (!text) return;
            this.posts.unshift(text);
            this.newBlog = "";
        },
    },
};
</script>
