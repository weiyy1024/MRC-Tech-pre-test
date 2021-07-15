export const state = () => ({})

export const actions = {
    async nuxtServerInit({ dispatch }) {
        try {
            // 取得「 友情連結 」
            await dispatch('friendship-link/fetch')

            // 取得「 漂浮廣告 」
            await dispatch('adv/fetch')
        } catch (error) {
            console.error(error)
          }
    },
}