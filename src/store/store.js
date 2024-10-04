import { createStore } from 'vuex'
import axios from 'axios'
import { url } from '../api.js'

export const store = createStore({
    state: {
        menu: {},
        transaksi: {},
        totalHarga: 0,
        idTransaksi: '1-19-09-24'
    },
    getters: {
        getMenu: state => state.menu,
        getTransaksi: state => state.transaksi,
        getTotalHarga: state => state.totalHarga,
        getIdTransaksi: state => state.idTransaksi
    },
    mutations: {
        setMenu(state, menu) {
            state.menu = menu
        },
        setTransaksi(state, transaksi) {
            state.transaksi = transaksi
        },
        setTotalHarga(state, totalHarga) {
            state.totalHarga = totalHarga
        },
        setIdTransaksi(state, idTransaksi) {
            state.idTransaksi = idTransaksi
        }
    },
    actions: {
        fetchMenu({ commit }) {
            axios.get(url + 'menu', {
                headers: {
                    Accept: 'application/json'
                }
            }).then(res => {
                commit('setMenu', res.data.data)
            }).catch((e) => {
                console.log(e.response)
                console.log(e.response.data)
            })
        },
        fetchTransaksi({ commit }) {
            axios.get(url + 'transaksi', {
                headers: {
                    Accept: 'application/json'
                }
            }).then(res => {
                commit('setTransaksi', res.data.data)
            }).catch((e) => {
                console.error(e.response)
                console.error(e.response.data)
            })
        },
        fetchTotalHarga({ commit },{idTransaksi}) {
            axios.get(url + `total-transaksi/${idTransaksi}`, {
                headers: {
                    Accept: 'application/json'
                }
            }).then(res=> {
                    commit('setTotalHarga', res.data.data)
            }).catch((e)=> {
                console.error(e.response)
            })
        },
        fetchIdTransaksi({ commit }) {
            axios.get(url + 'id-generate', {
                headers: {
                    Accept: 'application/json'
                }
            }).then(res=> {
                console.log('ID TRANSAKSI: ',res)
                commit('setIdTransaksi', res.data)
            }).catch((e)=> {
                console.error(e.response)
            })
        },
        updateTransaksi({ commit },{ id, jumlah }) {
            axios.put(url + `ubah-transaksi/${id}`,{
                jumlah: jumlah
            }, {
                headers: {
                    Accept: 'application/json'
                }
            }).then(res => {
            }).catch((e)=> {
                console.error(e.response)
                console.error(e.response.data)
            })
        },
        deleteTransaksi({ commit },{id}) {
            axios.delete(url + `hapus-transaksi/${id}`,{
                headers: {
                    Accept: 'application/json'
                }
            }).then(res=> {
                console.log(res)
            }).catch((e) => {
                console.error(e.response)
                console.error(e.response.data)
            })
        },
    }
})