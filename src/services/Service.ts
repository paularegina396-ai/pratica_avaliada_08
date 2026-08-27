import axios from "axios";

export const api = axios.create({
  baseURL: 'https://lojagames-3nay.onrender.com'
});

// Função para cadastrar usuário
export const cadastrarUsuario = async (url: string, dados:Object, setDados: Function) =>{
    // parametros - url e dados q quer passa rno corpo da req
    const resposta = await api.post(url, dados)
    // dai vamos atualizar
    setDados(resposta.data)
}

//Função autenticar usuario - login - é igual - poderia suar A MESMA FUNÇÃO, ams pra ficar didativo separaemos
export const login = async (url: string, dados:Object, setDados: Function) =>{
    const resposta = await api.post(url, dados)
    setDados(resposta.data)   
}

// COM TOKEN 
//Função Consultar com token
export const buscar = async (url: string, setDados: Function, header: Object) => {
    const resposta = await api.get(url, header);
    setDados(resposta.data);
}

// Função Cadastrar com token
export const cadastrar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.post(url, dados, header)
    setDados(resposta.data)
}

// Função Atualizar com token
export const atualizar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.put(url, dados, header)
    setDados(resposta.data)
}

// Função deletar com token
export const deletar = async (url: string, header: Object) => {
    await api.delete(url, header);
}