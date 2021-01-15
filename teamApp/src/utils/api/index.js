import server from '../serve'

const getComment = async function(){
    let data = await server.post()
    return Promise.resolve(data)
}

export {
    // getComment
}