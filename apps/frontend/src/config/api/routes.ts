enum Method {
  GET = "GET",
  POST = "POST",
}

export type Route = {
  URI: string;
  method: Method;
};

const addRoute = (route: string, method = Method.GET): Route => {
  return {
    URI: route,
    method,
  };
};

const API = {
  users: {
    createUser: addRoute("users/api", Method.POST),
  },
};

export default API;
