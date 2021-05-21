function dinamicSolver(mass1, mass2, coeficient){
    const GRAVITY = 9.81;
    const weight1 = GRAVITY * mass1;
    const weight2 = GRAVITY * mass2;
    const normal = weight1;
    const friction = coeficient * normal;
    const aceleration = (weight2 - friction) / (mass1 + mass2)

    debugger
    const tension = mass1 * aceleration + friction;

    if (aceleration && tension && aceleration > 0){
        return `La aceleración del sistema es ${Math.round(aceleration * 100) / 100} m/s^2 y fuerza de tensión es ${Math.round(tension * 100) / 100} N.`;
    }
    else if(aceleration <= 0 && aceleration != null)
    {
        return `No hay movimiento y la tensión es ${Math.round(tension * 100) / 100} N.`;
    }
    else{
        return 'Debe introducir todas las magnitudes';
    }
}

export default dinamicSolver;