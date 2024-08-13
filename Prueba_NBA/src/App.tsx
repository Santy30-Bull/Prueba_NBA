import React, { useState, useEffect } from 'react';

export const Prueba = () => {
    const [jugadores, setJugadores] = useState([]);
    const [respuestas, setRespuestas] = useState([]);
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
                const altura1 = parseInt(jugadores[i].h_in);
                const altura2 = parseInt(jugadores[j].h_in);
                if (altura1 + altura2 === alturaObjetivo) {
                    parejas.push([jugadores[i], jugadores[j]]);
                }
            }
        }
        setRespuestas(parejas);
    }

    return (
        <div>
            <input 
                type="number" 
                placeholder="Ingrese altura en pulgadas" 
                value={alturaObjetivo} 
                onChange={(e) => setAlturaObjetivo(parseInt(e.target.value))} 
            />
            <button onClick={buscarParejas}>Buscar parejas</button>

            <div>
                {respuestas.length > 0 ? (
                    respuestas.map((pareja, index) => (
                        <div key={index}>
                            <p>{pareja[0].first_name} {pareja[0].last_name} - {pareja[1].first_name} {pareja[1].last_name}</p>
                        </div>
                    ))
                ) : (
                    <p>No se encontraron parejas.</p>
                )}
            </div>
        </div>
    );
}