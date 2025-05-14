import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography, Box, Rating } from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material";

export default function TourCard({title,duration,image,price,numberOfReviews,rating,}) {
    const theme = createTheme({
        components: {
            MuiTypography: {
                variants: [
                    {
                        props: {
                            variant: "body2",
                        },
                        style: {
                            fontSize: 11,
                        },
                    },
                    {
                        props: {
                            variant: "body3",
                        },
                        style: {
                            fontSize: 9,
                        },
                    },
                ],
            },
        },
    });
    return (
        <Grid size={3}>
            <ThemeProvider theme={theme}>
                <Paper elevation={3} square>
                    <img className="img" src={image} alt="" />
                    <Box sx={{ paddingX: "5px" }}>
                        <Typography variant="subtitle1" color="primary" component="h2">
                            {title}
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <AccessTime sx={{ width: 12.5 }} />
                        <Typography
                            variant="body2"
                            component={"p"}
                            sx={{ marginLeft: 0.5 }}
                        >
                            {duration} hours
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: 3,
                        }}
                    >
                        <Rating
                            readOnly
                            defaultValue={rating}
                            precision={0.5}
                            size="small"
                        />
                        <Typography
                            variant="body2"
                            component={"p"}
                            sx={{ marginLeft: 0.5 }}
                        >
                            {rating}
                        </Typography>
                        <Typography
                            variant="body2"
                            component={"p"}
                            sx={{ marginLeft: 0.5 }}
                        >
                            ({numberOfReviews} reviews)
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            variant="h6"
                            component={"h3"}
                            sx={{ marginTop: 0 }}
                        >
                            From ${price}
                        </Typography>
                    </Box>
                </Paper>
            </ThemeProvider>
        </Grid>
    );
}
