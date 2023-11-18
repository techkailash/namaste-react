import { useRouteError } from "react-router-dom";
const ErrorElement = () => {
  let error = useRouteError();
  console.error(error);

    return <h1>Something went wrong. { error.statusText}</h1>;
};

export default ErrorElement;
