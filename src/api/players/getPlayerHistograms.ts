import { StatusCodes } from "../../deps.ts";
import { apiKey, endpoint } from "../mod.ts";
import { getPlayerMatches_QueryOptions } from "./mod.ts";

export type HistogramField = 'kills' | 'actions_per_min' | 'assists' | 'comeback' | 'courier_kills' | 'deaths' | 'denies' | 'lane_effeciency_pct' | 'purchase_gem' | 'gold_per_min' | 'hero_damage' | 'hero_healing' | 'kda' | 'last_hits' | 'level' | 'loss' | 'pings' | 'neutral_kills' | 'purchase_ward_observer' | 'purchase_rapier' | 'purchase_ward_sentry' | 'stomp' | 'stuns' | 'throw' | 'tower_damage' | 'tower_kills' | 'purchase_tpscroll' | 'xp_per_min';

export async function getPlayerHistograms(accountid: number | string, field: HistogramField, query: Partial<getPlayerMatches_QueryOptions>) {
  const url = new URL(endpoint + '/api/players/' + accountid + '/histograms/' + field);
  if(apiKey) url.searchParams.set('api_key', apiKey);
  if(query)
    for(const [key, value] of Object.entries(query))
      url.searchParams.set(key, String(value));
  const req = await fetch(url);
  if(req.status !== StatusCodes.OK) throw new Error(await req.text());
  const res: getPlayerHistograms_Result[] = await req.json().catch(e => { throw e; });
  return res;
}

export interface getPlayerHistograms_Result {
  x: null;
  games: number;
  win: number;
}