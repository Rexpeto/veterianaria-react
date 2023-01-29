import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPaciente from "./components/ListadoPaciente";

function App() {
    const [pacientes, setPacientes] = useState([]);
    const [paciente, setPaciente] = useState({});

    useEffect(() => {
        const obtenerLs = () => {
            const pacienteStorage = JSON.parse(localStorage.getItem('pacientes')) ?? [];
            console.log(localStorage.getItem('pacientes'));
            setPacientes(pacienteStorage);
        }

        obtenerLs();
    }, []);

    useEffect(() => {
        localStorage.setItem('pacientes', JSON.stringify(pacientes));
    }, [pacientes]);

    const eliminarPaciente = id => {
        const pacienteActualizado = pacientes.filter(paciente => paciente.id != id);

        setPacientes(pacienteActualizado);
    } 

    return (
        <div className="container mx-auto">
            <Header/>
            <div className="mt-12 md:flex gap-4">
                <Formulario 
                    setPacientes={setPacientes} 
                    pacientes={pacientes}
                    paciente={paciente}
                    setPaciente={setPaciente}
                />
                <ListadoPaciente 
                    pacientes={pacientes} 
                    setPaciente={setPaciente}
                    eliminarPaciente={eliminarPaciente}
                />
            </div>
        </div>
    );
}

export default App;