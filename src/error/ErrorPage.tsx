import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();
  const { statusText, message } = useParams<{ statusText?: string; message?: string }>();

  const error = { statusText, message };

  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
};

export default ErrorPage;
