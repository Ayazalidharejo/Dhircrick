import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Scrollbar = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Jab bhi pathname change hoga, page top par scroll karega
    }, [pathname]);

    return null;
};

export default Scrollbar;