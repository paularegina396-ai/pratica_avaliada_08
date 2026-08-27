import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria";


interface CardCategoriaProps {
    categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriaProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-slate-700 text-white font-bold text-2xl'>Categoria</header>
            
            {/* Aqui renderizamos o tipo real que vem da API */}
            <p className='p-8 text-3xl bg-white h-full'>{categoria.tipo}</p>
            
            <div className="flex">
                {/* Aqui passamos o ID dinamicamente para as rotas */}
                <Link to={`/editarcategoria/${categoria.id}`} className='w-full text-slate-100 bg-teal-600 hover:bg-teal-700 flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                
                <Link to={`/deletarcategoria/${categoria.id}`} className='w-full text-slate-100 bg-red-400 hover:bg-red-700 flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    );
}

export default CardCategorias;
