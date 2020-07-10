// DATA - Array with all friend profiles

var friends = [
  {
    name: "Abby Thurgood",
    photo: "https://i.pinimg.com/564x/67/81/d4/6781d440e823b8edf65a78184e8b0caa.jpg",
    scores: ["5", "1", "4", "3", "2", "5", "2", "4", "5", "4", "4", "3", "1", "1", "3"]
  },
  {
    name: "Aidan Devere",
    photo: "https://i.pinimg.com/564x/78/ad/5c/78ad5c6033b7b228f721b25380a3a1d7.jpg",
    scores: ["3", "2", "5", "1", "1", "1", "2", "5", "3", "1", "2", "4", "5", "1", "3"]
  },
  {
    name: "Blossom Emerson",
    photo: "https://i.pinimg.com/564x/02/97/1c/02971ca153f46d7fbd7f61e988781da1.jpg",
    scores: ["2", "1", "3", "5", "4", "4", "3", "2", "1", "5", "5", "1", "2", "3", "3"]
  },
  {
    name: "Barney Walsh",
    photo: "https://i.pinimg.com/564x/40/9b/d2/409bd2c7930df85f4b5dd0e87500bc07.jpg",
    scores: ["4", "3", "1", "2", "4", "4", "3", "1", "5", "1", "2", "3", "1", "4", "4"]
  },
  {
    name: "Chelsea Starr",
    photo: "https://i.pinimg.com/564x/71/08/35/710835ef8e4c828cfcedb640b6907b97.jpg",
    scores: ["3", "4", "4", "5", "3", "1", "5", "4", "3", "2", "3", "2", "1", "1", "3"]
  },
  {
    name: "Caleb Crabtree",
    photo: "https://i.pinimg.com/564x/9c/bb/c4/9cbbc4d10d94970e4e353ed73aa44bdd.jpg",
    scores: ["2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2"]
  },
  {
    name: "Dixie Applegate",
    photo: "https://i.pinimg.com/236x/09/c1/a5/09c1a5ed3f4d8f942f9e37c8e5ac3a4d.jpg",
    scores: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
  },
  {
    name: "Dermott Weatherspoon",
    photo: "https://i.pinimg.com/564x/04/8f/9b/048f9b253daaa830ea6719afa7227736.jpg",
    scores: ["4", "2", "3", "5", "4", "2", "1", "4", "3", "5", "3", "5", "4", "5", "2"]
  },
  {
    name: "Emily Lockwood",
    photo: "https://i.pinimg.com/564x/c0/77/0b/c0770b03ff29252c59ed18e36fe15966.jpg",
    scores: ["3", "2", "1", "1", "5", "2", "1", "4", "3", "2", "4", "2", "1", "1", "3"]
  },
  {
    name: "Edison Terwilliger",
    photo: "https://i.pinimg.com/564x/2d/0f/f1/2d0ff1274285e669ca53f1b0a552c594.jpg",
    scores: ["2", "1", "3", "5", "4", "3", "3", "1", "2", "3", "4", "1", "2", "1", "4"]
  },
  {
    name: "Fiona Pennypacker",
    photo: "https://i.pinimg.com/564x/5d/72/fe/5d72fe031e12d7da138478fc47b36bc2.jpg",
    scores: ["5", "5", "1", "2", "1", "4", "2", "3", "1", "1", "5", "2", "3", "1", "2"]
  },
  {
    name: "Felix Middlebrook",
    photo: "https://i.pinimg.com/564x/d3/70/46/d3704659c5642ea1e015d11de296cb51.jpg",
    scores: ["1", "4", "2", "5", "1", "3", "5", "4", "2", "1", "1", "2", "5", "3", "1"]
  },
  {
    name: "Georgia Knightly",
    photo: "https://i.pinimg.com/564x/3c/e6/f7/3ce6f71c1f7adf842542201d2cf32ef9.jpg",
    scores: ["1", "4", "2", "2", "1", "3", "1", "4", "2", "1", "3", "2", "5", "5", "2"]
  },
  {
    name: "Giles Poppleton",
    photo: "https://i.pinimg.com/564x/ce/b0/93/ceb0937369ee4af7e8035421397c1416.jpg",
    scores: ["5", "1", "4", "4", "5", "1", "2", "5", "4", "2", "2", "1", "2", "3", "1"]
  },
  {
    name: "Hannah Bishop",
    photo: "https://i.pinimg.com/564x/93/ed/65/93ed65808bc8a5f384bfd6a2037e96e7.jpg",
    scores: ["4", "3", "1", "1", "2", "1", "2", "5", "3", "3", "1", "1", "2", "1", "4"]
  },
  {
    name: "Hugo Broadstone",
    photo: "https://i.pinimg.com/564x/a6/5b/13/a65b13ddf43905ed7847d0c44b98cf7c.jpg",
    scores: ["3", "3", "4", "4", "5", "5", "1", "1", "2", "2", "3", "3", "4", "4", "5"]
  },
  {
    name: "Isabelle Makepeace",
    photo: "https://i.pinimg.com/564x/d4/90/64/d4906433454421363beec6a78d948165.jpg",
    scores: ["5", "5", "4", "4", "3", "3", "2", "2", "1", "1", "2", "2", "3", "3", "4"]
  },
  {
    name: "Isaac Stonebrook",
    photo: "https://i.pinimg.com/564x/ce/ae/67/ceae6741197ae182bfe8f9aaead95eff.jpg",
    scores: ["4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3"]
  },
  {
    name: "Josie Prescott",
    photo: "https://i.pinimg.com/564x/05/33/8c/05338cdd0b7621f0999c58f3dcd6b6b1.jpg",
    scores: ["5", "4", "3", "2", "1", "2", "3", "4", "5", "4", "3", "2", "1", "2", "3"]
  },
  {
    name: "Jacob Northcott",
    photo: "https://i.pinimg.com/564x/f2/99/ce/f299ce33e48866c3f9a2784967f0fb81.jpg",
    scores: ["3", "3", "2", "2", "1", "1", "2", "2", "3", "3", "4", "4", "5", "5", "1"]
  },
  {
    name: "Kendall Burkhart",
    photo: "https://i.pinimg.com/564x/53/6e/c5/536ec53115874bf6bd8bceca8ff693f2.jpg",
    scores: ["4", "4", "5", "5", "1", "1", "2", "2", "3", "3", "4", "4", "5", "4", "2"]
  },
  {
    name: "Killian Harwood",
    photo: "https://i.pinimg.com/564x/82/dd/a0/82dda0ea932dfcfb666ba2d51cc1bf2f.jpg",
    scores: ["3", "2", "1", "5", "4", "3", "2", "1", "5", "4", "3", "2", "1", "5", "4"]
  },
  {
    name: "Lenore Caswell",
    photo: "https://i.pinimg.com/564x/44/94/34/449434ec6c08d53440e08abcf0bfb300.jpg",
    scores: ["3", "4", "5", "4", "3", "2", "1", "2", "3", "4", "5", "4", "3", "2", "1"]
  },
  {
    name: "Leopold Stratford",
    photo: "https://i.pinimg.com/564x/66/a4/63/66a463f27df095f1f106609fe618f9fb.jpg",
    scores: ["2", "2", "1", "1", "3", "3", "5", "5", "1", "1", "2", "1", "3", "5", "4"]
  },
  {
    name: "Maggie Hopewell",
    photo: "https://i.pinimg.com/564x/78/30/f5/7830f5027058d8a304a370bdb65db828.jpg",
    scores: ["1", "3", "5", "3", "1", "3", "5", "3", "1", "3", "5", "3", "5", "3", "1"]
  },
  {
    name: "Micah Wormwood",
    photo: "https://i.pinimg.com/564x/9c/e8/69/9ce86988c8d9974c048864d32b855db6.jpg",
    scores: ["2", "4", "2", "4", "2", "4", "2", "4", "2", "4", "2", "4", "2", "4", "2"]
  },
  {
    name: "Nora Kilbourne",
    photo: "https://i.pinimg.com/564x/74/9a/c4/749ac4e8e1c5f0699aeaa7427a8540f1.jpg",
    scores: ["1", "2", "1", "2", "1", "2", "1", "2", "1", "2", "1", "2", "1", "2", "1"]
  },
  {
    name: "Noah Woodcock",
    photo: "https://i.pinimg.com/564x/fd/11/63/fd116311c5ccf0114d09226cf2fc56d2.jpg",
    scores: ["3", "1", "3", "4", "3", "1", "3", "5", "3", "4", "3", "4", "3", "4", "3"]
  },
  {
    name: "Olivia Lambert",
    photo: "https://i.pinimg.com/564x/81/a8/ff/81a8ff9d6c2af8afe1f341a8c5291a98.jpg",
    scores: ["1", "1", "1", "4", "1", "1", "1", "5", "1", "4", "1", "4", "1", "4", "1"]
  },
  {
    name: "Oscar Tenpenny",
    photo: "https://i.pinimg.com/564x/47/d0/47/47d0479bb27fa4a975a684dadf4a7c0a.jpg",
    scores: ["4", "1", "4", "4", "4", "1", "4", "5", "4", "4", "4", "4", "4", "4", "4"]
  },
  {
    name: "Pepper Applewhite",
    photo: "https://i.pinimg.com/564x/63/97/b0/6397b0e5aa294193c56ee3ffa4915607.jpg",
    scores: ["5", "2", "4", "2", "5", "2", "2", "2", "4", "2", "4", "2", "4", "2", "1"]
  },
  {
    name: "Poindexter Endicott",
    photo: "https://i.pinimg.com/564x/a2/a1/f1/a2a1f12bd4eba41549b4b12273d22a4b.jpg",
    scores: ["5", "3", "4", "3", "5", "3", "2", "3", "4", "3", "4", "3", "4", "3", "1"]
  },
  {
    name: "Rosemary Gallagher",
    photo: "https://i.pinimg.com/564x/2e/41/eb/2e41ebbe783e42125d352b9987c9f5c8.jpg",
    scores: ["1", "5", "2", "2", "1", "5", "4", "1", "2", "2", "2", "2", "2", "2", "5"]
  },
  {
    name: "Rupert Stringfellow",
    photo: "https://i.pinimg.com/564x/ca/bc/e7/cabce7beb1ca072bb3e7cca8aca80064.jpg",
    scores: ["3", "3", "2", "2", "3", "4", "4", "3", "2", "2", "2", "4", "1", "1", "3"]
  },
  {
    name: "Scarlet Pettigrew",
    photo: "https://i.pinimg.com/564x/38/93/ad/3893adf018208b7d419b7933841821d2.jpg",
    scores: ["2", "4", "1", "1", "2", "4", "5", "2", "1", "2", "3", "4", "3", "2", "1"]
  },
  {
    name: "Spencer Applebaum",
    photo: "https://i.pinimg.com/564x/a8/44/70/a8447067fe1b1d642cc535e5c29b62c2.jpg",
    scores: ["5", "1", "5", "1", "5", "1", "5", "1", "5", "1", "5", "1", "5", "1", "5"]
  },
  {
    name: "Tansy Goodfellow",
    photo: "https://i.pinimg.com/564x/62/0c/85/620c85d556cfe48cbeb0b15a5b6f52df.jpg",
    scores: ["2", "5", "1", "2", "3", "4", "1", "4", "3", "5", "3", "1", "2", "4", "4"]
  },
  {
    name: "Theo Seabright",
    photo: "https://i.pinimg.com/564x/47/7e/42/477e42c651f3c57a1fa335c611a5f388.jpg",
    scores: ["4", "1", "4", "2", "5", "2", "1", "3", "1", "4", "2", "4", "2", "5", "5"]
  },
  {
    name: "Vicky Hastings",
    photo: "https://i.pinimg.com/564x/c0/ee/fa/c0eefa8ebc663ab656f7a3184a8e4645.jpg",
    scores: ["3", "3", "1", "2", "2", "4", "1", "2", "3", "1", "1", "4", "2", "1", "3"]
  },
  {
    name: "Vance Blackstarr",
    photo: "https://i.pinimg.com/564x/09/9b/9d/099b9dfada93fea9689679611f421c60.jpg",
    scores: ["5", "1", "2", "4", "3", "2", "2", "3", "5", "4", "2", "4", "1", "2", "5"]
  },
  {
    name: "Wanda Dickerson",
    photo: "https://i.pinimg.com/564x/08/8f/26/088f262663e0316c367ccd154315cf4d.jpg",
    scores: ["5", "1", "4", "4", "5", "1", "2", "5", "4", "4", "4", "4", "4", "4", "1"]
  },
  {
    name: "Wallace Braddock",
    photo: "https://i.pinimg.com/564x/4f/e7/fd/4fe7fd9655d8f1e8a05670cbb0d2d898.jpg",
    scores: ["3", "4", "1", "3", "2", "4", "2", "1", "2", "4", "4", "5", "1", "2", "5"]
  },
  {
    name: "Zelda Davenport",
    photo: "https://i.pinimg.com/564x/2c/94/a5/2c94a501f50858361b02de8bb16893ae.jpg",
    scores: ["4", "2", "4", "3", "1", "3", "5", "1", "3", "3", "5", "5", "1", "2", "4"]
  },
  {
    name: "Zach Cadwallader",
    photo: "https://i.pinimg.com/564x/04/bc/74/04bc74de698fc44d6f2723b6ce9711e7.jpg",
    scores: ["4", "1", "4", "2", "4", "3", "4", "4", "5", "3", "3", "1", "3", "5", "2"]
  },
  {
    name: "Quinn Pepperman",
    photo: "https://i.pinimg.com/564x/54/c2/67/54c26727e0ba5ac4a77c5944349e79c3.jpg",
    scores: ["3", "2", "3", "2", "3", "2", "3", "2", "3", "2", "3", "2", "3", "2", "3"]
  }

];

// Export array to make it accessible to other files using require
module.exports = friends;
