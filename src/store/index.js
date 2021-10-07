import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import router from 'router';

Vue.use(Vuex)

export default new Vuex.Store({

        state: {
            selectedMenu:[],
            selectedCafeteria: null,
            closeCafeterias:[],
            cafeterias: [],
            userLocation: [],
            favoriteCafeteria: [],
            favoriteFood: [],
            apiUrl: "https://openmensa.org/api/v2/canteens/",
            user: null,
            isAuthenticated: false
        },

        mutations: {

            setUser(state, payload) {
                state.user = payload;
            },

            setIsAuthenticated(state, payload) {
                state.isAuthenticated = payload;
            },

            setCafeterias(state, payload){
                state.cafeterias = payload;
            },

            setMenu(state, payload){
              state.selectedMenu = payload;
            },

            selectCafeteria(state, payload){
              state.selectedCafeteria = payload;
            },

            setCloseCafeterias(state, payload){
              state.closeCafeterias = payload;
            },

            setUserLocation(state, payload){
                state.userLocation.lng = payload.lng;
                state.userLocation.lat = payload.lat
            }

        },

        actions: {

            userRegister({ commit }, { email, password }) {
              firebase
                  .auth()
                  .createUserWithEmailAndPassword(email, password)
                  .then(user => {
                    commit('setUser', user);
                    commit('setIsAuthenticated', true);
                  })
                  .catch(() => {
                    commit('setUser', null);
                    commit('setIsAuthenticated', false);
                  });
              router.push('/home');
            },

            userLogin({ commit }, { email, password }) {
              firebase
                  .auth()
                  .signInWithEmailAndPassword(email, password)
                  .then(user => {
                    commit('setUser', user);
                    commit('setIsAuthenticated', true);
                  })
                  .catch(() => {
                    commit('setUser', null);
                    commit('setIsAuthenticated', false);
                  });
              router.push('/home');
            },

           async loadMenu({ state, commit }, date) {

               let url = `${state.apiUrl}` + `${state.selectedCafeteria}`+"/days/"+date+"/meals"

                try {
                    let response = await axios.get(url);
                    commit('setMenu', response.data);
                } catch (error) {
                    commit('setMenu', []);
                }
            },

            async loadCafeterias({ state, commit }) {

                try {
                    let response = await axios.get(`${state.apiUrl}`);
                    commit('setCafeterias', response.data);
                } catch (error) {
                    commit('setCafeterias', []);
                }
            },

            async getCloseCafeterias({ state, commit }) {
                let payload;

                navigator.geolocation.getCurrentPosition(
                    position => {
                        payload.lat = position.coords.latitude;
                        payload.lng = position.coords.longitude;

                        commit('setUserLocation', payload);
                    },
                    error => {
                        payload.lat = 52.492681;
                        payload.lng = 13.524759;

                        commit('setUserLocation', payload);
                    })


                let url = `${state.apiUrl}`+"near[lat]="+`${state.userLocation.lat}`+"&near[lng]="+`${state.userLocation.lng}`+"&near[dist]=7"

                try {
                    let response = await axios.get(url);
                    commit('setCloseCafeterias', response.data);
                } catch (error) {
                    commit('setCloseCafeterias', []);
                }
            },

            saveSelectedCafeteria({commit}, id){
                commit('selectCafeteria', id);
            },

            loadFavorites() {
              //TODO Add API call to Call Favorites from Firebase

            },

            saveFavorites(){
              //TODO Add function that saves favorites to Firebase
            }
          },

    modules: {

    }
})
