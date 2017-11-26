<template>
    <div>
        <button ref="incrementButton" class="increment-button" @click="onIncrementButtonClick()">{{ text.increment_text }}</button>
        <button ref="decrementButton" class="decrement-button" @click="onDecrementButtonClick()">{{ text.increment_text }}</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: {
                increment_text: "Click to increment counter",
                decrement_text: "Click to decrement counter",
            }
        }
    },
    methods: {
        onIncrementButtonClick() {
            this.$emit('incrementButtonHasBeenClicked')
        },
        onDecrementButtonClick() {
            this.$emit('decrementButtonHasBeenClicked')
        },
    }
}
</script>
