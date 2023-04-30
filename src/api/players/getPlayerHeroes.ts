import { Dota, StatusCodes } from "../../deps.ts";
import { apiKey, endpoint } from "../mod.ts";
import { getPlayerMatches_QueryOptions } from "./mod.ts";

export async function getPlayerHeroes(accountid: number | string, query: Partial<getPlayerMatches_QueryOptions>) {
  const url = new URL(endpoint + '/api/players/' + accountid + '/heroes');
  if(apiKey) url.searchParams.set('api_key', apiKey);
  if(query)
    for(const [key, value] of Object.entries(query))
      url.searchParams.set(key, String(value));
  const req = await fetch(url);
  if(req.status !== StatusCodes.OK) throw new Error(await req.text());
  const res: getPlayerHeroes_Result[] = await req.json().catch(e => { throw e; });
  return res;
}

export interface getPlayerHeroes_Result {
  hero_id: Dota.HeroID;
  last_played: number;
  games: number;
  win: number;
  with_games: number;
  with_win: number;
  against_games: number;
  against_win: number;
}