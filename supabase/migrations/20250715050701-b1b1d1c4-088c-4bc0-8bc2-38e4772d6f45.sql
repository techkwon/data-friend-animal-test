-- Create table for storing test results
CREATE TABLE public.results (
  id BIGSERIAL PRIMARY KEY,
  persona_key TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.results ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (since this is a public quiz)
CREATE POLICY "Anyone can insert results" 
ON public.results 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can view results for statistics" 
ON public.results 
FOR SELECT 
USING (true);

-- Add index for faster queries on persona_key
CREATE INDEX idx_results_persona_key ON public.results(persona_key);

-- Add index for faster queries on created_at for potential analytics
CREATE INDEX idx_results_created_at ON public.results(created_at);