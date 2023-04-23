export const UploadFiles = ({iconFunction, fileType, img, span}) => {
    return (
        <div onClick={iconFunction ? iconFunction : null} className={`upload upload${fileType}`}>
            <img src={img} alt={fileType}/>
            <span>{span}</span>
        </div>
    )
}