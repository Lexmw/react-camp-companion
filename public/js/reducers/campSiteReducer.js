let localCampSites = JSON.parse(localStorage.getItem('campSites'));

const initialState = localCampSites || [];

export default function campSitesReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD-SITE':
      let tempState = [...state, action.payload];
      localStorage.setItem("campSites", JSON.stringify(tempState));
      return tempState;

    case 'DELETE-SITE':
      let newList = action.payload.currentState.filter(
        x => x.id !== action.payload.siteID,
      );

      let newLS = action.payload.currentState.filter(
        x => x.id !== action.payload.siteID,
      );

      // run through

      localStorage.removeItem(campsites[action.payload.siteID]);


      console.log('newlist?',newList)
      return newList && newLS;

    default:
      return state;
  }
}
