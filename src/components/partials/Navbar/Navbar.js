import { React, useState } from 'react';
import { Badge, Button, Grid, IconButton, makeStyles } from '@material-ui/core';
import './Navbar.css';
import SearchBar from "material-ui-search-bar";
import { MenuItems } from './MenuItems';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import PhoneIcon from '@material-ui/icons/Phone';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';



const useStyles = makeStyles(theme => ({
    MenuIcon: {
        color: '#fff',
        fontSize: '2rem'
    },
    CloseIcon: {
        color: '#fff',
        fontSize: '2rem'
    },
    CartBtn: {
        position: "absolute",
        top: 0,
        right: 0,
        transform: 'translate(-30%, 30%)',
    },
    SignBtn: {
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },
    SearchBar: {
        [theme.breakpoints.down('md')]: {
            width: '80%',
            margin: 'auto',
            marginTop: '15px'
        }
    },
    ShoppingCartIcon: {
        color: '#fff'
    },
    BarNumber: {
        background: "#614b3e",
        padding: ".2rem"
    },
    PhoneIcon: {
        color: "#d2c1b5",
        marginTop: "3px",
        fontSize: "1.2rem"
    }
    
}));


function Navbar() {
    const classes = useStyles();
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <>
            <Grid
                className={classes.BarNumber}
                container
                justify="center"
                alignItems="center"
            >
                <Grid item>
                    <PhoneIcon className={classes.PhoneIcon} />
                </Grid>

                <Grid item>
                    <p className="phone">+54 9 2964666666</p>
                </Grid>
                 
            </Grid>
            <nav className="NavbarItems">
                
                <h1 className="navbar-logo">Brand</h1>
                <div className="menu-icon" onClick={handleClick}>
                    {clicked ? <CloseIcon className={classes.CloseIcon} /> : <MenuIcon className={classes.MenuIcon} />}
                </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    <SearchBar className={classes.SearchBar} />
                    {MenuItems.map( (item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                   {item.title} 
                                </a>
                            </li>
                        )
                    })}
                 </ul>
                
                <Button className={classes.SignBtn} variant="contained" color="primary">
                    Sign up
                </Button>
                <IconButton className={classes.CartBtn}>
                    <Badge badgeContent={1} color="secondary">
                        <ShoppingCartIcon className={classes.ShoppingCartIcon} />
                    </Badge>
                </IconButton>
            </nav>
        </>    
    )
}

export default Navbar;