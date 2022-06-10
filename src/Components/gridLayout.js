import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Paper, Grid, Typography, Button, Icon, Divider } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const Item1 = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'rgb(55, 125, 255)',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: 300,
    marginTop: 50,
}));

export default class Layout extends React.Component {
    render() {
        return (
            <Box
                sx={{ marginLeft: 4, marginRight: 4 }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography style={{ textAlign: "center" }}>
                            <h1>Always know what you will pay.</h1>
                            <p style={{ color: "grey", fontSize: 20 }}>Once you're setup, instantly withdraw payments or deposit into your bank
                                <br />
                                account within 2-3 business days.
                            </p>
                            <Button variant="contained" style={{ textTransform: "none" }}>Learn more
                                <Icon>
                                    arrow_right_alt
                                </Icon>
                            </Button>
                        </Typography><br />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Item>
                            <Grid item xs={12}>
                                <div style={{ textAlign: "center" }}>
                                    <Typography style={{ fontSize: 100, fontWeight: 700, color: "rgb(55, 125, 255)" }}>
                                        15%
                                    </Typography>
                                    <Typography variant="subtitle" sx={{ color: "grey", fontSize: 17 }}>
                                        per successful transaction
                                    </Typography>
                                </div><br /><br />
                            </Grid>
                            <Grid style={{ display: "flex", flexDirection: "row" }}>
                                <Grid item xs={12}>
                                    <div>
                                        <Icon sx={{ fontSize: 60, color: "rgb(55, 125, 255)" }}>campaignoutlined</Icon>
                                        <Typography sx={{ color: "black" }}>Account creation</Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <div>
                                        <Icon sx={{ fontSize: 60, color: "rgb(55, 125, 255)" }}>paymentOutlined</Icon>
                                        <Typography sx={{ color: "black" }}>Professional account</Typography>
                                    </div><br />
                                </Grid>
                            </Grid>
                            <Grid>
                                <div style={{ textAlign: "center" }}>
                                    <Typography variant="subtitle">
                                        Included for 3 months,
                                        <br />
                                        then $2.5/monthly included VAT
                                    </Typography>
                                </div><br />
                                <div style={{ textAlign: "center", marginTop: 4 }}>
                                    <Button variant="contained" style={{ textTransform: "none" }}>Get started
                                        <Icon style={{ color: "white" }}>
                                            arrow_right_alt
                                        </Icon>
                                    </Button>
                                </div>
                                <br />
                            </Grid>
                        </Item>
                    </Grid>


                    <Grid item xs={12} md={6}>
                        <Item1>
                            <Grid item xs={12}>

                                <div style={{ color: "white", marginTop: 30 }}>
                                    <Icon sx={{ fontSize: 60 }}>extensionOutlined</Icon>
                                </div>
                                <h1 style={{ color: "white", fontSize: 25 }}>Customized</h1>
                                <p style={{ color: "white", fontSize: 16 }}>Design a custom package for your business.</p>
                                <p style={{ color: "white", fontSize: 16 }}>Avaliable for businesses with large payment volume or unique <br /> business models.</p>

                                <Divider />
                                <h4 style={{ color: "white" }}>Contact Sales</h4>
                            </Grid>
                        </Item1>
                    </Grid>
                </Grid ><br />
            </Box >
        );
    }
}
