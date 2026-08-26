import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./components/carrinho/cart/Cart";
import DeletarCategoria from "./components/categorias/deletarcategorias/DeletarCategoria";
import FormCategoria from "./components/categorias/formcategoria/FormCategoria";
import ListarCategorias from "./components/categorias/listarcategorias/ListarCategorias";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import DeletarProduto from "./components/produtos/deletarproduto/DeletarProduto";
import FormProduto from "./components/produtos/formproduto/FormProduto";
import ListarProdutos from "./components/produtos/listaprodutos/ListaProdutos";
import Cadastro from "./pages/cadastro/Cadastro";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Perfil from "./pages/perfil/Perfil";

function App() {
	return (
				<BrowserRouter>
					<Navbar />
					<div className="flex flex-col min-h-[70vh] bg-slate-200">
						<Routes>
							<Route path="/" element={<Login />} />
							<Route path="/cadastro" element={<Cadastro />} />
							<Route path="/home" element={<Home />} />
						</Routes>
					</div>
					<Footer />
				</BrowserRouter>
	)
}

export default App
