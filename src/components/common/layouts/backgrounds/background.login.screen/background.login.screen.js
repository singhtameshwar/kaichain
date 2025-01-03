import React from "react";
import { useStyle } from "./background.login.screen.style";
import { IsMobileWidth, IsTabletWidth } from "../../../utill/utils";
import { Paper, Typography } from "@mui/material";
import clsx from "clsx";
import LoaderButton from "../../../loader.button/loader.button"
import SiteLabelTextField from "../../../../common/site.label.textfield/site.label.textfield";
// import { isValidLoginDetails } from "./validator";

const BackgroundLoginScreen = (props) => {
  const classes = useStyle();
  const mobileWidth = IsMobileWidth();
  return (
    <div className="d-flex w-100">
      <Paper
        classes={{ root: classes.paper }}
        className={clsx(!mobileWidth && "w-25 d-flex justify-content-center align-items-center position-relative", mobileWidth && "d-none")}
      >
        <div className="position-absolute h-100 w-100">
          <img
            height='100%'
            src={`${process.env.PUBLIC_URL}/assets/icons/Background-screen-image.png`}
          ></img>
        </div>
        <div
          className={clsx(
            !mobileWidth &&
            "d-flex justify-content-center align-items-center flex-column h-100",
            mobileWidth && "d-flex justify-content-center p-4 h-10"
          )}
        >
          <img
            style={{
              height: "60px",
            }}
            src={`${process.env.PUBLIC_URL}/assets/icons/Logo-app.png`}
            className="img-responsive"
          ></img>
          <Typography className="text-white font-weight-bold mt-3" variant="h6">
            Company Name
          </Typography>
          <Typography className="text-white mt-3 text-center w-70" variant="caption">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim nunc porttitor faucibus at sit
          </Typography>
          <div className="d-flex justify-content-start align-items-end position-absolute h-100 pb-3 w-100 pl-3 pr-3">
            <Typography
              gutterBottom
              variant="caption"
              className="font-weight-normal text-capitalize text-white"
            >
              © {new Date().getFullYear()} Company Name
            </Typography>
          </div>
        </div>
      </Paper>
      <Paper className={clsx(classes.paper2, "rounded-0 position-relative", !mobileWidth && "w-75", mobileWidth && "w-100")}
        elevation={0}
      >
        <div className="position-absolute w-100 d-flex justify-content-end align-items-end h-100 pb-3 pr-3">
          <Typography className="" variant="caption">
            Legal
          </Typography>
          <Typography className="pl-3" variant="caption">
            Privacy
          </Typography>
        </div>
        <div className="position-absolute w-100 d-flex justify-content-end pr-3 font-weight-bold">
          <Typography className="mt-2" variant="caption">
            English (UK)  <img src={`${process.env.PUBLIC_URL}/assets/icons/arrow-select.png`} width='12px' />
          </Typography>
        </div>
        <div className="d-flex flex-column justify-content-start h-100 z-index-1200 position-absolute w-100">
          <div className="h-100 d-flex align-items-center">{props.children}</div>
        </div>
      </Paper>
    </div>
  );
};

export default BackgroundLoginScreen;