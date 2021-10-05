import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
            customProperties: true,
        },
        themes: {
            light: {
                primary: '#7CB342',
                secondary: '#29B6F6',
                accent: '#FFEE58',
                error: '#FF8F00',
                info: '#0277BD',
                success: '#558B2F',
                warning: '#F9A825',
                background: '#FAFAFA',
                background2: '#E0E0E0',
                grey: '#616161'
            },
            dark: {
                primary: '#558B2F',
                secondary: '#0277BD',
                accent: '#F9A825',
                error: '#FF8F00',
                info: '#29B6F6',
                success: '#7CB342',
                warning: '#FFEE58'',
                background: '#424242',
                background2: '#616161',
                grey: '#E0E0E0'
            }
        },
    }
});
