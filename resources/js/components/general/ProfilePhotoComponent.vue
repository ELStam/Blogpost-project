<template>
    <div class="profile-photo">
        <img
            :alt="alt"
            :class="photoClass"
            :src="src"
            class="profile-photo__image"
            v-bind="$attrs"
            @click="handleClick"
        />
    </div>
</template>

<script>
export default {
    name: 'ProfilePhotoComponent',

    inheritAttrs: false,

    props: {
        src: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            default: 'Profile Photo'
        },
        photoClass: {
            type: String,
            default: ''
        }
    },

    methods: {
        handleClick() {
            this.$emit('profile-clicked')
        }
    }
}
</script>
