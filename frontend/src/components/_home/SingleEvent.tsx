import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { IEvent } from "../../interfaces/IEvent"
import Badge from "./Badge";
import DateInfo from "./DateInfo";
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import MainModal from "../_common/MainModal";
import EmailForm from "./EmailForm";


const SingleEvent = (props: IEvent) => {
    const { id, startDate, endDate, url, description, location, image, name } = props;
    return (
        <Paper className="single-event" key={id}>
            <Box sx={{ width: "100%" }}>
                <img style={{ width: "100%", height:130, objectFit: "cover", borderRadius: "8px" }} src={image} alt={description} />
            </Box>
            <Box mt={2} >
                <Badge />
                <DateInfo startDate={startDate} endDate={endDate} />
                <Typography className="max-2-line-text" fontWeight={600} color="primary" mt={1} sx={{minHeight:"50px"}}>{name}</Typography>
            </Box>
            <Box mt={1} >
                <Box>
                    <Typography fontWeight={600}>Location</Typography>
                    <Stack gap={2} mt={1} >
                        <RoomOutlinedIcon />
                        <Box mt={-0.5}>
                            <Typography sx={{minHeight:"50px"}}>{location?.name}</Typography>
                            <Typography fontSize={13} sx={{ color:"#686868", minHeight:"40px"}}>{`${location?.address?.streetAddress} ${location?.address?.addressLocality}, ${location?.address?.addressRegion} ${location?.address?.postalCode} Australia `}</Typography>
                        </Box>
                    </Stack>
                </Box>
            </Box>
            <MainModal header={<h4>Enter your email to receive your ticket instantly!</h4>}
          button={({ handleOpen }) => (
              <Button onClick={handleOpen} sx={{ width: "100%", textTransform: "capitalize", backgroundColor: "primary", p: "0.4rem 1rem", mt: 1, boxShadow: "0 0 10px rgb(196, 162, 162)", borderRadius: "12px" }}>
                  get tickets
              </Button>
          )}
        >
                <EmailForm url={url} />
        </MainModal>
            
        </Paper>
    )
}

export default SingleEvent