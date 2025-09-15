<template>
    <div class="home">
        <aside class="sidebar">
            <h3>Categorieën</h3>
            <ul class="categories">
                <li v-for="cat in data.categories" :key="cat.id">
                    <button>{{ cat.name }}</button>
                </li>
            </ul>
        </aside>
    </div>
</template>

<script>
import axios from "axios";


export default {
    name: "HomeComponent",
    data() {
        return {
            data: {
                categories: [],
            }
        };
    },
};
</script>
