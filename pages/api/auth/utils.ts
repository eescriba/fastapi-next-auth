import axios from 'axios';

export namespace NextAuthUtils {
    export const checkAccessTokenValidity = async function (accessToken) {
      try {
        const response = await axios.post(
          "http://localhost/api/v1/auth/token/verify/",
          {
            token: accessToken,
          },
        );
  
        return true;
      } catch {
        return false;
      }
    };
  
    export const refreshToken = async function (refreshToken) {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/auth/token/refresh/",
          {
            refresh: refreshToken,
          },
        );
  
        const { access, refresh } = response.data;
  
        return [access, refresh];
      } catch {
        return [null, null];
      }
    };
  }