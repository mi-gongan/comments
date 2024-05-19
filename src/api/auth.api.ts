import api from ".";

const getAuth = async () => api.get("/auth");

const signIn = async (email: string, password: string) =>
  api.post("/auth/signin", { email, password });

const signUp = async (email: string, password: string, name: string) =>
  api.post("/auth/signup", { email, password, name });

export const authApi = {
  getAuth,
  signIn,
  signUp,
};
