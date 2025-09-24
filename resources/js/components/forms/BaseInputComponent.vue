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
        handleInput(event) {
            this.$emit('update:modelValue', event)
        }
    }
}
</script>
