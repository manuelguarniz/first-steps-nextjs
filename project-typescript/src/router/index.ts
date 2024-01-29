import products from './products'
// import photos from './photos.js'
 
const mountRoutes = (app: any) => {
  app.use('/products', products)
  // app.use('/photos', photos)
  // etc..
}
 
export default mountRoutes