export default {
    changeFocus(state, val) {
        if (state.focusTeacher.length === 0) {
            state.focusTeacher.push(val)
            state.isFocus = false
        } else {
            state.focusTeacher.forEach((item, index) => {
                if (item.id === val.id) {
                    state.focusTeacher.splice(index, 1)
                    state.isFocus = true
                } else {
                    state.focusTeacher.push(val)
                    state.isFocus = false
                }
            })
        }
    },
    //改变底部导航下标
    tabBottomNav(state, val) {
        state.bottomNavIndex = val
    },
    //切换loading状态
    tabLoadingShow(state, val) {
        console.log(val)
        state.loadingShow = val
    },
    tabEmailState(state, val) {
        state.emailState = !state.emailState
    },
    //获取用户信息
    add_user(state, data) {
        state.user = data
    },
    //添加token
    add_token(state, token) {
        state.token = token
    },
    //删除token
    del_token(state) {
        state.token = ''
    },
    //删除用户信息
    del_user(state) {
        state.user = ''
    }


}