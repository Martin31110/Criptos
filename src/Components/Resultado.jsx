import styled from "@emotion/styled"


const Contenedor = styled.div`
    color: #FFF;
    font-family: "Lato", sans-serif;

    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;

`


const Imagen = styled.img`
    display: block;
    width: 120px;


`

const Texto = styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
        
    }
`

const Precio = styled.p`
    font-size: 22px;
    span{
        font-weight: 700;

    }
`

const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
  return (
    <Contenedor>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen Cripto" />

        <div>
            <Precio>El Precio es de: <span>{PRICE}</span></Precio>
            <Texto>Precio masl alto de el dia: <span>{HIGHDAY}</span></Texto>
            <Texto>El Precio mas bajo de el dia: <span>{LOWDAY}</span></Texto>
            <Texto>Variacio ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Ultima Actualizacion: <span>{LASTUPDATE}</span></Texto>
        </div>
    </Contenedor>
  )
}

export default Resultado
