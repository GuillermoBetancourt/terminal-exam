export type PlayerGame = {
    date: string;
    location: string;
    accurateDate?: {
      date: string;
    };
    otherPlayers: string[];
    winnerName: string;
  };

  export interface Player {
    membershipDate?: string;
    fullName: string;
    avatar?: string; // I may remove that
    games: PlayerGame[];
  }