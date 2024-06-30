import { useEffect } from "react";
import { useLocation } from "react-router-dom"
import useMediaQuery from "./useMediaQuery";



const useBodyHidden = (id) => {
    const {pathname} = useLocation();
    const query = useMediaQuery('(max-width:1024px)');
    let bodyHidden = false;
    console.log(id)
    function check() {
        if(pathname.split('/').slice(0, 2).join('/') === `/message`) {
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