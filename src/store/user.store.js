// 用户模块
import { makeAutoObservable, runInAction } from "mobx"
import { http } from '@/utils'

class UserStore {
    userInfo = {}
    constructor() {
        makeAutoObservable(this)
    }
    async getUserInfo() {
        const res = await http.get('/user/profile')
        runInAction(() => {
            this.userInfo = res.data
        })


    }
}

export default UserStore