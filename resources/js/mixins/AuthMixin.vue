<script>
import Cookies from 'js-cookie'

export default {
    computed: {
        isAuthenticated() {
            return !!Cookies.get('auth_token')
        }
    },

    methods: {
        getAuthToken() {
            return Cookies.get('auth_token') || null
        }
    }
}
</script>
