import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthContext";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import CardCategorias from "../cardcategorias/CardCategorias";

function ListarCategorias() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado!');
            navigate('/');
        }
    }, [token]);

    useEffect(() => {
        buscarCategorias();
    }, [categorias.length]);

    async function buscarCategorias() {
        try {
            setIsLoading(true);
            await buscar('/categorias', setCategorias, {
                headers: { Authorization: token }
            });
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.status === 401) {
                alert('Erro ao consultar as categorias.');
                handleLogout();
            }
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            {/* Indicador de carregamento nos moldes do professor */}
            {isLoading && (
                <div className="flex justify-center w-full my-8">
                    <SyncLoader color="#312e81" size={32} />
                </div>
            )}

            <div className="flex justify-center w-full overflow-x-hidden">
                <div className="box-border w-full px-4 py-4 mt-8 mb-4 max-w-8xl sm:px-6 md:px-8 lg:px-12 md:py-6">
                    
                    {/* Validação de lista vazia nos moldes do professor */}
                    {(!isLoading && categorias.length === 0) && (
                        <div className="flex justify-center w-full">
                            <span className="text-3xl text-center my-8">
                                Nenhuma Categoria foi encontrada!
                            </span>
                        </div>
                    )}

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 mb-4 md:mb-0">
                        {/* O ERRO ESTAVA AQUI: A função map agora está fechada corretamente com ))} */}
                        {categorias.map((categoria) => (
                            <CardCategorias key={categoria.id} categoria={categoria} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListarCategorias;
