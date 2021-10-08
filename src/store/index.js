import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import router from 'router';

Vue.use(Vuex)

export default new Vuex.Store({

        state: {
            selectedMenu:[],
            selectedCafeteria: [],
            closeCantines:[],
            allCantines: [],
            userLocationLat: [],
            userLocationLng: [],
            favoriteCafeteria: [],
            favoriteFood: [],
            apiUrl: "https://openmensa.org/api/v2/canteens",
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

            setCantines(state, payload){
                state.allCantines = payload;
            },

            setMenu(state, payload){
              state.selectedMenu = payload;
            },

            selectCafeteria(state, payload){
              state.selectedCafeteria = payload;
            },

            setCloseCafeterias(state, payload){
              state.closeCantines = payload;
            },

            setUserLat(state, payload){
                state.userLocationLat = payload;
            },

            setUserLng(state, payload){
                state.userLocationLng = payload;
            }
        },

        actions: {

            loadMenu ({ commit, state }, id) {
                let today = new Date();
                let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

                let url = `${state.apiUrl}`+date+"/days/"+id+"meals"

                axios
                    .get(url)
                    .then(response => response.data)
                    .then(menu => {
                        console.log(menu);
                        commit('setMenu', menu);
                        console.log("menu for selected cantine fetched");
                    })

            },

            loadCafeterias ({ commit, state }) {
                axios
                    .get(`${state.apiUrl}`)
                    .then(response => response.data)
                    .then(cantines => {
                        commit('setCantines', cantines)
                        console.log("all cantines succesfully loaded")
                    })
            },

            //inspired by https://developer.mozilla.org/de/docs/Web/API/Geolocation/getCurrentPosition
            getUserLocation({commit}){
                commit('setUserLat', 52.492681);
                commit('setUserLng', 13.524759);
            },

            /*
            getUserLocation({ state, commit }) {

                function success(pos) {
                    let crd = pos.coords;

                    commit('setUserLat', crd.latitude);
                    commit('setUserLng', crd.longitude);

                    console.log("user location set at:"+ `${state.userLocationLat}`+" and "+ `${state.userLocationLng}`)
                }

                function error(err) {

                    commit('setUserLat', 52.492681);
                    commit('setUserLng', 13.524759);

                    console.log("user location set default (52.492681, 13.524759)")
                    console.warn(`ERROR(${err.code}): ${err.message}`);
                }

                navigator.geolocation.getCurrentPosition(success, error, {timeout:10});

            },
           */

            loadNearbyCantines ({ commit, state }) {
                let url = `${state.apiUrl}`+"?near[lat]="+state.userLocationLat+"&near[lng]="+state.userLocationLng+"&near[dist]=8"
                console.log(url);

                axios
                    .get(url)
                    .then(response => response.data)
                    .then(cantines => {
                        console.log("nearby cantines are" +cantines);
                        commit('setCloseCafeterias', cantines);
                        commit('selectCafeteria', cantines[0]);
                        console.log("set"+cantines[0]+" as new selected cafeteria");
                    })
            },

            getOpen ({ commit, state}) {
                let url = `${state.apiUrl}`+"/"+"/days/"+""+"meals";
            }
        },

    modules: {}
})
