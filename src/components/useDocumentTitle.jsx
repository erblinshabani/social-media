import { useEffect } from "react"

export const useDocumentTitle = (docName) => {
    useEffect(() => {
        document.title = docName
    }, [docName])
}