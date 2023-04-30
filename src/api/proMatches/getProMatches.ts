import { StatusCodes } from "../../deps.ts";
import { apiKey, endpoint } from "../mod.ts";

export async function getProMatches(less_than_match_id?: string) {
  const url = new URL(endpoint + '/api/promatches');
  if(apiKey) url.searchParams.set('api_key', apiKey);
  if(less_than_match_id) url.searchParams.set('less_than_match_id', less_than_match_id);
  const req = await fetch(url);
  if(req.status !== StatusCodes.OK) throw new Error(await req.text());
  const res: getProMatches_Result[] = await req.json().catch(e => { throw e; });
  return res;
}

export interface getProMatches_Result {
  match_id: number;
  duration: number;
  start_time: number;
  radiant_team_id: number;
  radiant_name: string;
  dire_team_id: number;
  dire_name: string;
  leagueid: number;
  league_name: string;
  series_id: number;
  series_type: number;
  radiant_score: number;
  dire_score: number;
  radiant_win: boolean;
  radiant: boolean;
}