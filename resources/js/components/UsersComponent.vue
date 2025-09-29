<template>
    <div class="users">
        <div
            v-for="user in users"
            :key="user.id"
            class="users-info"
        >
            <h3 class="users-info__username">@{{ user.username }}</h3>
            <span class="users-info__name">{{ user.name }}</span>
            <span class="users-info__followers">{{ user.followers }} volgers</span>

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
