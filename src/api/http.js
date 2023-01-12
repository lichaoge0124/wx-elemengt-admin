import request from '@/utils/request'

// 获取商品列表
export function getgoodslist(data) {
    return request({
        url: 'goods/list',
        method: 'get',
        params: data
    })
}
// 获取首页大屏数据
export function getDashboard() {
    return request({
        url: '/dashboard',
        method: 'get',
    })
}