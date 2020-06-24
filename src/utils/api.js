import fetch from './fetch'

export function getGoodList(params) {
  return fetch({
    url: '/jd/getHotGoodList',
    method: 'GET',
    params
  })
}

export function getCates(params) {
  return fetch({
    url: '/jd/getAllCates',
    method: 'GET',
    params
  })
}
//添加商品
export function getAddGood(data){
  return fetch({
    url: '/jd/addGood',
    method: "post",
    data
  })
}
//删除商品
export function delGood(params){
  return fetch({
    url: '/jd/delGood',
    method:'get',
    params
  })
}
//上传图片
export function getImg(params){
  return fetch({
    url: '/upload/img',
    method: 'get',
    params
  })
}
//登录
export function login(data){
  return fetch({
      url:'/user/login',
      method:'post',
      data
  })
}
export default {
  getGoodList,
  getCates,
  getAddGood,
  delGood,
  login,
  getImg,
}