import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Container,
    Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import ImageCollage from "../components/ImageCollage";
export default function Tour() {
    const { id } = useParams();
    console.log(id);
    return (
        <Container sx={{ width: 900 }}>
            <Typography sx={{ marginTop: 3 }} variant="h3" component={"h1"}>
                Explore the world in vegas
            </Typography>
            <Box sx={{ marginTop: 3, display: "flex" }}>
                <img
                    src="https://tcproduction.blob.core.windows.net/media/%7B240f8b72-1159-4fd3-a150-0a837f50ba4a%7D.2573758641_297d6d19fa_o.jpg"
                    height="250"
                    alt=""
                />
                <ImageCollage />
            </Box>
            <Box>
                <Typography variant="h6" component={"h4"}>
                    About this ticket
                </Typography>
                <Typography variant="body2" component={"p"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium reiciendis autem, facilis voluptate, sequi, quos
                    exercitationem atque accusamus veritatis tempore at
                    temporibus! Beatae totam reprehenderit fuga obcaecati,
                    exercitationem sit quos.
                </Typography>
            </Box>
            <Box>
                <Typography variant="h6" component={"h4"}>
                    Frequently asked questions
                </Typography>
                <Accordion>
                    <AccordionSummary>
                        <Typography> Group 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Molestias mollitia officia eius dignissimos,
                            expedita magnam voluptas! Laudantium enim, placeat
                            optio numquam quae architecto voluptatum eaque cum
                            quos officia consequatur voluptatibus?
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        <Typography> Group 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Molestias mollitia officia eius dignissimos,
                            expedita magnam voluptas! Laudantium enim, placeat
                            optio numquam quae architecto voluptatum eaque cum
                            quos officia consequatur voluptatibus?
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Container>
    );
}
