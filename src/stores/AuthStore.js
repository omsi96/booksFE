import { makeAutoObservable } from "mobx";
import axios from "axios";
const authAxios = axios.create({
  baseURL: "http://localhost/",
});
class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }

  signUp = async (user) => {
    try {
      const response = await authAxios.post("signup", user);
      console.log(response);
      return true;
    } catch (error) {
      console.log("Couldn't create user with error:", error);
      return false;
    }
  };
}

const authStore = new AuthStore();
export default authStore;
