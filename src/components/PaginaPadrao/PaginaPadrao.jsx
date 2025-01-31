import { Outlet } from "react-router-dom"
import { Banner } from "../Banner/Banner"

export const PaginaPadrao = ({background, titulo}) => {
    return(
        <main>
            <Banner background={background} titulo={titulo}/>

            <Outlet/>
            {/* Aqui esta sendo renderizado o conteudo */}
        </main>
    )
}