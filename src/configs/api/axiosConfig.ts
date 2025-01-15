import axios from "axios";

import { VITE_API_BASE_PATH } from "../../constants/envs";

// todo: remove after tests | Создаем токен для базовой авторизации
const username = "vataga";
const password = "QazWsx1!";
const token = btoa(`${username}:${password}`);

const API_BASE_PATH = VITE_API_BASE_PATH;

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: `Basic ${token}`,
};

export const axiosBaseWrap = axios.create({
  baseURL: API_BASE_PATH,
  headers,
});
