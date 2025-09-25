<template>
    <div class="base-textarea">
        <textarea
            :placeholder="label"
            :value="modelValue"
            class="base-textarea__input"
            v-bind="$attrs"
            @input="handleTextArea($event.target.value)"
        />
    </div>
</template>
<script>
export default {
    name: 'BaseTextAreaComponent',

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
        handleTextArea(event) {
            this.$emit('update:modelValue', event)
        }
    }
}
</script>
