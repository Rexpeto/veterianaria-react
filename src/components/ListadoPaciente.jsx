import Paciente from "./Paciente";

const ListadoPaciente = ({pacientes}) => {
    return ( 
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            <h2 className="font-black text-xl text-center">Listado de Pacientes</h2>
            <p className="text-lg mt-4 text-center">Administra tus <span className="text-blue-500 font-bold">Pacientes y Citas</span></p>

            {pacientes.map(paciente => {
                return (
                    <Paciente key={paciente.nombre} paciente={paciente} />
                )
            })}
        </div>
    );
}

export default ListadoPaciente;