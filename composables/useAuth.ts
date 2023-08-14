import { rejects } from "assert";
import jwt_decode from "jwt-decode";

export default () => {
  const useAuthToken = () => useState("auth_token");
  const useAuthUser = () => useState("auth_user");
  const useAuthRole = () => useState("auth_role");
  const useAuthLoading = () => useState("auth_loading", () => true);

  const setToken = (newToken: string) => {
    const authToken = useAuthToken();
    authToken.value = newToken;
  };

  const setUser = (newUser: any) => {
    const authUser = useAuthUser();
    authUser.value = newUser;
  };

  const setIsAuthLoading = (loading: boolean) => {
    const authLoading = useAuthLoading();
    authLoading.value = loading;
  };

  const setRole = (role: string) => {
    const authRole = useAuthRole();
    authRole.value = role;
  };

  const login = ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await $fetch("/api/auth/login", {
          method: "POST",
          body: {
            username,
            password,
          },
        });

        setToken(data.access_token);
        setUser(data.user);
        setRole(data.user.role);

        resolve(true);
      } catch (e) {
        reject(e);
      }
    });
  };

  const refreshToken = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await $fetch("/api/auth/refresh");

        setToken(data.access_token);
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };

  const getUser = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await useFetchApi("/api/auth/user");

        setUser(data.user);
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };

  const reRefreshAcessToken = () => {
    const authToken = useAuthToken();

    if (!authToken.value) {
      return;
    }

    const jwt = jwt_decode(authToken.value);

    const newRefreshTime = jwt.exp - 60000;

    setTimeout(async () => {
      await refreshToken();
      reRefreshAcessToken();
    }, newRefreshTime);
  };

  const initAuth = () => {
    return new Promise(async (resolve, reject) => {
      setIsAuthLoading(true);
      try {
        await refreshToken();
        await getUser();

        reRefreshAcessToken();

        resolve(true);
      } catch (error) {
        reject(error);
      } finally {
        setIsAuthLoading(false);
      }
    });
  };

  return {
    login,
    useAuthUser,
    useAuthRole,
    initAuth,
    useAuthLoading,
    useAuthToken,
  };
};
