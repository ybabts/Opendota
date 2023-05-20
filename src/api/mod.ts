export * from './players/mod.ts';
export * from './matches/mod.ts';
export * from './proMatches/mod.ts';
export * from './proPlayers/mod.ts';

type apiKey = string | null;

export let apiKey: apiKey = null;
export let endpoint = 'https://api.opendota.com';

export function setAPIKey(key: apiKey): void {
  apiKey = key;
}

export function setEndpoint(url: string): void {
  endpoint = url;
}