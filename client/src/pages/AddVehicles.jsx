import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { Grid, Paper } from "@mui/material";
import { toast } from 'react-toastify';
import axios from 'axios';
import { apiUrl } from '../utils/Constants.js';

const AddVehicles = () => {


    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const payload = {
            vehicleNumber: data.get('vehicleNumber'),
            ownerName: data.get('ownerName'),
            manufacturedYear: data.get('manufacturedYear'),
            brand: data.get('brand'),
            model: data.get('model'),
            mileage: data.get('mileage'),
        };
        console.log(payload);
        try {
            const isLoggedin = await axios.post(`${apiUrl}/vehicle`, payload);
            if (isLoggedin) {
                toast.success('Vehicle Added Successfully!');
                navigate('/vehicles');
            }
        } catch (error) {
            if (error.message) {
                toast.error(error.message);
            }
            toast.error(error.response.data.message);
        }
    };

    return (
        <div style={{ minHeight: '100vh', position: 'relative' }}>
        <Container component="main" maxWidth="lg" className='mt-9' style={{ position: 'absolute', bottom: 0, left: 0, right: 0, marginBottom: '50px' }}>
            <Box
                sx={{
                    marginTop: 5,
                }}
            >
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        sm={8}
                        md={5}
                        mx={'auto'}
                        component={Paper}
                        elevation={6}
                        square
                    >
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <Typography component="h1" variant="h4">
                                Add a Vehicle
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>

                                <Grid container spacing={2}>

                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            autoComplete="given-name"
                                            name="vehicleNumber"
                                            required
                                            fullWidth
                                            id="vehicleNumber"
                                            label="Vehicle Number"
                                            autoFocus
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            autoComplete="given-name"
                                            name="ownerName"
                                            required
                                            fullWidth
                                            id="ownerName"
                                            label="Owner Name"
                                            autoFocus
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            autoComplete="given-name"
                                            name="manufacturedYear"
                                            required
                                            fullWidth
                                            id="manufacturedYear"
                                            label="Manufactured Year"
                                            autoFocus
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            autoComplete="given-name"
                                            name="brand"
                                            required
                                            fullWidth
                                            id="brand"
                                            label="Brand Name"
                                            autoFocus
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            autoComplete="given-name"
                                            name="model"
                                            required
                                            fullWidth
                                            id="model"
                                            label="Model Name"
                                            autoFocus
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            autoComplete="given-name"
                                            name="mileage"
                                            required
                                            fullWidth
                                            id="mileage"
                                            label="Mileage (km)"
                                            autoFocus
                                        />
                                    </Grid>


                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Add Vehicle
                                </Button>
                                <Grid container justifyContent="flex-end"
                                    sx={{ mb: 0.5 }}>

                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    </div>
    );
};

export default AddVehicles;

