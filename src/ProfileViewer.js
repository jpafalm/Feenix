import React from "react";
import { DayPickerSingleDateController } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "./ProfileViewer.css";
import { UserProfileContext } from "./components/EnsureProfile";

class ProfileViewer extends React.Component {
  render() {
    return (
      <UserProfileContext.Consumer>
        {profile => (
          <>
            <div className="container profile-container login-container text-center ">
            <h3 className="text-danger">Profile</h3>
              <h4>{profile.userType}</h4>
              <p>
                Name: {profile.firstName} {profile.surname}
              </p>
              <p>County: {profile.county}</p>
              <p>D.O.B.: {profile.dob}</p>
              <p>Your Bio: {profile.bio}</p>
              {<img className="profo" src = {profile.picture}/>}
            </div>
          </>
        )}
      </UserProfileContext.Consumer>
    );
  }
}
export default ProfileViewer;
