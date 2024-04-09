import { useRouteError } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div className=" h-screen flex flex-col justify-center items-center font-bold text-2xl">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
      <button
        className="btn btn-outline "
        onClick={() => navigate(-1)}
        type="button"
      >
        Go back
      </button>
    </div>
  );
};
