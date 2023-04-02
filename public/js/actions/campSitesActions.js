export const addCampSites = site => {
  return {
    type: 'ADD-SITE',
    payload: site,
  };
};

export const deleteCampSites = (currentState, siteID) => {
  return {
    type: 'DELETE-SITE',
    payload: {currentState: currentState, siteID: siteID},
  };
};

export const editCampSites = (currentState, siteID, name, datesOfStay, coordinates, notes) => {
  return {
    type: 'EDIT-SITE',
    payload: {currentState:currentState, siteID:siteID, editname:name, editdatesOfStay:datesOfStay, editedCoordinates:coordinates, editedNotes:notes},
  };
};
