import env from './index.js'
import axios from 'axios'
import _ from 'lodash'

export default {
  path: '/sitemap.xml',
  cacheTime: 1000 * 60 * 15, // 站點路由更新頻率，只在 generate: false有用
  hostname: env.HostName,
  gzip: true, // 生成 .xml.gz 檔的 sitemap
  generate: false, // 允許使用 nuxt generate 生成
  routes: async (callback) => {
    callback(null, _.concat(manualSection(), await dynamicSection()))
  },
}

// 建立區段
function makeSection(url) {
  return {
    url: url,
  }
}

// 手動增加的區段
function manualSection() {
  let prefix = '/news'
  return [
    makeSection('/'),  // 首頁
    makeSection(prefix + '/exclusive'),  // 獨家新聞列表
    makeSection(prefix + '/celebrity'),  // 明星新聞列表
    makeSection(prefix + '/fashion'),  // 時尚新聞列表
    makeSection(prefix + '/movie'),  // 影視新聞列表
  ]
}

// 動態增加的區段
async function dynamicSection() {
  let sections = []

  // 取得其它文章的 id
  let response = await axios.get(env.API_URL + '/buzz/front/article/ids')
  let code = _.get(response, 'data.Code', 0)
  let result = _.get(response, 'data.Result', [])

  if (code === "1") {
    // 文章路由前綴
    let prefix = '/news'
    // router type 與 api 製作的 key 對應
    let newsKeys = {
      fashion: "Fashion",
      exclusive: "News",
      celebrity: "Star",
      movie: "Tv",
    }
    _.forEach(newsKeys, (val, key) => {
      let array = _.get(result, val, []).map(id => {
        return makeSection(prefix + `/${key}/` + id)
      })
      sections = sections.concat(array)
    })
  }
  return sections
}
