import { useState, useEffect } from 'react';

export const Prueba = () => {
    
    interface Jugador {
        first_name: string;
        last_name: string;
        h_in: string;
    }

    const [jugadores, setJugadores] = useState<Jugador[]>([]);
    const [respuestas, setRespuestas] = useState<Jugador[][]>([]);
    const [alturaObjetivo, setAlturaObjetivo] = useState(0);

    useEffect(() => {
        obtenerJugadores();
    }, []);

    const obtenerJugadores = async () => {
        const response = await fetch('https://mach-eight.uc.r.appspot.com');
        const api = await response.json();
        const { values } = api;
        setJugadores(values);
    }

    const buscarParejas = () => {
        const parejas = [];
        for (let i = 0; i < jugadores.length; i++) {
            for (let j = i + 1; j < jugadores.length; j++) {
                const altura1 = parseInt(jugadores[i].h_in, 10);
                const altura2 = parseInt(jugadores[j].h_in, 10);
                if (altura1 + altura2 === alturaObjetivo) {
                    parejas.push([jugadores[i], jugadores[j]]);
                }
            }
        }
        setRespuestas(parejas);
    }

    return (
        <div>
            <div>
                <h1 id="Titulo1">Prueba NBA</h1>
                <p>Ingrese la altura en pulgadas para buscar parejas de jugadores cuya suma de alturas sea igual a la altura ingresada.</p>
                <h4>Numero de parejas encontradas= {respuestas.length}</h4>
            </div>

            <input 
                type="number" 
                placeholder="Ingrese altura en pulgadas" 
                value={alturaObjetivo} 
                onChange={(e) => setAlturaObjetivo(parseInt(e.target.value))}
            />
            <button onClick={buscarParejas}>Buscar parejas</button>

            <div>
                {respuestas.length > 0 ? (
                    <div className="table">
                        <div className="table-row table-header">
                            <div className="table-cell">Jugador 1</div>
                            <div className="table-cell2">Jugador 2</div>
                        </div>
                        {respuestas.map((pareja, index) => (
                            <div key={index} className="table-row">
                                <div className="table-cell">
                                    {pareja[0].first_name} {pareja[0].last_name}
                                </div>
                                <div className="table-cell2">
                                    {pareja[1].first_name} {pareja[1].last_name}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No se encontraron parejas.</p>
                )}
            </div>
        </div>
    );
}

export default Prueba;
