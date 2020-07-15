import Vue from 'vue'
import VueToasted from 'vue-toasted'

Vue.use( VueToasted, {
    duration: 5000,
    theme: "bubble",
    position: "top-right",
    singleton : true,
    keepOnHover: true
});

Vue.toasted.register('info',
    (payload) => {

        if(! payload.message) {
            return "Success";
        }

        return "<i class='fa fa-check'></i> <span class='ml-1'>"+ payload.message+"</span>";
    },
    {
        type : 'info'
    }
);

Vue.toasted.register('error',
    (payload) => {

        if(! payload.message) {
            return "Success";
        }

        return "<i class='fa fa-exclamation'></i> <span class='ml-1'>"+ payload.message+"</span>";
    },
    {
        type : 'error'
    }
);
