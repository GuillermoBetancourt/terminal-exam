/**
 * Fake data for the test. You don't need to understand
 * the implementation detail of it. The only thing important to know is
 * the Player[] type which is what {data} from usePlayersAsync() return resolves too
 */

import type {Player} from "./types"

const playerNames = [
  "Zaydan Nicholson",
  "Camden Pemberton",
  "Ahmad Paul",
  "Alivia Gaines",
  "Kayla Yu",
  "Gianni Dickerson",
  "Muskaan Mcguire",
  "Shoaib Benton",
  "Ishmael Cole",
  "Ayyub Carr",
  "Lennon Mahoney",
  "Scarlet Marquez",
  "Lexi-Mae Cline",
  "Mandy Salazar",
  "Rahim Austin",
  "Conal Coates",
  "Mahir Ortiz",
  "Annabel Parsons",
  "Sullivan Small",
  "Charlton Fitzpatrick",
  "Barry Sargent",
  "Nansi Ventura",
  "Demi Warren",
  "Zephaniah Easton",
  "Britney Donaldson",
  "Keiran Ireland",
  "Denis Morton",
  "John Hogan",
  "Gwion Jordan",
  "Traci Connolly",
  "Hywel Payne",
  "Zaynab Fellows",
  "Kason Quinn",
  "Scarlett Walton",
  "Jawad Gross",
  "Emanuel Herbert",
  "Lyndsey Navarro",
  "Lili Salter",
  "Maariya Foster",
  "Aariz Butler",
  "Austen Barrett",
  "Connor Gamble",
  "Sinead Bailey",
  "Shaan Sexton",
  "Nell Stephens",
  "Eleanor Mccabe",
  "Susie Naylor",
  "Rhodri Spencer",
  "Ace Conroy",
  "Kierran Lancaster",
]

const locationNames = [
  "Aethelney",
  "Airedale",
  "Warthford",
  "Arkmunster",
  "Erostey",
  "Goldenleaf",
  "Taedmorden",
  "Lundy",
  "Auchendale",
  "Aramore",
]

const player1: Player = {
  membershipDate: "2020-01-02",
  fullName: playerNames[40], // Austen Barrett
  avatar: "https://www.adoptapet.com/blog/uploads/2013/01/Mango-cat-collar.jpg",
  games: [
    {
      date: "2020-02-14",
      location: locationNames[0],
      otherPlayers: [
        playerNames[0],
        playerNames[3],
        playerNames[5],
        playerNames[7],
        playerNames[9],
        playerNames[10],
      ],
      winnerName: playerNames[40],
    },
    {
      date: "2020-02-07",
      accurateDate: {
        date: "2020-02-20",
      },
      location: locationNames[1],
      otherPlayers: [playerNames[0], playerNames[18], playerNames[9], playerNames[12]],
      winnerName: playerNames[0],
    },
    {
      date: "2020-02-02",
      accurateDate: {
        date: "2020-02-09",
      },
      location: locationNames[0],
      otherPlayers: [
        playerNames[0],
        playerNames[2],
        playerNames[22],
        playerNames[8],
        playerNames[9],
        playerNames[12],
      ],
      winnerName: playerNames[40],
    },
  ],
}

const player2: Player = {
  membershipDate: "2020-01-10",
  fullName: playerNames[41], // Connor Gamble
  avatar:
    "https://i1.wp.com/katzenworld.co.uk/wp-content/uploads/2019/06/funny-cat.jpeg?resize=1320%2C1320&ssl=1",
  games: [
    {
      date: "2020-02-02",
      accurateDate: {
        date: "2020-02-21",
      },
      location: locationNames[0],
      otherPlayers: [
        playerNames[3],
        playerNames[0],
        playerNames[2],
        playerNames[5],
        playerNames[19],
      ],
      winnerName: playerNames[5],
    },
    {
      date: "2020-02-23",
      location: locationNames[4],
      otherPlayers: [
        playerNames[3],
        playerNames[5],
        playerNames[19],
        playerNames[12],
        playerNames[2],
        playerNames[5],
        playerNames[19],
      ],
      winnerName: playerNames[41],
    },
  ],
}

const player3: Player = {
  membershipDate: "2020-01-01",
  fullName: playerNames[42], // Sinead Bailey
  avatar:
    "https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Ffansided.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2019%2F05%2F529020720.jpeg",
  games: [
    {
      date: "2020-02-14",
      accurateDate: {
        date: "2020-02-19",
      },
      location: locationNames[3],
      otherPlayers: [playerNames[3], playerNames[0]],
      winnerName: playerNames[0],
    },
    {
      date: "2020-02-02",
      accurateDate: {
        date: "2020-02-22",
      },
      location: locationNames[2],
      otherPlayers: [
        playerNames[1],
        playerNames[0],
        playerNames[11],
        playerNames[10],
        playerNames[2],
        playerNames[5],
      ],
      winnerName: playerNames[10],
    },
  ],
}

export const players = [player1, player2, player3]
