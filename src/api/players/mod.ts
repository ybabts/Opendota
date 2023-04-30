import { Dota } from "../../deps.ts";

export * from './getPlayer.ts';
export * from './getPlayerHeroes.ts';
export * from './getPlayerMatches.ts';
export * from './getPlayerPeers.ts';
export * from './getPlayerPros.ts';
export * from './getPlayerRankings.ts';
export * from './getPlayerRatings.ts';
export * from './getPlayerRecentMatches.ts';
export * from './getPlayerTotals.ts';
export * from './getPlayerWL.ts';
export * from './getPlayerWordcloud.ts';
export * from './getPlayersByRank.ts';

export interface getPlayerMatches_QueryOptions {
  limit: number;
  offset: number;
  win: number;
  patch: number;
  game_mode: Dota.Gamemode;
  lobby_type: Dota.LobbyType;
  region: number;
  date: number;
  lane_role: number;
  hero_id: Dota.HeroID;
  is_radiant: number;
  included_account_id: number;
  excluded_account_id: number;
  with_hero_id: number;
  against_hero_id: number;
  significant: number;
  having: number;
  sort: string;
}