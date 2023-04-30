import { StatusCodes } from "../../deps.ts";
import { apiKey, endpoint } from "../mod.ts";
import { getPlayerMatches_QueryOptions } from "./mod.ts";

export async function getPlayerPeers(accountid: number | string, query: Partial<getPlayerMatches_QueryOptions>) {
  const url = new URL(endpoint + '/api/players/' + accountid + '/peers');
  if(apiKey) url.searchParams.set('api_key', apiKey);
  if(query)
    for(const [key, value] of Object.entries(query))
      url.searchParams.set(key, String(value));
  const req = await fetch(url);
  if(req.status !== StatusCodes.OK) throw new Error(await req.text());
  const res: getPlayerPeers_Result[] = await req.json().catch(e => { throw e; });
  return res;
}

export interface getPlayerPeers_Result {
  account_id: number;
  last_played: number;
  win: number;
  games: number;
  with_win: number;
  with_games: number;
  against_win: number;
  against_games: number;
  with_gpm_sum: number;
  with_xpm_sum: number;
  personaname: string;
  name: string;
  is_contributor: boolean;
  is_subscriber: boolean;
  last_login: string;
  avatar: string;
  avatarfull: string;
}