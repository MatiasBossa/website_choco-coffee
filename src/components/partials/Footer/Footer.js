import { React } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import './Footer.css'

const useStyles = makeStyles((theme) => ({
    footer: {
        position: 'relative',
        background: "#614b3e",
        [theme.breakpoints.down('md')]: {
            display: "flex",
            flexDirection: "column"
        }
    },
    Divider: {
        height: "3px",
        background: "#1a1a1d",
        marginBottom: '15px'
    }
}));

function Footer() {
    const classes = useStyles();

    return (
        <>
            <footer>
                {/* Footer Container */}
                <Grid container className={classes.footer} >

                    {/* Column Contact */}
                    <Grid className="contact-footer" item xs>
                        <h2>Datos de Contacto</h2>
                        <Divider className={classes.Divider} />
                        <ul>
                            <li>
                                <p>Phone: 2964666666</p>
                            </li>
                            <li>
                                <p>Email: brand@gmail.com</p>
                            </li>
                        </ul>
                    </Grid>
                    {/* End Column Contact */}

                    {/* Column Menu */}
                    <Grid className="menu-footer" item xs>
                        <h2>Menu</h2>
                        <Divider className={classes.Divider} />
                        <ul>
                            <li><a>Products</a></li>
                            <li><a>Promotions</a></li>
                            <li><a>News</a></li>
                            <li><a>About us</a></li>
                        </ul>
                    </Grid>
                    {/* End Column Menu */}

                    {/* Column Socials Networks */}
                    <Grid className="social-footer" item xs>
                        <h2>Socials</h2>
                        <Divider className={classes.Divider} />
                        <ul>
                            <li><h3>Brand</h3></li>
                            <li><FacebookIcon className="facebookIcon" /></li>
                            <li><InstagramIcon className="instagramIcon" /></li>
                            <li><WhatsAppIcon  className="whatappsIcon" /></li>
                        </ul>
                    </Grid>
                    {/* End Column Socials Networks */}

                    {/* Column Copyright */}
                    <Grid className="coypright" item xs={12} container justify="center">
                        <p>Copyright 2021 @ MB-Desing</p>
                    </Grid>
                    {/* End Column Copyright */}

                </Grid>
                {/* End Footer Container */}
            </footer>
        </>
    )
}

export default Footer;