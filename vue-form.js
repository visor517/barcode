new Vue ({
    el: '#vue-form',
    data: {
        id: 'ezeb2fve0b',
        code: 10,
        message: '404 Error coffee not found',
        id_status: true
    },
    methods: {
        checkForm() {
            if (this.id.length != 10) this.id_status = false;
            else renderBarcode();
        }
    }
})