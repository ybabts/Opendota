import { StatusCodes } from "../../deps.ts";
import { apiKey, endpoint } from "../mod.ts";

export interface getPublicMatches_QueryOptions {
  mmr_ascending: number;
  mmr_descending: number;
  less_than_match_id: number;
}

export async function getPublicMatches(query?: Partial<getPublicMatches_QueryOptions>) {
  const url = new URL(endpoint + '/api/promatches');
  if(apiKey) url.searchParams.set('api_key', apiKey);
  if(query)
    for(const [key, value] of Object.entries(query))
      url.searchParams.set(key, String(value));
  const req = await fetch(url);
  if(req.status !== StatusCodes.OK) throw new Error(await req.text());
  const res: getPublicMatches_Result[] = await req.json().catch(e => { throw e; });
  return res;
}

export interface getPublicMatches_Result {
  match_id: number;
  match_seq_num: number;
  radiant_win: boolean;
  start_time: number;
  duration: number;
  radiant_team: string;
  dire_team: string;
}