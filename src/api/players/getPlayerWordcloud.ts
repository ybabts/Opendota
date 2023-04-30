import { StatusCodes } from "../../deps.ts";
import { apiKey, endpoint } from "../mod.ts";

export async function getPlayerWordcloud(accountid: number | string) {
  const url = new URL(endpoint + '/api/players/' + accountid + '/wordcloud');
  if(apiKey) url.searchParams.set('api_key', apiKey);
  const req = await fetch(url);
  if(req.status !== StatusCodes.OK) throw new Error(await req.text());
  const res: getPlayerWordcloud_Result = await req.json().catch(e => { throw e; });
  return res;
}

export interface getPlayerWordcloud_Result {
  my_word_counts: Record<string, number>;
  all_word_counts: Record<string, number>;
}