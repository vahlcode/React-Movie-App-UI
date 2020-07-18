import React from "react";
import "./lazyloader.css";

class Lazyloader extends React.Component {
    render() {
        return(
            <section className="lazyloader">
                <div>
                    <h4>
                        Loading...please exercise a little patience.
                    </h4>
                    <div className="loading-bar">
                        <div className="loading-bar-inner"></div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Lazyloader;