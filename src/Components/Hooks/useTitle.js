import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `Kids Heaven/${title}`
    },[title])
}
export default useTitle;