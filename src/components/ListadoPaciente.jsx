import Paciente from "./Paciente";

const ListadoPaciente = ({pacientes, setPaciente, eliminarPaciente}) => {
    return ( 
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            <h2 className="font-black text-xl text-center">Listado de Pacientes</h2>
            

            {pacientes && pacientes.length ? (
                <>
                    <p className="text-lg mt-4 text-center">Administra tus <span className="text-blue-500 font-bold">Pacientes y Citas</span></p>
                    {pacientes.map(items => {
                        return (
                            <Paciente key={items.id} pacientes={items} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente} />
                        )
                    })}
                </>
            ) : (
                <p className="text-lg mt-4 text-center">Comienza agregando pacientes y <span className="text-blue-500 font-bold">aparecenrán en este lugar</span></p>
            )}
        </div>
    );
}

export default ListadoPaciente;