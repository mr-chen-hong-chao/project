import server from '../serve'

const get = async function(){
    let data = await server.get()
    return Promise.resolve(data)
}

export {
    get
}