function mruSolver(velocidadA, velocidadB, distanciaAB){
    // debugger
    const time = distanciaAB / (velocidadA + velocidadB);
    const matchPoint = velocidadA * time;
    if (time && matchPoint){
        return `Ambos coches se encuentran a ${Math.round(matchPoint * 100) / 100} metros desde donde salió A, después de ${Math.round(time * 100) / 100} segundos`
    }
    return 'Debe introducir todas las magnitudes'
}

export default mruSolver;