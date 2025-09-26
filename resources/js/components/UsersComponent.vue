<template>
    <div class="following__blog__friends">
        <div
            v-for="user in users"
            :key="user.id"
            class="following__blog__friends__item"
        >
            <h3 class="following__blog__friends__item-title">@{{ user.username }}</h3>
            <span class="following__blog__friends__item-name">{{ user.name }}</span>
            <span class="following__blog__friends__item-followers">{{ user.followers }} volgers</span>

        </div>
    </div>
</template>

<script>
export default {
    name: "UsersComponent",

    props: {
        users: {
            type: Array,
            required: true,
        },
    },
};
</script>
