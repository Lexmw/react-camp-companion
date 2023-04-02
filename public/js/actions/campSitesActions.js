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

export const editCampSites = (currentState, siteID, inputValues) => {
  return {
    type: 'EDIT-SITE',
    payload: {currentState:currentState, siteID:siteID, inputValues:inputValues},
  };
};
