import React from "react";
import SideMenuContent from "./style";
import { useNavigate } from "react-router-dom";

const Sidemenu = props => {
  const { campSitesReducer } = props;

  console.log(campSitesReducer);
  return (
    <SideMenuContent>
      <div id="side-menu">
        <div className="card col-md-4">
          <div className="user-img"></div>
          <span className="user-name">John Doe </span>
          <span className="user-title">Full Stack Web Developer</span>
        </div>

        <nav>
          <a href="/">Log Out</a>
          {/* <a href="#">
             Account
          </a> */}
        </nav>
        {/* <div>
          {campSitesReducer.map((site, index) => {
            return (
              <>
                <a key={index}>{site.name}</a>
                <>
                  <EditIcon/>
                  <CloseIcon
                    onClick={() =>
                      dispatch(deleteCampSites(campSitesReducer, site.id))
                    }
                  />
                </>
              </>
            );
          })}
        </div> */}
      </div>
    </SideMenuContent>
  );
};
const mapStateToProps = state => ({
  campSitesReducer: state.campSitesReducer,
});
export default Sidemenu;
