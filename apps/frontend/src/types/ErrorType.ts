type ErrorType =
  | "ValidationError" // Form validation failed before sending to the backend
  | "BadRequest" // The backend returned a 400 error (general failure)
  | "Conflict" // The backend returned a 409 error (user already exists)
  | "ServerError" // The backend returned a 500 error (internal server error)
  | "NetworkError" // Network issues (e.g., cannot reach the server)
  | "UnexpectedError"; // Any other unexpected errors

export default ErrorType;
