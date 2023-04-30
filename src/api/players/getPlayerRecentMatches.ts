import { Dota, StatusCodes } from "../../deps.ts";
import { apiKey, endpoint } from "../mod.ts";

export async function getPlayerRecentMatches(accountid: number | string) {
  const url = new URL(endpoint + '/api/players/' + accountid + '/recentMatches');
  if(apiKey) url.searchParams.set('api_key', apiKey);
  const req = await fetch(url);
  if(req.status !== StatusCodes.OK) throw new Error(await req.text());
  const res: getPlayerRecentMatches_Result[] = await req.json().catch(e => { throw e; });
  return res;
}

export interface getPlayerRecentMatches_Result {
  match_id: number;
  player_slot: number;
  radiant_win: boolean;
  duration: number;
  game_mode: Dota.Gamemode;
  lobby_type: Dota.LobbyType;
  hero_id: Dota.HeroID;
  start_time: number;
  version: null;
  kills: number;
  deaths: number;
  assists: number;
  skill: null;
  average_rank: number;
  xp_per_min: number;
  gold_per_min: number;
  hero_damage: number;
  tower_damage: number;
  hero_healing: number;
  last_hits: number;
  lane: null;
  lane_role: null;
  is_roaming: null;
  cluster: number;
  leaver_status: number;
  party_size: number;
}