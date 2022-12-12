import resso from "resso";

const appStore = resso({
  isLoading: false,
  isMenu: false,
  isAreaSelector: false,
  isListCollapse: true,

  isAnimReady: false,
  // map exp
  mapStatus: null,
  mapOpacity: 1,
  mapExp: null,

  scene: 1,

  // common
  areas: [],
  lives: [],
  livesByArea: [],
  liveDetail: {},
  newsList: [],
  newDetail: {},
});

export default appStore;
