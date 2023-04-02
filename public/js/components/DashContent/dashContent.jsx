import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { GoogleApiWrapper } from "google-maps-react";
import { deleteCampSites, editCampSites } from "../../actions/campSitesActions";
import DashContent from "./styled";
import SolidButton from "../solidButton";
import AddNewModal from "../addNewModal/addNewModal";
import Maps from "../map/map";
import EditSiteView from "../EditView/editView";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";

const DashMain = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentLatitude, setCurrentLatitude] = useState("");
  const [currentLongitude, setCurrentLongitude] = useState("");
  const [campData, setCampData] = useState([]);

  const { campSitesReducer } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    setCampData(campSitesReducer);
  }, [campSitesReducer.length]);

  const openModal = () => {
    setModalIsOpen(true);
    return;
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  //These functions can grab the users location from html 5 api
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const showPosition = (position) => {
    setCurrentLatitude(position.coords.latitude);
    setCurrentLongitude(position.coords.longitude);
  };

  const handleEdit = (id) => {
    setCampData(
      campData.map((listItem) => {
        if (listItem.id == id) {
          listItem.edit = !listItem.edit;
        }
        return listItem;
      })
    );
  };
  ///////////////////////////////////////////////////////////////////

  return (
    <DashContent>
      <AddNewModal
        open={modalIsOpen}
        onClose={closeModal}
        currentLatitude={currentLatitude}
        currentLongitude={currentLongitude}
      />
      <div id="content-area">
        <div className="heading">
          <div>
            <h1>My Camp Companion</h1>
            <p>
              Save all the memories and locations for your
              favorite campsites!
            </p>
          </div>
          <div id="add-new">
            <SolidButton
              color="secondary"
              innerText="New Camp Site"
              function={openModal}
            ></SolidButton>
          </div>
        </div>

        <div id="map-placeholder">
          <Maps
            currentLatitude={currentLatitude}
            currentLongitude={currentLongitude}
            campSites={campSitesReducer}
          ></Maps>
        </div>

        <div>
          <h2>My Camp Sites</h2>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Coordinates</th>
              <th>Dates of Stay</th>
              <th>Notes</th>
              <th>Controls</th>
            </tr>
          </thead>
          <tbody>
            {(campSitesReducer && campData).map((site, index) => {
              return site.edit === true ? (
                <EditSiteView
                  key={ site.id }
                  id={ site.id }
                  name={ site.name }
                  datesOfStay={ site.datesOfStay }
                  coordinates={ JSON.stringify(site.coordinates) }
                  notes={ site.notes }
                  currentState={ campData }
                  handleSave={ editCampSites }
                />
              ) : (
                <tr key={ index }>
                  <td>
                    <> { site.name }</>
                  </td>
                  <td>{ JSON.stringify(site.coordinates) }</td>
                  <td>{ site.datesOfStay }</td>
                  <td>{ site.notes }</td>
                  <td>
                    <>
                      <EditIcon onClick={() => handleEdit(site.id)} />
                      <CloseIcon
                        onClick={() =>
                          dispatch(deleteCampSites(campSitesReducer, site.id))
                        }
                      />
                    </>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </DashContent>
  );
};

const mapStateToProps = (state) => ({
  campSitesReducer: state.campSitesReducer
});

export default connect(mapStateToProps)(
  GoogleApiWrapper({
    apiKey: process.env.MAPS_API_KEY
  })(DashMain)
);
