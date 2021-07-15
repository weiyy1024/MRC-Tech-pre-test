import * as R from 'ramda'

export default function({$axios}) {
  // ┌---response攔截器
  $axios.interceptors.response.use(
    response => {

      if (R.isEmpty(response)) {
        console.error(`[Axios On Response] Response are ${response}`)
        return
      }

      const {status, data} = response

      if (status !== 200) {
        console.error(`[Axios On Response] [${response.status}] Api Is Break`)
        return
      }

      const {Code, Result} = data
      return R.equals(Code, '1') ? Result : []
    },
    error => {
      if (R.has('config', error.response)) {
        const {config, data} = error.response

        const msg = `Target: ${config.url}\nResponse: ${JSON.stringify(data)}`

        console.error(msg) // 顯示錯誤
      } else {
        console.error(error)
      }

      return undefined
    },
  )
}
