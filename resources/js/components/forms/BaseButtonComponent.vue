<template>
    <div class="base-button">
        <button
            :class="buttonClass"
            :type="type"
            class="base-button__button"
            v-bind="$attrs"
            v-on="$listeners"
        >
            <slot></slot>
        </button>
    </div>
</template>

<script>
export default {
    name: 'BaseButtonComponent',

    inheritAttrs: false,

    props: {
        buttonClass: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'button'
        }
    }
}
</script>
