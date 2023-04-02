import React from 'react';
import SaveIcon from '@mui/icons-material/Save';
import { useDispatch } from 'react-redux';
import { editCampSites } from "../../actions/campSitesActions";


const EditSiteView = (props) => {
  const dispatch = useDispatch();
  //Next steps--need to add an onchange to the inputs to allow the values to update the state on save.
  return (
    <tr>
      <td>
        <input value={props.name} name="editname"onChange={e => setName(e.target.value)}/>
      </td>
      <td>
        <input value={props.coordinates} onChange={e => setCordinates(e.target.value)}/>
        </td>
      <td>
        <input value={props.datesOfStay} name="editdatesOfStay" onChange={e => setDatesOfStay(e.target.value)}/>
      </td>
      <td><input value={props.notes} onChange={e => props.setNotes(e.target.value)}/></td>
      <td>
        <>
          <SaveIcon
            onClick={() => dispatch(editCampSites(props.currentState, props.id, "yellow", "props.editdatesOfStay"))}
          />
        </>
      </td>
    </tr>
  );
};

export default EditSiteView;
