<template>
    <div :class="['profile-photo', $attrs?.class]">
        <img
            class="profile-photo__image"
            v-bind="attrsWithoutClass"
            @click="handleClick"
        />
    </div>
</template>

<script>
export default {
    name: 'ProfilePhotoComponent',

    inheritAttrs: false,

    computed: {
        /**
         * Returns all the attributes passed to the component except 'class'.
         * This allows the wrapper 'div' to handle the class while the 'img'
         * receives all the other attributes.
         *
         * @returns {Omit<Data, "class">}
         */
        attrsWithoutClass() {
            const {class: _class, ...rest} = this.$attrs
            return rest
        }
    },

    methods: {
        /**
         * Emits a 'profile-clicked' event when the profile photo is clicked.
         *
         * @returns {void}
         */
        handleClick() {
            this.$emit('profile-clicked')
        }
    }
}
</script>
