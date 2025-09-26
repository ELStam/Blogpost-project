<template>
    <div class="base-button">
        <button
            :class="buttonClass"
            class="base-button__button"
            v-bind="$attrs"
            v-on="$listeners"
        >
            <slot/>
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
        }
    }
}
</script>
