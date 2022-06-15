import React from "react";
import Button from "@mui/material/Button";

export default function HomeScreen({toggleLeftSideDrawer}: {toggleLeftSideDrawer: any}) {

  return (
    <>
      <div className="home-screen-cover">
        {/*<div className="home-screen-button-container">*/}
          <Button size='large' className="home-screen-button" variant='outlined' onClick={(event:any) => {toggleLeftSideDrawer(event)}}>Enter</Button>
        {/*</div>*/}
      </div>
      <div className="home-screen-image" style={{backgroundImage: `url(${process.env.REACT_APP_ASSETS_URL}/the-bakery.jpeg)`}}/>
    </>
  )
}
