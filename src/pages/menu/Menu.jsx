import { useDocumentTitle } from "../../components/useDocumentTitle"

const Menu = () => {
    useDocumentTitle("Menu")
    return (
        <div style={{ flex: "0.6"}}>
            <h1>Menu</h1>
        </div>
    )
}

export default Menu