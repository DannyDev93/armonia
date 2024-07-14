import React from 'react';
import { Button, Slider } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import img from "../../assets/armonia.png";

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';


import chcafe from "../../assets/cheesecafe.jpg";
import chlimon from "../../assets/cheeselimon.jpg";
import chrojos from "../../assets/cheeserojos.jpg";
import postgalle from "../../assets/postregall.jpg";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
};

const recommendations = [
    { emotion: "Feliz", energy: 1, flavor: "Dulce", recommendation: "Postre de galletas Tamarindo", img: postgalle },
    { emotion: "Feliz", energy: 1, flavor: "Ácido", recommendation: "Postre de galletas Tamarindo", img: chrojos },
    { emotion: "Feliz", energy: 1, flavor: "Amargo", recommendation: "Cheesecake limón", img: chlimon },
    { emotion: "Triste", energy: 1, flavor: "Dulce", recommendation: "Cheesecake limón", img: chlimon },
    { emotion: "Triste", energy: 1, flavor: "Ácido", recommendation: "Postre de galletas Tamarindo", img: chrojos },
    { emotion: "Triste", energy: 1, flavor: "Amargo", recommendation: "Postre de galletas limon", img: postgalle },
    { emotion: "Estresado", energy: 1, flavor: "Dulce", recommendation: "Cheesecake limón", img: chlimon },
    { emotion: "Estresado", energy: 1, flavor: "Ácido", recommendation: "Postre de galletas limon", img: postgalle },
    { emotion: "Estresado", energy: 1, flavor: "Amargo", recommendation: "Postre de galletas Tamarindo", img: chrojos },
    { emotion: "Relajado", energy: 1, flavor: "Dulce", recommendation: "Cheesecake limón", img: chlimon },
    { emotion: "Relajado", energy: 1, flavor: "Ácido", recommendation: "Postre de galletas Tamarindo", img: chrojos },
    { emotion: "Relajado", energy: 1, flavor: "Amargo", recommendation: "Cheesecake de café", img: chcafe },
    { emotion: "Emocionado", energy: 1, flavor: "Dulce", recommendation: "Postre de galletas Tamarindo", img: chrojos },
    { emotion: "Emocionado", energy: 1, flavor: "Ácido", recommendation: "Postre de galletas Tamarindo", img: postgalle },
    { emotion: "Emocionado", energy: 1, flavor: "Amargo", recommendation: "Cheesecake de café", img: chcafe },
    { emotion: "Feliz", energy: 2, flavor: "Dulce", recommendation: "Postre de galletas Tamarindo", img: chrojos },
    { emotion: "Feliz", energy: 2, flavor: "Ácido", recommendation: "Cheesecake limón", img: chlimon },
    { emotion: "Feliz", energy: 2, flavor: "Amargo", recommendation: "Postre de galletas limon", img: postgalle },
    { emotion: "Triste", energy: 2, flavor: "Dulce", recommendation: "Cheesecake limón", img: chlimon },
    { emotion: "Triste", energy: 2, flavor: "Ácido", recommendation: "Postre de galletas Tamarindo", img: chrojos },
    { emotion: "Triste", energy: 2, flavor: "Amargo", recommendation: "Cheesecake de café", img: chcafe },
    { emotion: "Estresado", energy: 2, flavor: "Dulce", recommendation: "Postre de galletas Tamarindo", img: chrojos },
    { emotion: "Estresado", energy: 2, flavor: "Ácido", recommendation: "Cheesecake limón", img: chlimon },
    { emotion: "Estresado", energy: 2, flavor: "Amargo", recommendation: "Postre de galletas limon", img: postgalle },
    { emotion: "Relajado", energy: 2, flavor: "Dulce", recommendation: "Cheesecake limón", img: chlimon },
    { emotion: "Relajado", energy: 2, flavor: "Ácido", recommendation: "Postre de galletas Tamarindo", img: chrojos },
    { emotion: "Relajado", energy: 2, flavor: "Amargo", recommendation: "Postre de galletas limon", img: postgalle },
    { emotion: "Emocionado", energy: 2, flavor: "Dulce", recommendation: "Postre de galletas Tamarindo", img: chrojos },
    { emotion: "Emocionado", energy: 2, flavor: "Ácido", recommendation: "Postre de galletas Tamarindo", img: postgalle },
    { emotion: "Emocionado", energy: 2, flavor: "Amargo", recommendation: "Cheesecake de café", img: chcafe },
    { emotion: "Feliz", energy: 3, flavor: "Dulce", recommendation: "Postre de galletas Tamarindo", img: chrojos },
    { emotion: "Feliz", energy: 3, flavor: "Ácido", recommendation: "Cheesecake limón", img: chlimon },
    { emotion: "Feliz", energy: 3, flavor: "Amargo", recommendation: "Postre de galletas limon", img: postgalle },
    { emotion: "Triste", energy: 3, flavor: "Dulce", recommendation: "Cheesecake limón", img: chlimon },
    { emotion: "Triste", energy: 3, flavor: "Ácido", recommendation: "Postre de galletas Tamarindo", img: postgalle },
    { emotion: "Triste", energy: 3, flavor: "Amargo", recommendation: "Cheesecake de café", img: chcafe },
    { emotion: "Estresado", energy: 3, flavor: "Dulce", recommendation: "Postre de galletas Tamarindo", img: chrojos },
    { emotion: "Estresado", energy: 3, flavor: "Ácido", recommendation: "Postre de galletas Tamarindo", img: postgalle },
    { emotion: "Estresado", energy: 3, flavor: "Amargo", recommendation: "Postre de galletas limon", img: postgalle },
    { emotion: "Relajado", energy: 3, flavor: "Dulce", recommendation: "Cheesecake limón", img: chlimon },
    { emotion: "Relajado", energy: 3, flavor: "Ácido", recommendation: "Postre de galletas Tamarindo", img: chrojos },
    { emotion: "Relajado", energy: 3, flavor: "Amargo", recommendation: "Postre de galletas limon", img: postgalle },
    { emotion: "Emocionado", energy: 3, flavor: "Dulce", recommendation: "Postre de galletas Tamarindo", img: chrojos },
    { emotion: "Emocionado", energy: 3, flavor: "Ácido", recommendation: "Postre de galletas Tamarindo", img: postgalle },
    { emotion: "Emocionado", energy: 3, flavor: "Amargo", recommendation: "Cheesecake de café", img: chcafe },
    { emotion: "Feliz", energy: 4, flavor: "Dulce", recommendation: "Postre de galletas Tamarindo", img: chrojos },
    { emotion: "Feliz", energy: 4, flavor: "Ácido", recommendation: "Cheesecake limón", img: chlimon },
    { emotion: "Feliz", energy: 4, flavor: "Amargo", recommendation: "Postre de galletas limon", img: postgalle },
    { emotion: "Triste", energy: 4, flavor: "Dulce", recommendation: "Cheesecake limón", img: chlimon },
    { emotion: "Triste", energy: 4, flavor: "Ácido", recommendation: "Postre de galletas Tamarindo", img: chrojos },
    { emotion: "Triste", energy: 4, flavor: "Amargo", recommendation: "Cheesecake limón", img: chlimon },
    { emotion: "Estresado", energy: 4, flavor: "Dulce", recommendation: "Postre de galletas Tamarindo", img: chrojos },
    { emotion: "Estresado", energy: 4, flavor: "Ácido", recommendation: "Postre de galletas Tamarindo", img: postgalle },
    { emotion: "Estresado", energy: 4, flavor: "Amargo", recommendation: "Cheesecake de café", img: chcafe },
    { emotion: "Relajado", energy: 4, flavor: "Dulce", recommendation: "Cheesecake limón", img: chlimon },
    { emotion: "Relajado", energy: 4, flavor: "Ácido", recommendation: "Postre de galletas Tamarindo", img: chrojos },
    { emotion: "Relajado", energy: 4, flavor: "Amargo", recommendation: "Postre de galletas limon", img: postgalle },
    { emotion: "Emocionado", energy: 4, flavor: "Dulce", recommendation: "Postre de galletas Tamarindo", img: chrojos },
    { emotion: "Emocionado", energy: 4, flavor: "Ácido", recommendation: "Postre de galletas Tamarindo", img: postgalle },
    { emotion: "Emocionado", energy: 4, flavor: "Amargo", recommendation: "Cheesecake de café", img: chcafe },
    { emotion: "Feliz", energy: 5, flavor: "Dulce", recommendation: "Postre de galletas Tamarindo", img: chrojos },
    { emotion: "Feliz", energy: 5, flavor: "Ácido", recommendation: "Cheesecake limón", img: chlimon },
    { emotion: "Feliz", energy: 5, flavor: "Amargo", recommendation: "Postre de galletas limon", img: postgalle },
    { emotion: "Triste", energy: 5, flavor: "Dulce", recommendation: "Cheesecake limón", img: chlimon },
    { emotion: "Triste", energy: 5, flavor: "Ácido", recommendation: "Postre de galletas Tamarindo", img: chrojos },
    { emotion: "Triste", energy: 5, flavor: "Amargo", recommendation: "Cheesecake de café", img: chcafe },
    { emotion: "Estresado", energy: 5, flavor: "Dulce", recommendation: "Postre de galletas Tamarindo", img: chrojos },
    { emotion: "Estresado", energy: 5, flavor: "Ácido", recommendation: "Cheesecake limón", img: chlimon },
    { emotion: "Estresado", energy: 5, flavor: "Amargo", recommendation: "Postre de galletas limon", img: postgalle },
    { emotion: "Relajado", energy: 5, flavor: "Dulce", recommendation: "Cheesecake limón", img: chlimon },
    { emotion: "Relajado", energy: 5, flavor: "Ácido", recommendation: "Postre de galletas Tamarindo", img: chrojos },
    { emotion: "Relajado", energy: 5, flavor: "Amargo", recommendation: "Postre de galletas limon", img: postgalle },
    { emotion: "Emocionado", energy: 5, flavor: "Dulce", recommendation: "Postre de galletas Tamarindo", img: chrojos },
    { emotion: "Emocionado", energy: 5, flavor: "Ácido", recommendation: "Postre de galletas Tamarindo", img: postgalle },
    { emotion: "Emocionado", energy: 5, flavor: "Amargo", recommendation: "Postre de galletas limon", img: postgalle },
];


