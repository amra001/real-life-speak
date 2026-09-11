-- Cleanup after Schule & Familie A1 master transfer
DROP FUNCTION IF EXISTS public._seed_school_family_a1(text,jsonb);
DROP TABLE IF EXISTS public._school_family_seed_chunks;
