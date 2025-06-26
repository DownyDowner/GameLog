import axios from "axios";
import {
  GameCompletedList,
  GameCompletedListDTO,
} from "../models/GameCompletedList";
import { GameFull, GameFullDTO } from "../models/GameFull";
import { GameList, GameListDTO } from "../models/GameList";

const API_BASE_URL = "https://localhost:7273/games";

const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 1000,
});

export const getGamesCompleted = async () => {
  try {
    const response = await instance.get<GameCompletedListDTO[]>("/completed");
    return response.data.map((e) => new GameCompletedList(e));
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
};

export const getGame = async (id: string) => {
  try {
    const response = await instance.get<GameFullDTO>(`/${id}`);
    return new GameFull(response.data);
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
};

export const getGames = async () => {
  try {
    const response = await instance.get<GameListDTO[]>("/");
    return response.data.map((e) => new GameList(e));
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
};
