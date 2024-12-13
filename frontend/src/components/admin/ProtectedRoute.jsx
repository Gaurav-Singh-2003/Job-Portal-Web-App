import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({children}) => {
    const {user} = useSelector(store=>store.auth);

    const navigate = useNavigate();

    useEffect(()=>{
        if(user === null || user.role !== 'recruiter'){
            navigate ("/");
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return (
        <>
        {children}
        </>
    )
};

export default ProtectedRoute;