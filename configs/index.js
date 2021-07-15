let online = "http://pixar-deployment-service:6300"
let offline = "https://lord.lemirago.cc"

export default {
  HostName: "https://www.sxdingwang.com",
  API_URL: process.env.NODE_ENV === "production" ? online : offline,
  DEBUG: false,
}
