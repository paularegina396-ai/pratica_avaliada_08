import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
import { useContext, useEffect, useState, type ChangeEvent, type SyntheticEvent } from "react";

function FormCategoria() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;
    

    const { id } = useParams<{ id: string }>();

    async function buscarCategoriaPorId() {
        setIsLoading(true);
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
                headers: { Authorization: token }
            });
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.status === 401) {
                alert("Erro ao consultar a categoria.");
                handleLogout();
            }
        } finally {
            setIsLoading(false);
        }
    }

  
    useEffect(() => {
        if (id !== undefined) {
            buscarCategoriaPorId();
        }
    }, [id]);

    useEffect(() => {
        if (token === '') {
            alert("Você precisa estar logado!");
            navigate('/');
        }
    }, [token]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value,
        });
    }

    async function gerarNovaCategoria(e: SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);
        
        if (id !== undefined) {
            try {
                await atualizar('/categorias', categoria, setCategoria, {
                    headers: { Authorization: token }
                });
                alert("Categoria atualizada com sucesso!");
            } catch (error) {
                if (axios.isAxiosError(error) && error.response?.status === 401) {
                    alert("Erro ao atualizar a categoria.");
                    handleLogout();
                } else {
                    alert("Erro ao atualizar a categoria.");
                }
            } finally {
                setIsLoading(false);
            }
        } else {
            try {
                await cadastrar('/categorias', categoria, setCategoria, {
                    headers: { Authorization: token }
                });
                alert("Categoria cadastrada com sucesso!");
            } catch (error) {
                if (axios.isAxiosError(error) && error.response?.status === 401) {
                    alert("Erro ao cadastrar a categoria.");
                    handleLogout();
                } else {
                    alert("Erro ao cadastrar a categoria.");
                }
            } finally {
                setIsLoading(false);
            }
        }
        retornar();
    }

    function retornar() {
        navigate("/categorias");
    }

    return (
        <div className="container flex flex-col items-center justify-center px-2 pt-4 mx-auto">
            <h1 className="my-8 text-3xl text-center md:text-4xl">
                {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
            </h1>
            
           
            <form className="flex flex-col w-full max-w-md gap-4 px-2 md:max-w-1/2" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2 ">
                    <label htmlFor="tipo">Categoria</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui sua categoria"
                        id='tipo'
                        name='tipo' // O name deve ser igual ao atributo da Model
                        className="p-2 text-base bg-white border-2 rounded border-slate-700 md:text-lg"
                        required
                        value={categoria.tipo || ''} // Exibe o valor vindo do banco
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} // Atualiza o estado
                    />
                </div>
                <button
                    className="flex justify-center w-full py-2 mx-auto text-base rounded text-slate-100 bg-slate-400 hover:bg-slate-800 md:w-1/2 md:text-lg"
                    type="submit"
                >
                    {isLoading ? (
                        <ClipLoader color="#ffffff" size={24} />
                    ) : (
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                    )}
                </button>
            </form>
        </div>
    );
}

export default FormCategoria;
