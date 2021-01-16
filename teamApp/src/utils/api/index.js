import server from '../serve'

const getComment = async function (params) {
    let data = await server.post('http://120.53.31.103:84/api/app/teacher/mainCourse/page='+params.page)
    return Promise.resolve(data)
}

export {
    getComment
}