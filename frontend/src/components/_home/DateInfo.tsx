import { Typography } from '@mui/material'
import { IDate } from '../../interfaces/IDate'

const DateInfo = ({ startDate, endDate }: IDate) => {

  return (
      <Typography mt={1} fontSize={16}>{(startDate == endDate) ? `${startDate}`: `from ${startDate} to ${endDate}`}</Typography>
  )
}

export default DateInfo