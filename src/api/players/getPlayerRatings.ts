import { StatusCodes } from "../../deps.ts";
import { apiKey, endpoint } from "../mod.ts";

export async function getPlayerRatings(accountid: number | string) {
  const url = new URL(endpoint + '/api/players/' + accountid + '/ratings');
  if(apiKey) url.searchParams.set('api_key', apiKey);
  const req = await fetch(url);
  if(req.status !== StatusCodes.OK) throw new Error(await req.text());
  const res: getPlayerRatings_Result[] = await req.json().catch(e => { throw e; });
  return res;
}

export interface getPlayerRatings_Result {
  account_id: number;
  match_id: number;
  solo_competitive_rank: number;
  competitive_rank: number;
  time: number;
}