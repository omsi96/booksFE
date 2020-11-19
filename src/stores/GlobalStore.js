import { action, makeObservable, observable } from "mobx";

class GlobalStore {
  constructor(theme) {
    this.theme = theme;

    makeObservable(this, {
      theme: observable,
      toggleTheme: action,
    });
  }

  toggleTheme = () => {
    this.theme = this.theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", this.theme);
  };
}

const globalStore = new GlobalStore(localStorage.getItem("theme") || "light");
export default globalStore;
