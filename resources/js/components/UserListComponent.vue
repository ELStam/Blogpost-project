<template>
    <div>
        <h2>Users</h2>
        <ul v-if="isAuthenticated">
            <li v-for="user in users" :key="user.id">
                {{ user.name }} ({{ user.email }})
            </li>
        </ul>

        <div v-else>
            <h1>Not logged in</h1>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import AuthMixin from "@/mixins/AuthMixin.vue";

export default {
    name: "UserList",

    mixins: [AuthMixin],

    computed: {
        ...mapGetters('user', ['allUsers']),
        users() {
            return this.allUsers
        }
    },

    mounted() {
        this.fetchUsers()
    },

    methods: {
        ...mapActions('user', ['setUsers']),
        fetchUsers() {
            this.setUsers()
        }
    }
}
</script>
