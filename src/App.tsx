import React, {useState} from 'react';
import {
  Route, Routes
} from "react-router-dom";
import './App.scss';
import NavBar from "./components/NavBar";
import {CameraAltOutlined, ChevronLeft, ChevronRight, InfoOutlined, Menu} from "@mui/icons-material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhotoViewer from "./components/PhotoViewer";
import InfoModal from "./components/InfoModal";
import LeftSideDrawer from "./components/LeftSideDrawer";
import HomeScreen from "./components/HomeScreen";
import BoardroomSpace from "./components/BoardroomSpace";
import SpaceOne from "./components/SpaceOne";
import Space from "./components/Space";
// import BookingModal from "./components/BookingModal";

function App() {
  const [showImages, setShowImages] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleLeftSideDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
      if (event.type === 'keydown' && (
        (event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift'))
      {
        return;
      }
      setDrawerOpen(!drawerOpen);
  };

  return (
    <div className="App">
      {/*<CssBaseline /> todo add this? */}

      <NavBar toggleLeftSideDrawer={toggleLeftSideDrawer} showBookingModal={showBookingModal} setShowBookingModal={setShowBookingModal} />

      <InfoModal showInfoModal={showInfoModal} setShowInfoModal={setShowInfoModal} />
      {/*<BookingModal showBookingModal={showBookingModal} setShowBookingModal={setShowBookingModal} />*/}
      <PhotoViewer showImages={showImages} />

      <LeftSideDrawer
        drawerOpen={drawerOpen}
        toggleLeftSideDrawer={toggleLeftSideDrawer}
        setShowImages={setShowImages}
        setShowInfoModal={setShowInfoModal}
      />

      <Routes>
        <Route
          key={'home'}
          path="/"
          element={
            <HomeScreen toggleLeftSideDrawer={toggleLeftSideDrawer}/>
          }
        />

        <Route
          key={'space'}
          path="/space"
          element={
            <SpaceOne cameraPosition={[5,5,5]} space={<Space />}/>
          }
        />

        <Route
          key={'boardroom'}
          path="/boardroom"
          element={
            <SpaceOne cameraPosition={[5,5,5]} space={<BoardroomSpace />}/>
          }
        />

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>

      <div className="buttons-container">
        <LocationOnIcon className="pointer" style={{ color: "white", margin: "0 4px" }} onClick={() => {setShowInfoModal(!showInfoModal)}}/>

        <div className="pointer" onClick={() => {setShowImages(!showImages)}}>
          <CameraAltOutlined  style={{ color: "white", margin: "0 4px" }} />
          { showImages && (
            <ChevronRight style={{ color: "white", margin: "0 4px" }} />
          )}
          { !showImages && (
            <ChevronLeft style={{ color: "white", margin: "0 4px" }} />
          )}
          </div>
      </div>
    </div>
  );
}

export default App;
