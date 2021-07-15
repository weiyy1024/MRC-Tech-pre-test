const API = 'hamm/front/ads/list'

export const state = () => ({
    adv2:[],
    adv3:[],
    adv4:[]
})

export const getters = {
    float : state => state.adv3,
    straight: state => state.adv4,
    horizontal:state => state.adv2
}

export const mutations = {
    store(state,{float,straight,horizontal}){
        const transform = item => ({
            Id: item.Id,
            Image: item.Image,
            Href: item.Href,
        })
        state.adv3 = float.data.Result.map( item => transform(item))
        state.adv4 = straight.data.Result.map( item => transform(item))
        state.adv2 = horizontal.data.Result.map( item => transform(item))

    }
}

export const actions = {
    async fetch ({commit}) {
        const float = await this.$axios.get('/api/' + API,{
            params: {
              Kind: 3,
            },
        })
        const straight = await this.$axios.get('/api/' + API,{
            params: {
              Kind: 4,
            },
        })
        const horizontal = await this.$axios.get('/api/' + API,{
            params: {
              Kind: 2,
            },
        })
        
        commit('store',{float,straight,horizontal})
    }
}