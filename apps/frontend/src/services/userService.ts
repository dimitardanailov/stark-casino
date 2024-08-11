import API, { Route } from "@/config/api/routes";

export const createUser = async (data: any) => {
  const route: Route = API.users.createUser;

  const response = await fetch(`${route.DOMAIN}${route.URI}`, {
    method: route.method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    // Pass the response object to handle in the form component
    throw response;
  }

  return await response.json();
};
