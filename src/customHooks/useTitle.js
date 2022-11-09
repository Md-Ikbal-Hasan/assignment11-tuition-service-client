import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Tuition Service`;
    }, [title])
}

export default useTitle;