import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import router from 'router';

Vue.use(Vuex)

export default new Vuex.Store({

        state: {
            selectedMenu:[],
            selectedCafeteria: [],
            selectedIsOpen: false,
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

            setOpen(state, payload) {
                state.selectedIsOpen = payload;
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

            loadCafeterias ({ commit, state }) {
                axios
                    .get(`${state.apiUrl}`)
                    .then(response => response.data)
                    .then(cantines => {
                        commit('setCantines', cantines)
                        console.log("all cantines succesfully loaded")
                    })
            },

            //hard coded because of bug
            getUserLocation({commit}){
                commit('setUserLat', 52.519497922);
                commit('setUserLng', 13.407165038);
            },

            /* //disabled for bugfixing and testing purposes
            //inspired by https://developer.mozilla.org/de/docs/Web/API/Geolocation/getCurrentPosition
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

            loadNearbyCantines ({ commit, state, dispatch }) {
                let url = `${state.apiUrl}`+"?near[lat]="+state.userLocationLat+"&near[lng]="+state.userLocationLng+"&near[dist]=8"

                console.log(url);

                axios
                    .get(url)
                    .then(response => response.data)
                    .then(cantines => {
                        console.log("nearby cantines are" +cantines);
                        commit('setCloseCafeterias', cantines);
                        commit('selectCafeteria', cantines[0]);
                        dispatch('getOpenInit')
                        dispatch('loadMenuInit')

                        console.log("set"+cantines[0]+" as new selected cafeteria");
                    })
            },

            getOpen ({ commit, state}, id) {
                const today = new Date()
                let url = `${state.apiUrl}`+"/"+id+"/days/2019-11-18";

                axios
                    .get(url)
                    .then(response => response.data)
                    .then(isOpen => {
                        commit('setOpen', isOpen);
                        console.log("cantine is open?"+isOpen);
                    })
            },

            loadMenu ({ commit, state }, id) {
                const today = new Date()
                let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                let url = "/"+id+"/days/"+"2019-11-18"+"/meals"

                axios
                    .get(url)
                    .then(response => response.data)
                    .then(menu => {
                        console.log(menu);
                        commit('setMenu', menu);
                        console.log(menu);
                    })

            },

            selectCantine({commit, state, dispatch}, cantine){
                commit('selectCafeteria', cantine);
                dispatch('loadMenu', cantine.id);
                dispatch('getOpen', cantine.id);
            },

            //hard coded for init and testing
            getOpenInit ({ commit}) {
                let url = "https://openmensa.org/api/v2/canteens/30/days/2019-11-18/meals"

                axios
                    .get(url)
                    .then(response => response.data)
                    .then(isOpen => {
                        commit('setOpen', isOpen);
                        console.log("cantine is open?"+isOpen);
                    })
            },

            //hard coded for init and testing
            loadMenuInit ({ commit}) {
                let url = "https://openmensa.org/api/v2/canteens/30/days/2019-11-18/meals"

                axios
                    .get(url)
                    .then(response => response.data)
                    .then(menu => {
                        console.log(menu);
                        commit('setMenu', menu);
                        console.log(menu);
                    })
            }
        },

    modules: {}
})
