export enum CollectionColors {
  poppy = "bg-gradient-to-r from-rose-400 to-red-500",
  snowflake = "bg-gradient-to-r from-indigo-400 to-cyan-400",
  earth = "bg-gradient-to-r from-emerald-500 to-emerald-900",
  metal = "bg-gradient-to-r from-slate-500 to-slate-800",
}

export type CollectionColor = keyof typeof CollectionColors;
