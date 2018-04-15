export const initialState = {
  level: `intro`
};

export const dataPicture = {
  paintings: [
    // People
    `https://k42.kn3.net/CF42609C8.jpg`,

    // Animals
    `https://k42.kn3.net/D2F0370D6.jpg`,

    // Nature
    `https://k32.kn3.net/5C7060EC5.jpg`
  ],
  photos: [
    // People
    `http://i.imgur.com/1KegWPz.jpg`,

    // Animals
    `https://i.imgur.com/DiHM5Zb.jpg`,

    // Nature
    `http://i.imgur.com/DKR1HtB.jpg`
  ]
};

export const data = {
  'intro': {
    name: `intro`,
    description: `<sup>*</sup> Это не фото. Это рисунок маслом нидерландского
 художника-фотореалиста Tjalf Sparnaay.`,
    screen: {
      next: `greeting`,
      elementClick: `.intro__asterisk`
    }
  },
  'greeting': {
    name: `greeting`,
    description: ``,
    screen: {
      next: `rules`,
      elementClick: `.greeting__continue`
    }
  },
  'rules': {
    name: `rules`,
    description: ``,
    screen: {
      next: `game`,
      elementClick: `.rules__input`
    }
  },
  'game': {
    name: `game`,
    description: `Угадайте для каждого изображения фото или рисунок?`
  }
};
