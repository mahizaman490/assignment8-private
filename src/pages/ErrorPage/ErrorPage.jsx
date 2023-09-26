import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
   const error = useRouteError()

    return (
        <div className="h-screen flex justify-center items-center text-4xl text-red-700 font-bold">
           <h1>page not found !!</h1> 
           <p>{error.status || error.message}</p>
        </div>
    );
};

export default ErrorPage;