const DessertSelection = () => {
    function getDessertRecommendation(emotion, energy) {
        let desserts = [];
        let index = Math.floor(Math.random() * 3);
        recommendations.forEach((rec) => {
            if (rec.emotion == emotion && rec.energy == energy) {

                desserts.push(rec);
            }

        })

        let recommendation = desserts[index];

        return recommendation ? recommendation : "No se encuentra recomendacion.";
    }

    const boxStyle = {
        width: '200px',                   // Adjust width as needed
        height: '200px',                  // Adjust height as needed
        backgroundColor: '#ffffff',       // Background color of the box
        borderRadius: '10px',             // Border radius to create rounded corners
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',  // Optional: Box shadow for depth effect
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'                // Ensures the image doesn't overflow the box
    };
    const imageStyle = {
        width: '100%',                    // Ensures the image fills the box
        height: 'auto',                   // Maintains aspect ratio
        objectFit: 'cover'                // Ensures the image covers the entire box
    };

    // Example of a state variable
    const [energy, setEnergy] = React.useState(1);
    const [feeling, setFeeling] = React.useState("Feliz");
    const [open, setOpen] = React.useState(false);
    const [selectedDessert, setSelectedDessert] = React.useState(null)
    // const handleOpen = () => setOpen(true);
    const handleOpen = () => {

        const recommendedDessert = getDessertRecommendation(feeling, energy);
        setSelectedDessert(recommendedDessert);
        setOpen(true);

    }
    const handleClose = () => setOpen(false);



    return (
        <div>
            <div style={boxStyle}>
                <img
                    src={img}  // Replace with your image path
                    alt="Your Image"
                    style={imageStyle}
                />
            </div>
            <br />
            <br />
            <div>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">¿Como te sientes hoy?</FormLabel>
                    <br />
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue={feeling}
                        name="radio-buttons-group"
                        onChange={(e) => { setFeeling(e.target.value) }}
                    >
                        <FormControlLabel value="Feliz" control={<Radio />} label="Feliz" />
                        <FormControlLabel value="Triste" control={<Radio />} label="Triste" />
                        <FormControlLabel value="Estresado" control={<Radio />} label="Estresado" />
                        <FormControlLabel value="Emocionado" control={<Radio />} label="Emocionado" />
                        <FormControlLabel value="Relajado" control={<Radio />} label="Relajado" />
                    </RadioGroup>
                    <br />
                    <br />
                    <FormLabel id="demo-radio-buttons-group-label">¿Cuanta energia sientes hoy?</FormLabel>
                    <br />
                    <Slider defaultValue={energy} step={1} marks min={1} max={5} onChange={(self) => { setEnergy(self.target.value) }} />
                    <div>
                        <Button onClick={handleOpen} variant="outlined">¡Mi Postre!</Button>
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            slots={{ backdrop: Backdrop }}
                            slotProps={{
                                backdrop: {
                                    timeout: 500,
                                },
                            }}
                        >
                            <Fade in={open}>
                                <Box sx={style}>
                                    <Typography id="transition-modal-title" variant="h6" component="h2" >
                                        {selectedDessert?.recommendation}
                                    </Typography>
                                    <div style={boxStyle}>
                                        <img
                                            src={selectedDessert?.img}  // Replace with your image path
                                            alt="Your Image"
                                            style={imageStyle}
                                        />
                                    </div>
                                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                        <b>Sabor:</b> <i>{selectedDessert?.flavor}</i>
                                        <br />
                                        <b>Emocion:</b> <i>{selectedDessert?.emotion}</i>
                                    </Typography>
                                </Box>
                            </Fade>
                        </Modal>
                    </div>
                </FormControl>
            </div>
        </div>
    );
};

export default DessertSelection;