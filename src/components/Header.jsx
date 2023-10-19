const Header = ({handleOpenModal}) => {
  return (
    <header className='flex justify-between p-2 mb-3
     bg-gradient-to-r from-emerald-400 via-emerald-500 to-yellow-50'>
      <h1 className="font-bold text-blue-950 text-2xl">CRUD Usuarios</h1>
      <button 
      onClick={handleOpenModal}
      className=" bg-blue-950 font-semibold text-yellow-500 px-2 py-1 rounded-md 
      hover:bg-red-500 hover:text-white transition-colors 
      shadow-xs shadow-yellow-500">
        Agregar Usuario
      </button>
    </header>
  )
}

export default Header
