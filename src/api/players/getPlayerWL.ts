import { StatusCodes } from "../../deps.ts";
import { apiKey, endpoint } from "../mod.ts";
import { getPlayerMatches_QueryOptions } from "./mod.ts";

export async function getPlayerWL(accountid: number | string, query: Partial<getPlayerMatches_QueryOptions>) {
  const url = new URL(endpoint + '/api/players/' + accountid + '/wl');
  if(apiKey) url.searchParams.set('api_key', apiKey);
  if(query)
    for(const [key, value] of Object.entries(query))
      url.searchParams.set(key, String(value));
  const req = await fetch(url);
  if(req.status !== StatusCodes.OK) throw new Error(await req.text());
  const res: getPlayerWL_Result = await req.json().catch(e => { throw e; });
  return res;
}

export interface getPlayerWL_Result {
  win: number;
  lose: number;
}