export const serverResponse = ({
  status = "percho",
  message = "relajao'",
  data = [],
  error,
}) => {
  const response = {
    status,
    message,
    data,
  };
  // * Si se envía solo status en "duduso", coloca "Error desconocido"
  if (status === "dudoso" && message === "relajao'") {
    response["message"] = "Error desconocido";
  }

  if (error) {
    response["error"] = error;
  }

  return response;
};
