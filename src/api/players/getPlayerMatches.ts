import { Dota, StatusCodes } from "../../deps.ts";
import { apiKey, endpoint } from "../mod.ts";
import { getPlayerMatches_QueryOptions } from "./mod.ts";

export async function getPlayerMatches(accountid: number | string, query: Partial<getPlayerMatches_QueryOptions&{project: string}>) {
  const url = new URL(endpoint + '/api/players/' + accountid + '/matches');
  if(apiKey) url.searchParams.set('api_key', apiKey);
  if(query)
    for(const [key, value] of Object.entries(query))
      url.searchParams.set(key, String(value));
  const req = await fetch(url);
  if(req.status !== StatusCodes.OK) throw new Error(await req.text());
  const res: getPlayerMatches_Result[] = await req.json().catch(e => { throw e; });
  return res;
}

export interface getPlayerMatches_Result {
  match_id: number;
  player_slot: number;
  radiant_win: boolean;
  duration: number;
  game_mode: Dota.Gamemode;
  lobby_type: Dota.LobbyType;
  hero_id: Dota.HeroID;
  start_time: number;
  version: number | null;
  kills: number;
  deaths: number;
  assists: number;
  skill: number | null;
  average_rank: number;
  leaver_status: number;
  party_size: number;
}