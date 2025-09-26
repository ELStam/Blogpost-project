<template>
    <div v-if="flatErrors.length > 0" class="error">
        <ul class="error__list">
            <li v-for="error in flatErrors" class="error__item">
                {{ error }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "ErrorComponent",

    props: {
        errors: {
            type: Object,
            default: ({})
        }
    },

    computed: {
        /**
         * Returns all errors as a flat array of strings.
         * If the error is an object, then it collects the values and flatten.
         * If the error is a string, then it wraps it in an array.
         *
         * @returns {string[]}
         */
        flatErrors() {
            if (typeof this.errors === "object" &&
                this.errors !== null) {
                return Object.values(this.errors).flat()
            }

            return this.errors
        }
    }
}
</script>

