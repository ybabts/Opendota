import { StatusCodes } from "../../deps.ts";
import { apiKey, endpoint } from "../mod.ts";

export async function getProPlayers() {
  const url = new URL(endpoint + '/api/proplayers');
  if(apiKey) url.searchParams.set('api_key', apiKey);
  const req = await fetch(url);
  if(req.status !== StatusCodes.OK) throw new Error(await req.text());
  const res: getProPlayers_Result[] = await req.json().catch(e => { throw e; });
  return res;
}

export interface getProPlayers_Result {
  account_id: number;
  steamid: string;
  avatar: string;
  avatarmedium: string;
  avatarfull: string;
  profileurl: string;
  personaname: string;
  last_login: string;
  full_history_time: string;
  cheese: number;
  fh_unavailable: boolean;
  loccountrycode: string;
  name: string;
  country_code: string;
  fantasy_role: number;
  team_id: number;
  team_name: string;
  team_tag: string;
  is_locked: boolean;
  is_pro: boolean;
  locked_until: number;
}