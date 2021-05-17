function problemSolver(velocidadA, velocidadB, distanciaAB){
    // debugger
    const time = distanciaAB / (velocidadA + velocidadB);
    const matchPoint = velocidadA * time;
    if (time && matchPoint){
        return `Ambos coches se encuentran a ${Math.floor(matchPoint)} metros desde donde salió A, después de ${Math.floor(time)} segundos`
    }
    return 'Debe introducir todas las magnitudes'
}

export default problemSolver;