import React from "react";

function LeftSection({ image, title, description, learMoreLink, tryDemoLink,learMoreLinkName,tryDemoLinkName , googlePlay,appStore  }) {
  return (
    <div className="container  mt-5 left-section pb-5">
      <div className="row  ">
        <div className="col p-5 mt-4">
          <img src={image} />
        </div>
        <div className="col m-5 p-5">
          <h1 className="h3 ">{title}</h1>
          <p>{description}</p>
          <div className="row">
            <a href={learMoreLink} className="col text-decoration-none">
              {learMoreLinkName}
            </a>
            <a href={tryDemoLink} className="col text-decoration-none">
              {tryDemoLinkName}
            </a>
          </div>
          <div className="row">
            <a href={googlePlay} className="col">
              <img
                src="./media/images/googlePlayBadge.svg"
                className="googleplay mt-5"
              />
            </a>
            <a href={appStore} className="col mb-5">
              <img
                src="./media/images/appstoreBadge.svg"
                className="Appstore mt-5"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
