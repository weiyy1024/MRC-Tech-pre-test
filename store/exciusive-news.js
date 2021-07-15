const API = 'buzz/front/article/special'

export const state = () => ({
    items:[]
})

export const getters = {
    list : state => state.items
}

export const mutations = {
    store(state,data){
        // console.log(data.data)
        const transform = item => ({
            Id: item.Id,
            Img: item.Img[0],
            Title: item.Title,
        })
        state.items = data.data.Result.map( item => transform(item))
    }
}

export const actions = {
    async fetch ({commit},payload) {
        const data = await this.$axios.get('/api/' + API,{
            params: {
              Kind: payload.kind,
              Count: payload.count,
            },
          })
        
        commit('store',data)
    }
}