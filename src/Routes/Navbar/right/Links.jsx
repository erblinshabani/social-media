import { Link } from "react-router-dom"

export const Links = ({imgClass, path, img, alt ,name}) => {
    return (
        <Link to={path}>
            <img className={imgClass && imgClass} src={img} alt={alt}/>
            {name}
        </Link>
    )
}