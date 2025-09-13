<template>
  <div>
    <h2>Users</h2>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} ({{ user.email }})
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "UserList",
  
  computed: {
    ...mapGetters(['allUsers']),
    users() {
       return this.allUsers
    }
  },

  mounted() {
    this.fetchUsers()
  },

  methods: {
    ...mapActions(['setUsers']),
    fetchUsers() {
        this.setUsers()
    }
  }
}
</script>
