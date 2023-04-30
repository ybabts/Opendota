import { Dota, StatusCodes } from "../../deps.ts";
import { apiKey, endpoint } from "../mod.ts";

export async function getMatch(matchid: number | string) {
  const url = new URL(endpoint + '/api/match/' + matchid);
  if(apiKey) url.searchParams.set('api_key', apiKey);
  const req = await fetch(url);
  if(req.status !== StatusCodes.OK) throw new Error(await req.text());
  const res: getMatch_Result = await req.json().catch(e => { throw e; });
  return res;
}

interface getMatch_Result {
  match_id: number;
  barracks_status_dire: number;
  barracks_status_radiant: number;
  chat: null;
  cluster: number;
  cosmetics: null;
  dire_score: number;
  dire_team_id: null;
  draft_timings: null;
  duration: number;
  engine: number;
  first_blood_time: number;
  game_mode: number;
  human_players: number;
  leagueid: number;
  lobby_type: number;
  match_seq_num: number;
  negative_votes: number;
  objectives: null;
  picks_bans: getMatch_PickBan[];
  positive_votes: number;
  radiant_gold_adv: null;
  radiant_score: number;
  radiant_team_id: null;
  radiant_win: boolean;
  radiant_xp_adv: null;
  skill: null;
  start_time: number;
  teamfights: null;
  tower_status_dire: number;
  tower_status_radiant: number;
  version: null;
  replay_salt: number;
  series_id: number;
  series_type: number;
  patch: number;
  region: number;
  replay_url: string;
}

interface getMatch_PickBan {
  is_pick: boolean;
  hero_id: Dota.HeroID;
  team: number;
  order: number;
}

interface getMatch_Player {
  match_id: number;
  player_slot: number;
  ability_targets: null;
  ability_upgrades_arr: Dota.AbilityID[];
  ability_uses: null;
  account_id: null;
  actions: null;
  additional_units: null;
  assists: number;
  backpack_0: number;
  backpack_1: number;
  backpack_2: number;
  backpack_3: null;
  buyback_log: null;
  camps_stacked: null;
  connection_log: null;
  creeps_stacked: null;
  damage: null;
  damage_inflictor: null;
  damage_inflictor_received: null;
  damage_taken: null;
  damage_targets: null;
  deaths: number;
  denies: number;
  dn_t: null;
  firstblood_claimed: null;
  gold: number;
  gold_per_min: number;
  gold_reasons: null;
  gold_spent: number;
  gold_t: null;
  hero_damage: number;
  hero_healing: number;
  hero_hits: null;
  hero_id: number;
  item_0: number;
  item_1: number;
  item_2: number;
  item_3: number;
  item_4: number;
  item_5: number;
  item_neutral: number;
  item_uses: null;
  kill_streaks: null;
  killed: null;
  killed_by: null;
  kills: number;
  kills_log: null;
  lane_pos: null;
  last_hits: number;
  leaver_status: number;
  level: number;
  lh_t: null;
  life_state: null;
  max_hero_hit: null;
  multi_kills: null;
  net_worth: number;
  obs: null;
  obs_left_log: null;
  obs_log: null;
  obs_placed: null;
  party_id: number;
  party_size: number;
  performance_others: null;
  permanent_buffs: any[];
  pings: null;
  pred_vict: null;
  purchase: null;
  purchase_log: null;
  randomed: null;
  repicked: null;
  roshans_killed: null;
  rune_pickups: null;
  runes: null;
  runes_log: null;
  sen: null;
  sen_left_log: null;
  sen_log: null;
  sen_placed: null;
  stuns: null;
  teamfight_participation: null;
  times: null;
  tower_damage: number;
  towers_killed: null;
  xp_per_min: number;
  xp_reasons: null;
  xp_t: null;
  radiant_win: boolean;
  start_time: number;
  duration: number;
  cluster: number;
  lobby_type: number;
  game_mode: number;
  is_contributor: boolean;
  patch: number;
  region: number;
  isRadiant: boolean;
  win: number;
  lose: number;
  total_gold: number;
  total_xp: number;
  kills_per_min: number;
  kda: number;
  abandons: number;
  rank_tier: null;
  is_subscriber: boolean;
  cosmetics: any[];
  benchmarks: {
    gold_per_min: {
      raw: number;
      pct: number;
    };
    xp_per_min: {
      raw: number;
      pct: number;
    };
    kills_per_min: {
      raw: number;
      pct: number;
    };
    last_hits_per_min: {
      raw: number;
      pct: number;
    };
    hero_damage_per_min: {
      raw: number;
      pct: number;
    };
    hero_healing_per_min: {
      raw: number;
      pct: number;
    };
    tower_damage: {
      raw: number;
      pct: number;
    };
    stuns_per_min: {
      raw: number;
      pct: number;
    };
    lhten: {};
  };
}