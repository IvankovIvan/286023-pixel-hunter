export const data = {
  'intro': {
    name: `intro`,
    header: false,
    screen: {
      next: `greeting`,
      elementClick: `.intro__asterisk`
    }
  },
  'greeting': {
    name: `greeting`,
    header: false,
    screen: {
      next: `rules`,
      elementClick: `.greeting__continue`
    }
  },
  'rules': {
    name: `rules`,
    header: false,
    screen: {
      next: `game`,
      elementClick: `.rules__input`
    }
  },
  'game-1': {
    name: `game-1`,
    description: ``,
    header: true,
    picCount: 2
  },
  'game-2': {
    name: `game-2`,
    description: ``,
    header: true,
    picCount: 1
  },
  'game-3': {
    name: `game-3`,
    description: ``,
    header: true,
    picCount: 3
  }
};

export const initialState = {
  games: [],
  life: 3,
  dataCurrent: {
    screen: {
      next: `intro`
    }
  }
};
