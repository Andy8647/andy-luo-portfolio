import { Box, Grid } from '@mui/material';


const Footer = () => (
    <Grid item>
        <Box
            component={'footer'}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            py={'1.5rem'}
            sx={{ opacity: 0.7 }}
            width={'100%'}
        >
            <p>
                <a href={'https://andy8647.com'}>Andy Luo </a> &copy; 2023
            </p>
        </Box>
    </Grid>
);

export default Footer;
