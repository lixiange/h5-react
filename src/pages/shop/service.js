import {
  get,
  post
} from '../../request/http';
import mockData from './mock'

export const getProducts=()=>{
  return new Promise((res)=>{
    setTimeout(()=>{
      res({
        code:200,
        data:mockData
      })
    },1000)
  })
  // return get()
}