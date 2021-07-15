const API = 'buzz/front/article/new'

export const state = () => ({
    items:[]
})

export const getters = {
    list : state => state.items
}

export const mutations = {
    store(state,data){
        // console.log(data.data.Result.Data)
        const transform = item => ({
            Author: item.Author,
            Content: item.Content,
            Imgs: item.Imgs[0],
            Kind: item.Kind,
            SourceTime: item.SourceTime,
            Title: item.Title,
            Type: item.Type
        })
        state.items = data.data.Result.Data.map( item => transform(item))
    }
}

export const actions = {
    async fetch ({commit},payload) {
        const data = await this.$axios.get('/api/' + API,{
            params: {
              Page: payload.page,
              Count: payload.count,
            },
          })
        
        commit('store',data)
    }
}