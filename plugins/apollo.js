export default function(ctx) {
  let endpoint = `http://${process.env.PROD_URL}:${process.env.PORT}/${process.env.HTTP_ENDPOINT}`
  console.log('endpoint apollo plugin', endpoint,)
  !process.env.PROD_URL ? endpoint = 'http://localhost:4000' : ''
  console.log('endpoint apollo plugin3', process.env.URL, process.env.PORTT, process.env.ENDPOINT)
  return {
    httpEndpoint: endpoint
  }
}
