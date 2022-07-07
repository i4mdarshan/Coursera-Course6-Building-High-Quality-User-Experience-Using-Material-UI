import React from "react";
import ApplicationBar from "../components/ApplicationBar";

// Try to use above imported Component by replacing below one
export default function Header(props) {
    return (
        <div>
            {/* <div>
                <div>
                    <i className="fa fa-bars"></i>
                    <span>ViewTube</span>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Search"
                    />
                    <i className="fa fa-search" />
                    <i className="fa fa-microphone" />
                </div>
                <div>
                    <i className="fa fa-adjust" />
                    <i className="fa fa-bell" />
                    <i className="fa fa-video" />
                    <i className="fa fa-th" />
                    <i className="fa fa-user" />
                </div>
            </div> */}
            <ApplicationBar></ApplicationBar>
        </div>
    )
}