const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

const bookSeed = [
  {
    authors: ["Suzanne Collins"],
    description:
      "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
    image:
      "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link:
      "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
    title: "The Hunger Games",
  },
  {
    authors: ["David Rogers", "Daniel Keyes"],
    description:
      "Oscar-winning film Charly starring Cliff Robertson and Claire Bloom-a mentally challenged man receives an operation that turns him into a genius...and introduces him to heartache.",
    image:
      "http://books.google.com/books/content?id=gK98gXR8onwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link:
      "http://books.google.com/books?id=gK98gXR8onwC&dq=flowers+inauthor:keyes&hl=&source=gbs_api",
    title: "Flowers for Algernon",
  },
  {
    title: "Little House on the Prairie",
    authors: ["Laura Ingalls Wilder"],
    description:
      "The third book in Laura Ingalls Wilder's treasured Little House series—now available as an ebook! This digital version features Garth Williams's classic illustrations, which appear in vibrant full color on a full-color device and in rich black-and-white on all other devices. The adventures continue for Laura Ingalls and her family as they leave their little house in the Big Woods of Wisconsin and set out for the big skies of the Kansas Territory. They travel for many days in their covered wagon until they find the best spot to build their house. Soon they are planting and plowing, hunting wild ducks and turkeys, and gathering grass for their cows. Just when they begin to feel settled, they are caught in the middle of a dangerous conflict. The nine Little House books are inspired by Laura's own childhood and have been cherished by generations of readers as both a unique glimpse into America's frontier history and as heartwarming, unforgettable stories.",
    image:
      "http://books.google.com/books/content?id=m06dCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link:
      "https://play.google.com/store/books/details?id=m06dCwAAQBAJ&source=gbs_api",
  },
  {
    title: "Anne of Green Gables",
    description:
      "Anne of Green Gables is a children’s classic by Canadian author L. M. Montgomery and recently adapted by Netflix in the hit series Anne with an E. 11-year-old Anne is mistakenly sent away from her orphanage to live on Prince Edward Island with brother and sister Matthew and Marilla Cuthbert who need help on their farm. Wild and imaginative Anne learns to find her place in the little town of Avonlea, makes friends, and strives to be the best in school. A children and adults' favourite Anne's tale of is one of love, individuality, and (mis)adventures. Lucy Maud Montgomery (1874-1942) was a Canadian author. She is most famous for her novel ́Anne of Green Gables ́ that was an instant hit and became a series that is still enjoyed by children and parents the world over. She grew up on Prince Edward Island and was raised by her grandparents after her mother's early death. Much like her most famous character, Anne, Montgomery had a lonely childhood for which she found relief in the beautiful nature of Prince Edward and in her fierce imagination, which she very early on turned into writing. She ́s a canon of Canadian and children ́s literature with over twenty novels, and hundreds of short-stories, poems, and essays to her name.",
    authors: ["Lucy Maud Montgomery"],
    image:
      "http://books.google.com/books/content?id=2ifZDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link:
      "https://play.google.com/store/books/details?id=2ifZDQAAQBAJ&source=gbs_api",
  },
];

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
