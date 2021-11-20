import { Card, CardActionArea, CardContent, CardMedia, Grid } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import './SerachCategories.css';
import { Link } from "react-router-dom";

const SearchCategories = ({ sd }) => {

    return (
        <Grid item sx={12} sm={12} md={12} lg={12} style={{ marginLeft: '20px' }}>
            <Link style={{textDecoration: "none"}} to={`/reserve/${sd._id}`}>
                <Card className="slider-card" sx={{ mb: 5, }}>
                    <CardActionArea>
                        <Grid spacing={5} container>
                            <Grid item sx={6} sm={6} md={4}>
                                <CardMedia
                                    className="slider-img"
                                    sx={{ borderRadius: 3, width: 220, mt: 2, ml: 2 }}
                                    component="img"
                                    height="180"
                                    image={sd.img}
                                    alt="green iguana"
                                />
                            </Grid>
                            <Grid item sx={6} sm={6} md={8}>
                                <CardContent>
                                    <h3>{sd.name}</h3>
                                    <p>{sd.guest} Guest, {sd.bed} Beds, {sd.bedroom} Bedrooms, {sd.bath} Baths</p>
                                    <p>Wifi, Air Conditioning Kitchen </p>
                                    <p>Cancellation Flexibility Available</p>
                                    <div style={{ display: "flex" }}>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexWrap: 'wrap',
                                            marginRight: "auto"
                                        }}>
                                            <StarIcon sx={{ color: 'yellowgreen' }} />
                                            <span style={{ fontSize: '15px', fontWeight: '400' }}>{sd.rate}</span>
                                        </div>
                                        <div >
                                            <p style={{ marginRight: '20px' }}> <span style={{ fontWeight: 'bold' }}>$ {sd.price} </span> /Night</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </CardActionArea>
                </Card>
            </Link>
        </Grid>
    );
};

export default SearchCategories;