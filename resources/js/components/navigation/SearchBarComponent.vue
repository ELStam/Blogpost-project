<template>
    <div class="search-bar">
        <input
            v-model="input"
            :placeholder="placeholder"
            class="search-bar__input"
            type="text"
            @keyup.enter="onEnter"
        />
    </div>
</template>

<script>
export default {
    name: "SearchBarComponent",
    props: {
        placeholder: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            input: '',
        };
    },
    methods: {
        /**
         * Emit the current input value to the parent when Enter is pressed
         */
        onEnter() {
            this.$emit('search', this.input);
        }
    }
};
</script>
