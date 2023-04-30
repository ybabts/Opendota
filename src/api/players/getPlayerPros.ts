import { StatusCodes } from "../../deps.ts";
import { apiKey, endpoint } from "../mod.ts";
import { getPlayerMatches_QueryOptions } from "./mod.ts";

export async function getPlayerPros(accountid: number | string, query: Partial<getPlayerMatches_QueryOptions>) {
  const url = new URL(endpoint + '/api/players/' + accountid + '/pros');
  if(apiKey) url.searchParams.set('api_key', apiKey);
  if(query)
    for(const [key, value] of Object.entries(query))
      url.searchParams.set(key, String(value));
  const req = await fetch(url);
  if(req.status !== StatusCodes.OK) throw new Error(await req.text());
  const res: getPlayerPros_Result[] = await req.json().catch(e => { throw e; });
  return res;
}

export interface getPlayerPros_Result {
  account_id: number;
  name: string;
  country_code: string;
  fantasy_role: number;
  team_id: number;
  team_name: string;
  team_tag: string;
  is_locked: boolean;
  is_pro: boolean;
  locked_until: number;
  steamid: string;
  avatar: string;
  avatarmedium: string;
  avatarfull: string;
  profileurl: string;
  last_login: string;
  full_history_time: string;
  cheese: number;
  fh_unavailable: boolean;
  loccountrycode: string;
  last_played: number;
  win: number;
  games: number;
  with_win: number;
  with_games: number;
  against_win: number;
  against_games: number;
  with_gpm_sum: number;
  with_xpm_sum: number;
}