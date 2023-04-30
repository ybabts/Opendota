import { StatusCodes } from "../../deps.ts";
import { apiKey, endpoint } from "../mod.ts";

export async function getPlayer(accountid: number | string) {
  const url = new URL(endpoint + '/api/players/' + accountid);
  if(apiKey) url.searchParams.set('api_key', apiKey);
  const req = await fetch(url);
  if(req.status !== StatusCodes.OK) throw new Error(await req.text());
  const res: getPlayer_Result = await req.json().catch(e => { throw e; });
  return res;
}

export interface getPlayer_Result {
  profile: {
    account_id: number;
    personaname: string;
    name: null;
    plus: boolean;
    cheese: number;
    steamid: string;
    avatar: string;
    avatarmedium: string;
    avatarfull: string;
    profileurl: string;
    last_login: string;
    loccountrycode: string;
    status: null;
    is_contributor: boolean;
    is_subscriber: boolean;
  };
  solo_competitive_rank: number;
  competitive_rank: number;
  rank_tier: number;
  leaderboard_rank: null;
  mmr_estimate: {
    estimate: number;
  };
}