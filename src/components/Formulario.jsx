import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({setPacientes, pacientes, paciente}) => {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [alta, setAlta] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    const generarId = () => Math.random().toString(36).substring(2);

    useEffect(() => {
        if(Object.keys(paciente).length > 0) {
            const {nombre, propietario, email, alta, sintomas} = paciente;

            setNombre(nombre);
            setPropietario(propietario);
            setEmail(email);
            setAlta(alta);
            setSintomas(sintomas);
        }
    }, [paciente]);

    const handleSubmit = e => {
        e.preventDefault();

        //* Si está vació muestra el mensaje de error
        if([nombre, propietario, email, alta, sintomas].includes('')) {
            setError(true);
            return;
        }

        //* Elimina msg de error
        setError(false);

        //* Crea objecto de paciente nuevo
        const nuevoPaciente = {
            id: generarId(),
            nombre,
            propietario,
            email,
            alta,
            sintomas
        }

        //* Agregar nuevo paciente al State de app
        setPacientes([...pacientes, nuevoPaciente]);

        //* Reiniciar el formulario
        setNombre('');
        setPropietario('');
        setEmail('');
        setAlta('');
        setSintomas('');
    }

    return ( 
        <div className="md:w-1/2 lg:w-3/5 mx-5">
            <h2 className="font-black text-xl text-center">Seguimiento paciente</h2>
            <p className="text-lg mt-4 text-center">Añade Pacientes y <span className="text-blue-500 font-bold">Administralos</span></p>

            <form method="post" className="mt-5 mb-10 bg-white shadow-md py-10 px-5 rounded-md" onSubmit={e => handleSubmit(e)} >

                {error && <Error msg="Todos los campos son obligatorios!!"/>}

                <div className="mb-5">
                    <label htmlFor="nombre" className="block mb-4 text-gray-600 text-md font-semibold uppercase">Nombre de la mascota</label>
                    <input autoComplete="off" type="text" name="nombre" id="nombre" placeholder="Nombre de mascota" className="bg-gray-100 w-full rounded-md p-2 outline-none" value={nombre} onChange={e => setNombre(e.target.value)} />
                </div>

                <div className="mb-5">
                    <label htmlFor="propietario" className="block mb-4 text-gray-600 text-md font-semibold uppercase">Propietario de la mascota</label>
                    <input type="text" name="propietario" id="propietario" placeholder="Propietario de la mascota" className="bg-gray-100 w-full rounded-md p-2 outline-none" value={propietario} onChange={e => setPropietario(e.target.value)} />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block mb-4 text-gray-600 text-md font-semibold uppercase">Correo electronico</label>
                    <input autoComplete="off" type="email" name="email" id="email" placeholder="Coloque su correo" className="bg-gray-100 w-full rounded-md p-2 outline-none" value={email} onChange={e => setEmail(e.target.value)} />
                </div>

                <div className="mb-5">
                    <label htmlFor="alta" className="block mb-4 text-gray-600 text-md font-semibold uppercase">Fecha de alta</label>
                    <input autoComplete="off" type="date" name="alta" id="alta" className="bg-gray-100 w-full rounded-md p-2 outline-none" value={alta} onChange={e => setAlta(e.target.value)} />
                </div>

                <div className="mb-5">
                    <label htmlFor="alta" className="block mb-4 text-gray-600 text-md font-semibold uppercase">Sintomas</label>
                    <textarea name="sintomas" id="sintomas" className="bg-gray-100 w-full rounded-md p-2 outline-none" value={sintomas} onChange={e => setSintomas(e.target.value)}></textarea>
                </div>

                <input type="submit" value={paciente.id ? 'Guardar cambios' : 'Enviar Cita'} className="bg-blue-500 p-2 text-white rounded-lg shadow-md cursor-pointer hover:bg-blue-600 transition-colors duration-200 uppercase font-semibold w-full" />
            </form>
        </div>
    );
}

export default Formulario;