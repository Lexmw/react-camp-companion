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
        var { currentState, siteID, inputValues } = action.payload;

        let editedSites = currentState.map(site => {
            if(site.id == siteID){
              site.name = inputValues.name;
              site.datesOfStay = inputValues.datesOfStay;
              site.edit = false;
              site.coordinates = JSON.parse(inputValues.coordinates);
              site.notes = inputValues.notes;
            }
            return site;
          });
          
        localStorage.setItem("campSites", JSON.stringify(editedSites));
        
        return editedSites;

    default:
      return state;
  }
}
