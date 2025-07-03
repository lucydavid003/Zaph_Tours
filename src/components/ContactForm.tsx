import { Button,  Paper, TextField, Typography } from '@mui/material'


const ContactForm = () => {
  return (
        // <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4 }}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Send Us a Message
            </Typography>
            <form>
              <TextField fullWidth label="Name" margin="normal" rows={.5} />
              <TextField fullWidth label="Email" type="email" margin="normal" />
              <TextField fullWidth label="Subject" margin="normal" />
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={1.5}
                margin="normal"
              />
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Submit
              </Button>
            </form>
          </Paper>
        // </Grid>
  )
}

export default ContactForm;