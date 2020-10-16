new Vue({
    el: '#app10',
    data: {
        stamina: 100,
        ended: false
    },
    methods: {
        punchBag: function() {
            this.stamina -= 10
            
            if( this.stamina <= 0 ) {
                this.ended = true;
            }
        },
        resetStamina: function() {
            this.stamina = 100
            this.ended = false
        }
    },
    computed: {
        
    },
})