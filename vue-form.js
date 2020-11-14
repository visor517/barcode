new Vue ({
    el: '#vue-form',
    data: {
        input: {
            id: 'ezeb2fve0b',
            code: 10,
            message: '404 Error coffee not found'
        },
        isIdError: Boolean,
        isCodeError: Boolean
    },
    methods: {
        vueBarcode() {
            renderBarcode(this.input);
        }
    }
})