<template>
    <div class="auth">
        <div class="auth__background">
            <img alt="Writing icon" class="auth__image" src="/assets/writing.png"/>
        </div>
        <div class="auth__container">
            <h1 class="auth__title">{{ title }}</h1>
            <div class="auth__content">
                <slot name="form"></slot>
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AuthLayout",

    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>
