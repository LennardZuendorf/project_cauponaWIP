import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import de from 'vuetify/lib/locale/de';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#76B900',
        secondary: '#5DADEC',
        accent: '#FFDC5D',
        error: '#FF5F00',
        info: '#5DADEC',
        success: '#76B900',
        warning: '#FFDC5D',
        background: '#F5F5F5',
        background2: '#AFAFAF',
        grey: '#D1D1D1'
      },
      dark: {
        primary: '#76B900',
        secondary: '#5DADEC',
        accent: '#FFDC5D',
        error: '#FF5F00',
        info: '#5DADEC',
        success: '#76B900',
        warning: '#FFDC5D',
        background: '#5A5A5A',
        background2: '#F5F5F5',
        grey: '#AFAFAF'
      }
    },
  },
    lang: {
      locales: { de },
      current: 'de',
    },
});
