export interface IPokemon {
  name: string;
  sprites: {
    back_default: string;
    front_default: string;
  };
  stats: ItemStat[];
}

export interface ItemStat {
  base_stat: string;
  stat: {
    name: string;
  };
}

//todo: SUPABASE

export interface FavoriteBody {
  data: IPokemon;
  name: string;
  user_id: string;
}