import { StatusCodes } from "../../deps.ts";
import { apiKey, endpoint } from "../mod.ts";

export async function getPlayersByRank() {
  const url = new URL(endpoint + '/api/playersByRank/');
  if(apiKey) url.searchParams.set('api_key', apiKey);
  const req = await fetch(url);
  if(req.status !== StatusCodes.OK) throw new Error(await req.text());
  const res: getPlayersByRank_Result[] = await req.json().catch(e => { throw e; });
  return res;
}

export interface getPlayersByRank_Result {
  account_id: number;
  rating: number;
  fh_unavailable: boolean;
}