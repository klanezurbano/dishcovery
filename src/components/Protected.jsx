import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Protected(props) {
  const loggedInUser = useSelector(state => state.loggedInUser)

  return (
    <>
      {
        loggedInUser ?
        <Navigate to="/meal-gallery" replace /> :
        props.children
      }
    </>
  )
};

export default Protected;