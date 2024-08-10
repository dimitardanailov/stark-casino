enum Method {
  GET = "GET",
  POST = "POST",
}

export type Route = {
  DOMAIN: string;
  URI: string;
  method: Method;
};

const APIURL = () => {
  const apiURL = process.env.NEXT_PUBLIC_API_URL
    ? process.env.NEXT_PUBLIC_API_URL
    : undefined;

  if (!apiURL) {
    throw new Error("process.env.NEXT_PUBLIC_API_URL is required variable");
  }

  return apiURL;
};

const addRoute = (route: string, method = Method.GET): Route => {
  return {
    DOMAIN: APIURL(),
    URI: route,
    method,
  };
};

const API = {
  users: {
    createUser: addRoute("/users", Method.POST),
  },
};

export default API;
