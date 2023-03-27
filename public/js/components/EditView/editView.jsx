import React from 'react';
import SaveIcon from '@mui/icons-material/Save';

const EditSiteView = (props) => {
  //Next steps--need to add an onchange to the inputs to allow the values to update the state on save.
  return (
    <tr>
      <td>
        {/* <input value={props.name} onChange={e => setName(e.target.value)}/> */}
      </td>
      <td>
        {/* <input value={JSON.stringify(props.coordinates)} onChange={e => setCordinates(e.target.value)}/> */}
        </td>
      <td>
        {/* <input value={props.datesOfStay} onChange={e => setDatesOfStay(e.target.value)}/> */}
      </td>
      <td><input value={props.notes} onChange={e => props.setNotes(e.target.value)}/></td>
      <td>
        <>
          <SaveIcon
            onClick={() => console.log('save')}
          />
        </>
      </td>
    </tr>
  );
};

export default EditSiteView;
