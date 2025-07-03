import { Box, colors, Grid, Typography } from '@mui/material'
import { FaRegClock } from 'react-icons/fa'

const OfficeHours = () => {
    const hours = [
    {
      day: 'Monday',
      hours: '9:00 AM - 5:00 PM',
    },
    {
      day: 'Tuesday',
      hours: '9:00 AM - 5:00 PM',
    },
    {
      day: 'Wednesday',
      hours: '9:00 AM - 5:00 PM',
    },
    {
      day: 'Thursday',
      hours: '9:00 AM - 5:00 PM',
    },
    {
      day: 'Friday',
      hours: '9:00 AM - 5:00 PM',
    },
    {
      day: 'Saturday',
      hours: '10:00 AM - 3:00 PM',
    },
    {
      day: 'Sunday',
      hours: 'Closed',
    },
  ]
  return (
    <Box bgcolor={"white"} borderRadius={5} padding={8} borderColor={colors.grey["100"]}>
      <Box display="flex" alignItems={"center"} mb={6}>
        <FaRegClock color={colors.blue["600"]} size={20} />
        <Typography variant='h2' color={colors.grey["900"]} fontWeight={"bold"} fontSize={20}>Office Hours</Typography>
      </Box>
      <Grid container spacing={4}>

        {hours.map((item) => (
      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4 }}>
            <Box key={item.day} bgcolor={colors.blue["50"]} borderRadius={5} padding={4}>
            <Typography fontWeight={"medium"} color={colors.blue["900"]}>{item.day}</Typography>
            <Typography variant='body1' color={colors.blue["700"]}>{item.hours}</Typography>
          </Box>
      </Grid>
        ))}
        </Grid>
    </Box>
  )
}

export default OfficeHours