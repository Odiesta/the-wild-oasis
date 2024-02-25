import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://lnrxvcwzfsdpxkmgmrll.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxucnh2Y3d6ZnNkcHhrbWdtcmxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgzNTEwNzYsImV4cCI6MjAyMzkyNzA3Nn0.IFxhvz9BbJMk-NIbjwhh9ORRtoCjWLt-3k3KLt2XTRQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
