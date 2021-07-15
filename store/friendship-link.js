const API = 'buzz/front/friendship/link'

export const state = () => ({
    items:[]
})

export const getters = {
    list : state => state.items
}

export const mutations = {
    store(state,data){
        const transform = item => ({
            FriendId: item.FriendId,
            FriendName: item.FriendName,
            FriendUrl: item.FriendUrl,
            NoFollow: 2,
            FriendSort: item.FriendSort,
            CreateTime: item.CreateTime
        })
        state.items = data.data.Result.map( item => transform(item))
    }
}

export const actions = {
    async fetch ({commit}) {
        const data = await this.$axios.get('/api/' + API)
        
        commit('store',data)
    }
}