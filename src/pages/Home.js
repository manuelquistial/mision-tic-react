import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

const listaHamburguesas = [
    {
        "id": 1,
        "nombre": "quesuda",
        "precio": 2000,
        "ingredientes": [
            'queso',
            'carne',
            'pan'
        ]
    },
    {
        "id": 2,
        "nombre": "mis carnes",
        "precio": 5000,
        "image_path": 'assets/images/hamburguesa.jpeg'
    }
]

export const Home = (props) => {
    const [selected, setSelected] = React.useState(1)

    const onChangeInput = (event) => {
        console.log(event.target.value)
    }

    const onChangeSelect = (event) => {
        setSelected(event.target.value)
    }

    return (
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            margin: 1
          }}
        >
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            onChange={onChangeInput}
          />
          <FormControl fullWidth sx={{margin: 1}}>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selected}
                label="Age"
                onChange={onChangeSelect}
            >
                {
                    listaHamburguesas.map((datos) => {
                        return (
                            <MenuItem key={datos.id} value={datos.id}>
                                <Card sx={{ maxWidth: 345, margin: 2, padding: 2 }}>
                                    {datos?.ingredientes && datos?.ingredientes.map((ingrediente) => {
                                        return (<Typography key={ingrediente}>{ingrediente}</Typography>)
                                    })}
                                    {datos.image_path && (
                                        <CardMedia
                                            component="img"
                                            height="194"
                                            image={datos.image_path}
                                            alt={datos.nombre}
                                        />
                                    )}
                                </Card>
                                <Typography>{datos.nombre}</Typography>
                            </MenuItem>
                        )
                    })
                }
            </Select>
            </FormControl>
        </Box>
    );
}