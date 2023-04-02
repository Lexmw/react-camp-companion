import React, { useState, useCallback } from "react";
import SaveIcon from '@mui/icons-material/Save';
import { useDispatch } from 'react-redux';
import { editCampSites } from "../../actions/campSitesActions";


const EditSiteView = (props) => {
  
  const [inputValues, setInputValues] = useState({ 
    name: props.name, 
    coordinates: props.coordinates, 
    datesOfStay: props.datesOfStay, 
    notes: props.notes 
  });
  
  const handleOnChange = useCallback(event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  });

  const dispatch = useDispatch();
  
  return (
    <tr>
      <td>
        <textarea class="editarea" value={ inputValues.name } name="name" onChange={ handleOnChange }/>
      </td>
      <td>
        <textarea class="editarea" value={ inputValues.coordinates } name="coordinates" onChange={ handleOnChange }/>
        </td>
      <td>
        <textarea class="editarea" value={ inputValues.datesOfStay } name="datesOfStay" onChange={ handleOnChange }/>
      </td>
      <td><textarea class="editarea" value={ inputValues.notes } name="notes" onChange={ handleOnChange }/></td>
      <td>
        <>
          <SaveIcon
            onClick={ () => dispatch(editCampSites(props.currentState, props.id, inputValues)) }
          />
        </>
      </td>
    </tr>
  );
};

export default EditSiteView;
