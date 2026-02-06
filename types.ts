
export interface Quest {
  id: string;
  title: string;
  description: string;
  xp: string;
  tag: string;
  tagColor: string;
  imageUrl: string;
}

export interface Stat {
  label: string;
  value: string;
  color?: string;
}
