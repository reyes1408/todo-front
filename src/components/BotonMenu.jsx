const BotonMenu = ({ imagen, nombre }) => {
    return (
        <button className='bg-gray-100 rounded-lg flex flex-col items-center justify-center h-40'>
            <img src={imagen} alt="" style={{ height: "60px" }} />
            <p>{ nombre }</p>
        </button>
    )
}

export default BotonMenu;