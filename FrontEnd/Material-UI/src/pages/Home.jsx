import TourCard from "../components/TourCard";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import cities from "../data.json";
import { Typography } from "@mui/material";
export default function Home (){
    return <>
            <Container>
                {cities.map((city) => (
                    <>
                        <Typography
                            variant="h4"
                            component={"h2"}
                            sx={{ marginTop: 5, marginBottom: 3 }}
                        >
                            Top {city.name} Tours
                        </Typography>
                        <Grid container spacing={5}>
                            {city.tours.map((tour, index) => (
                                <TourCard
                                    key={index}
                                    title={tour.name}
                                    duration={tour.duration}
                                    rating={tour.rating}
                                    numberOfReviews={tour.numberOfReviews}
                                    price={tour.price}
                                    image={tour.image}
                                />
                            ))}
                        </Grid>
                    </>
                ))}
            </Container>
        </>
}