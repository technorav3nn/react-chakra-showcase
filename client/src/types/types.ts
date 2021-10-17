export interface IPlayerResponse {
  info: {
    guildId: string;
    autoplay: boolean;
    paused: boolean;
    playing: boolean;
  };
  tracks: any[] | null;
  avatar: string;
}
