import {Button, createStyles, makeStyles, Modal, Theme, Typography, Box, scopedCssBaselineClasses} from "@mui/material";
import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import {Link} from "react-router-dom";
import Divider from "@mui/material/Divider";
import './BookingModal.scss'

export default function BookingModal ({ showBookingModal, setShowBookingModal }: any) {

  const handleClose = () => {
    setShowBookingModal(false);
  };

  const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    maxWidth: '90vw',
    minWidth: '85vw',
    maxHeight: '90vh',
    // minHeight: '85vh',
    overflow: 'scroll',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      className="info-modal"
      open={showBookingModal}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Box component="div" sx={modalStyle}>
        <HighlightOffIcon className="closeModalButton" onClick={() => { setShowBookingModal(false)}}/>

        <Typography variant="h3" className="secondaryColor">Boardroom Booking</Typography>

        <br/>

        <Link to={'boardroom'} onClick={() => setShowBookingModal(false)}>See The Boardroom in 3D and VR</Link>

        <br/>
        <br/>
        <Divider />
        <br/>


        <Button variant='contained' color='primary'>
          <a className='booking-button' target="_blank"
             href="https://docs.google.com/forms/d/e/1FAIpQLSdQHtz24-Y8gcrVr0LunukHl0H0dbOjOuin6kFvtbkc7ZptuA/viewform"
          >Book Here</a></Button>

        <br/>
        <br/>
        {/*<Typography className="secondaryColor">You will need to be signed in to book the space and see the calendar!</Typography>*/}
        {/*<br/>*/}

        <iframe
          src="https://calendar.google.com/calendar/embed?src=c_3p8b8v555vg5mdsrdhu6ob88ms%40group.calendar.google.com&ctz=Europe%2FLondon&mode=WEEK&showTitle=0"
          style={{"border": 0, width:"100%", height:"60vh"}}></iframe>

        {/*<Typography className="secondaryColor">*/}
        {/*  <a target="_blank" href="https://calendar.google.com/calendar/u/0/embed?src=c_3p8b8v555vg5mdsrdhu6ob88ms@group.calendar.google.com&ctz=Europe/London">Boardroom Calendar</a><br/>*/}
        {/*</Typography>*/}

      </Box>
    </Modal>
  )
}
