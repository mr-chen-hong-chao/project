import server from '../serve'

const getRegion = async function(){
    let data = await server.get('./region/region.json')
    return Promise.resolve(data)
}

export {
    getRegion
}