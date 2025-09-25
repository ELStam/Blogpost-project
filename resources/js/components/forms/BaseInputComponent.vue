<template>
    <div class="base-input">
        <input
            :placeholder="label"
            :value="modelValue"
            class="base-input__input"
            v-bind="$attrs"
            @input="handleInput($event.target.value)"
        >
    </div>
</template>
<script>
export default {
    name: 'BaseButtonComponent',

    props: {
        label: {
            type: String,
            default: ''
        },
        modelValue: {
            type: [String, Number],
            default: ''
        }
    },

    methods: {
        /**
         * Emits an 'update:modelValue' event with the input value.
         *
         * @param {Event} event
         *
         * @returns {void}
         */
        handleInput(event) {
            this.$emit('update:modelValue', event)
        }
    }
}
</script>
