import { supabase } from "@/app/lib/supabase";
import { Quotes } from "../types/types";

let quotesData: Quotes | null = null;

export async function getStaticQuotes() {
  if (quotesData) return quotesData;

  const { data, error } = await supabase.from("quotes_dev").select();

  if (error) throw new Error();

  quotesData = data;

  return quotesData;
}
