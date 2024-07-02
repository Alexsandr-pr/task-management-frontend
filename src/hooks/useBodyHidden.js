import { useEffect } from "react";
import { useLocation } from "react-router-dom"
import useMediaQuery from "./useMediaQuery";



const useBodyHidden = () => {
    const {pathname} = useLocation();
    const query = useMediaQuery('(max-width:1024px)');
    let bodyHidden = false;

    function check() {
        if(pathname.split('/').slice(0, 2).join('/') === "/message" || pathname.split('/').slice(0, 2).join('/') === "/settings") {
            document.body.style.overflow = "hidden";
            bodyHidden = true;
        } else {
            document.body.style.overflow = "";
            bodyHidden = false;
        }
    }    
    
    useEffect(() => {
        check()
    }, [pathname, query]);

    return bodyHidden;

}

export default useBodyHidden