const closeMenu = () => {
  return {
    type: "CLOSE_MENU",
    payload: {
      menuOpen: false
    }
  };
};

const openMenu = () => {
  return {
    type: "OPEN_MENU",
    payload: {
      menuOpen: true
    }
  };
};
