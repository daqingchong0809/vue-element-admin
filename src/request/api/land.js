import { get, post } from "../index";

export const login = (data) => post("/author/login", data);
