import { StatusCodes } from "../../deps.ts";
import { apiKey, endpoint } from "../mod.ts";
import { getPlayerMatches_QueryOptions } from "./mod.ts";

export async function getPlayerCounts(accountid: number | string, query: Partial<getPlayerMatches_QueryOptions>) {
  const url = new URL(endpoint + '/api/players/' + accountid + '/wardmap');
  if(apiKey) url.searchParams.set('api_key', apiKey);
  if(query)
    for(const [key, value] of Object.entries(query))
      url.searchParams.set(key, String(value));
  const req = await fetch(url);
  if(req.status !== StatusCodes.OK) throw new Error(await req.text());
  const res: getPlayerWardmap_Result = await req.json().catch(e => { throw e; });
  return res;
}

type getPlayerWardmap_Result_XY = Record<string, Record<string, number>>;

export interface getPlayerWardmap_Result {
  obs: getPlayerWardmap_Result_XY;
  sen: getPlayerWardmap_Result_XY;
}