let localCampSites = JSON.parse(localStorage.getItem('campSites'));

const initialState = localCampSites || [];

export default function campSitesReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD-SITE':
      let tempState = [...state, action.payload];
      localStorage.setItem("campSites", JSON.stringify(tempState));
      return tempState;

    case 'DELETE-SITE':
      var { currentState, siteID } = action.payload
      let newList = currentState.filter(x => x.id !== siteID);
      localStorage.setItem("campSites", JSON.stringify(newList));
      return newList;

    case 'EDIT-SITE':
        var { currentState, siteID, editname, editdatesOfStay } = action.payload;

        let editedSites = currentState.map(site => {
            if(site.id == siteID){
              site.name = editname;
              site.datesOfStay = editdatesOfStay;
              site.edit = false;
            }
            return site;
          });
        localStorage.setItem("campSites", JSON.stringify(editedSites));
        
        return editedSites;

    default:
      return state;
  }
}
