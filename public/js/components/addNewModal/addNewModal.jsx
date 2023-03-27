import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Modal} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import InputWithIcon from '../inputWithIcon';
import SolidButton from '../solidButton';
import './styles.css';
import {addCampSites} from '../../actions/campSitesActions';

const AddNewModal = props => {
  const [name, setName] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [datesOfStay, setDatesOfStay] = useState('');
  const [notes, setNotes] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorBgColor, setErrorBgColor] = useState("transparent")
  const dispatch = useDispatch();
  const {currentLatitude, currentLongitude} = props;

  const addNewSite = () => {

    if(!longitude && !latitude && !name){
      setErrorBgColor("#ffff");
      setErrorMessage('Please complete name, and add coordinates to add a new campsite.')
    }else{
      dispatch(
        addCampSites({
          id: Math.floor(Math.random() * 100),
          name: name,
          coordinates: {lat: latitude, lng: longitude},
          datesOfStay: datesOfStay,
          notes: notes,
        })
      );
      setErrorBgColor("transparent");
      setErrorMessage('');
      setLatitude('');
      setLongitude('');
      setDatesOfStay('');
      setNotes('');
      setName('');
      props.onClose();
    }
  };

  const getCurrentLocation = () => {
    setLatitude(currentLatitude);
    setLongitude(currentLongitude);
  };

  const closeAndClear = () => {
    setErrorBgColor("transparent");
    setErrorMessage('');
    setLatitude('');
    setLongitude('');
    setDatesOfStay('');
    setNotes('');
    setName('');
    props.onClose();
  }

  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div id="modal-body">
        <div className="close-icon">
          <CloseIcon onClick={closeAndClear} />
        </div>
        <h2>Add A New Camp Site</h2>
        <p>
          Enter Information on the campsite you want to remember. Be as specific
          as possible so that you remember it for next time.
        </p>
        <div className="error-message" style={{"backgroundColor":`${errorBgColor}`}}>{errorMessage}</div>
        <form>
          <div className="modal-input-holder">
            <InputWithIcon
              className="input"
              color="primary"
              placeholderText="Name"
              onChange={e => setName(e.target.value)}
              required={true}
              value={name}
            ></InputWithIcon>

            <div className="latlng-container">
              <InputWithIcon
                className="input"
                color="primary"
                placeholderText="Latitude"
                required={true}
                onChange={e => setLatitude(e.target.value)}
                value={latitude}
              ></InputWithIcon>

              <InputWithIcon
                className="input"
                color="primary"
                placeholderText="Longitude"
                required={true}
                onChange={e => setLongitude(e.target.value)}
                value={longitude}
              ></InputWithIcon>

            <SolidButton
              color="primary"
              innerText="Use Current Location"
              function={getCurrentLocation}
              fullWidth={false}
            ></SolidButton>
            </div>

            <InputWithIcon
              className="input"
              color="primary"
              placeholderText="Dates of Stay"
              required={true}
              onChange={e => setDatesOfStay(e.target.value)}
              value={datesOfStay}
            ></InputWithIcon>
            <InputWithIcon
              className="input"
              color="primary"
              placeholderText="Notes"
              required={true}
              onChange={e => setNotes(e.target.value)}
              value={notes}
            ></InputWithIcon>
          </div>
          <div className="signup-button-holder">
            <SolidButton
              color="secondary"
              innerText="+ Add"
              function={() => addNewSite()}
              fullWidth={true}
            ></SolidButton>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddNewModal;
