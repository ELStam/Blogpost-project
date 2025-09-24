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
        attrsWithoutClass() {
            const {class: _class, ...rest} = this.$attrs
            return rest
        }
    },

    methods: {
        handleClick() {
            this.$emit('profile-clicked')
        }
    }
}
</script>
