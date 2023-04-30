import { Dota, StatusCodes } from "../../deps.ts";
import { apiKey, endpoint } from "../mod.ts";
import { getPlayerMatches_QueryOptions } from "./mod.ts";

export async function getPlayerCounts(accountid: number | string, query: Partial<getPlayerMatches_QueryOptions>) {
  const url = new URL(endpoint + '/api/players/' + accountid + '/counts');
  if(apiKey) url.searchParams.set('api_key', apiKey);
  if(query)
    for(const [key, value] of Object.entries(query))
      url.searchParams.set(key, String(value));
  const req = await fetch(url);
  if(req.status !== StatusCodes.OK) throw new Error(await req.text());
  const res: getPlayerCounts_Result = await req.json().catch(e => { throw e; });
  return res;
}

interface getPlayerCounts_Result_GamesWin {
  games: number;
  win: number;
}

export interface getPlayerCounts_Result {
  leaver_status: Record<Dota.LeaverStatus, getPlayerCounts_Result_GamesWin>;
  game_mode: Record<Dota.Gamemode, getPlayerCounts_Result_GamesWin>;
  lobby_type: Record<Dota.LobbyType, getPlayerCounts_Result_GamesWin>;
  lane_role: Record<number, getPlayerCounts_Result_GamesWin>;
  region: Record<number, getPlayerCounts_Result_GamesWin>;
  patch: Record<number, getPlayerCounts_Result_GamesWin>;
  is_radiant: Record<number, getPlayerCounts_Result_GamesWin>;
}