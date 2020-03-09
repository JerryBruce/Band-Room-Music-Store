const toggleMenu = (menuOpen, action) => {
  if (action.type === MENU_OPEN) {
    return action.payload;
  } else if (action.type === MENU_CLOSE) {
    return action.payload;
  }
};
