import { useEffect, useState } from 'react'
import { getAuSydneyEvents } from '../../api';
import { IEvent } from '../../interfaces/IEvent';
import NotFound from '../../pages/NotFound';
import Loading from '../Loading';
import { Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import SingleEvent from './SingleEvent';

const AuSydneyEvents = () => {
    const [events, setEvents] = useState<IEvent[] | []>([]);
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getAllEvents = async () => {
            const resData = await getAuSydneyEvents();
            setEvents(resData);
            setLoading(false);
        }
        try {
            getAllEvents();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
        } catch (err: any) {
            setEvents([]);
            setError(true);
            setLoading(false);
        } 
    }, [])
    if (error) {
        return <NotFound />
    }
    if (loading) {
        return <Loading />
    }


  return (
      <Paper sx={{bgcolor:"transparent !important", mb:4}}>
          <Typography variant='h5' component={"h4"} mt={3} textAlign={"center"} >All Events</Typography>
          <Grid container spacing={2} mt={5}>
              {(events && events.length >0 ) && events?.map((event) => {
              return <Grid size={{ xs:12,sm: 6, md: 4, xl:3}}>
                  <SingleEvent key={event.id} {...event}/>

              </Grid>  
        })}
          </Grid>
    </Paper>
  )
}

export default AuSydneyEvents