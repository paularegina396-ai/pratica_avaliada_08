import CardCategorias from "../cardcategorias/CardCategorias";

function ListarCategorias() {
	return (
		<>
			<div className="flex justify-center w-full overflow-x-hidden">
				<div className="box-border w-full px-4 py-4 mt-8 mb-4 max-w-8xl sm:px-6 md:px-8 lg:px-12 md:py-6">
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 mb-4 md:mb-0">
						<CardCategorias />
					</div>
				</div>
			</div>
		</>
	)
}

export default ListarCategorias
