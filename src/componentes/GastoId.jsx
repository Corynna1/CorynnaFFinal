const GastoId =()=>{
    const random = Math.random().toString(36)
    const fecha = Date.now().toString(36)
    return random + fecha
}

export default GastoId;