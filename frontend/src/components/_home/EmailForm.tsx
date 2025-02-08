import { Box, Button, TextField, Typography } from "@mui/material"
import { useState } from "react";
import { sendEmailForTickets } from "../../api";

const EmailForm = ({ url }: { url: string }) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEmail(e.target.value);
    }
    const getTicket = async () => {
        if (!email || !emailRegex.test(email)) {
            setError("Email address is not valid")
            return;
        }
        const res = await sendEmailForTickets(email)
        if (res.status === 200) {
            setError("")
            window.location.href = url;
            
        } else { 
            setError("Failed to send email. Please try again later.")
        }

    }

    return (
        <Box>
            <TextField id="email-basic" label="Email" variant="outlined" value={email} onChange={(e) =>handleChange(e)}/>
            <Typography color="primary" fontSize={13} ml={0.5}>{error}</Typography>
            <Button onClick={getTicket} sx={{mt:2}}>Get Ticket</Button>
        </Box>
    )
}

export default EmailForm