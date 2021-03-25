import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import Paper from '@material-ui/core/Paper';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import NextLink  from 'next/link';
import  "./fonts.module.css";
const useStyles = makeStyles({
    root: (props) => ( {
        backgroundColor: props[1],
        position: "sticky",
        top:"0px",
        Height: "100px",
    }),
    
    trang_chu_btn: (props) => ( {
        borderRadius: "6px 0px 0 0",
        backgroundColor: props[2],
        padding: "15px 32px",
        color: "white",
        fontSize: "12px",
        cursor: "pointer",
        position:"static",
        width: "100%",
        height:"100%",
        border: "none",
        textDecoration: "none",
        outline: "none",
        fontFamily: "SanFranciscoDisplay-Medium",

        // '&:hover': {
        //     backgroundColor: fade(props[3], 0.45),
        // },
        '&:active': {
            backgroundColor: props[4],
            
        },

    }),
    bai_giang_btn:  (props) => ({
        backgroundColor: props[2],
        padding: "15px 32px",
        color: "white",
        fontSize: "12px",
        cursor: "pointer",
        position:"static",
        width: "100%",
        height:"100%",
        border: "none",
        textDecoration: "none",
        outline: "none",
        fontFamily: "SanFranciscoDisplay-Medium",
        // '&:hover': {
        //     backgroundColor: fade(props[3], 0.45),
        
        // },
        '&:active': {
            backgroundColor: props[4],
            
        },
    }),
    tai_lieu_btn: (props) => ( {
        backgroundColor: props[2],
        padding: "15px 32px",
        color: "white",
        fontSize: "12px",
        cursor: "pointer",
        position:"static",
        width: "100%",
        height:"100%",
        border: "none",
        textDecoration: "none",
        outline: "none",
        fontFamily: "SanFranciscoDisplay-Medium",

        // '&:hover': {
        //     backgroundColor: fade(props[3], 0.45),
        
        // },
        '&:active': {
            backgroundColor: props[4],
            
        },

    }),
    tinh_diem_btn: (props) => ( {
        borderRadius: "0px 6px 0 0",
        backgroundColor: props[2],
        padding: "15px 32px",
        color: "white",
        fontSize: "12px",
        cursor: "pointer",
        position:"static",
        width: "100%",
        height:"100%",
        border: "none",
        textDecoration: "none",
        outline: "none",
        fontFamily: "SanFranciscoDisplay-Medium",

        // '&:hover': {
        //     backgroundColor: fade(props[3], 0.45),
        // },
        '&:active': {
            backgroundColor: props[4],
            
        },

    }),
    InputLabel: {
        width: "100%",
        height:"100%",
        display: "inline-block",
        borderRadius: "0 4px 4px 0",
        boxSizing: "border-box",
        border: "none",
    },
    
    SearchBtn: (props) => ({
        borderRadius: "4px 4px 4px 4px",
        backgroundColor: props[2],
        color: "white",
        fontSize: "12px",
        cursor: "pointer",
        position:"static",
        border: "none",
        textDecoration: "none",
        textAlign: "center",
        borderRadius: "6px 0px 0px 6px",
        outline: "none",
        borderRight:"2px solid white",
        borderBottom: "3px outset"+props[2],

        // '&:hover': {
        //     backgroundColor: fade(props[5], 1),
        
        // },
        '&:active': {
            backgroundColor: props[4],
            }

    }),
    CaculatorBtn: (props) => ({
        // borderRadius: "4px 4px 4px 4px",
        backgroundColor: props[2],
        color: "white",
        fontSize: "12px",
        cursor: "pointer",
        position:"static",
        border: "none",
        textAlign: "center",
        textDecoration: "none",
        outline: "none",
        borderBottom: "3px outset"+props[2],
        // '&:hover': {
        //     backgroundColor: fade(props[5], 0.45),
        
        // },
        '&:active': {
            backgroundColor: props[4],
            }

    }),
    moreMenu:(props) => ({
        borderRadius: "0px 0px 4px 4px",
        backgroundColor: props[2],
        color: "white",
        fontSize: "12px",
        cursor: "pointer",
        position:"static",
        width: "100%",
        height:"100%",
        border: "none",
        textDecoration: "none",
        outline: "none",
        // '&:hover': {
        //     backgroundColor: fade(props[5], 0.45),
        
        // },
        '&:active': {
            backgroundColor: props[4],
            }
    }),
    menuList: {
        backgroundColor: "#ffddb7",
        borderBottom: "1px solid gray",
        color:"#045400",
        paddingLeft:"10px",
        paddingTop:"5px",
        // '&:hover': {
        //     backgroundColor: fade("#eebb6b", 0.45),
        //     color:"#0dff00"

        
        // },
        '&:active': {
            backgroundColor: "#673c00",
            }
    }

  })


const AppBar = ({id, onClick, onClickSearchBar, IdSearch, color, menuCheck, onClickMenuBar}) => {
    const classes = useStyles(color);
    const onClickMenu = () => {
        onClickMenuBar()
    }
    const MenuList = () => {
        return(
            <Grid container>
                <Grid item xs={12} sm={12} md ={12} lg={12} className={classes.menuList} onClick={()=>onClick(5)}>OPTION 1</Grid>

                <Grid item xs={12} sm={12} md ={12} lg={12} className={classes.menuList} onClick={()=>onClick(6)}>OPTION 2</Grid>

                <Grid item xs={12} sm={12} md ={12} lg={12} className={classes.menuList} onClick={()=>onClick(7)}>OPTION 3</Grid>
            </Grid>
        )

    }
    const caculator = () => {
        if (IdSearch === false){
            return (
            <Grid container style={{backgroundColor: color[1]}}>
            
                <Grid item xs={1} sm={1} md={1} lg={1} style={{backgroundColor: color[1]}}></Grid>

                <Grid item xs={11} sm={11} md={11} lg={11} style={{backgroundColor: color[1]}}>
                    <Paper square style={{backgroundColor:"lightgray", border:"2px solid lightgray", minHeight:"200px", borderRadius: " 0 0 10px 10px"}}>
                        Máy tính chỗ này...
                        <button onClick={() =>onClickSearchBar(true)}>Off</button>
                    </Paper>
                </Grid>

            </Grid>
            )

        }
    }
    return (
        <div className = {classes.root}>        
            <Grid container spacing={0} >
                <Grid item xs={false} sm={false} md={false} lg={false} style={{backgroundColor: color[1]}}></Grid>
                <Grid  item container  xs={12} sm={12} md={12} lg={12} elevation={5} style={{  borderRadius: "0px 0px 0px 0px", }}>
                    <Grid item xs={1} className={classes.SearchBtn} 
                    onClick={() => onClickSearchBar(true)}
                    style={{backgroundColor: IdSearch===true?color[5]:(classes.SearchBtn.backgroundColor)}} >

                        <SearchIcon style={{color:"lightcyan", marginTop:"12%"}} ></SearchIcon>
        
                    </Grid>
                    
                    <Grid item xs={1} className={classes.CaculatorBtn} 
                    onClick={() => onClickSearchBar(false)}
                    style={{backgroundColor: IdSearch===false?color[5]:(classes.SearchBtn.backgroundColor)}}>
                       
                        <AppsIcon style={{color:"lightcyan", marginTop:"11%"}} ></AppsIcon>

                    </Grid>

                    <Grid item xs={10} style={{borderTop: "2px solid " + color[2], borderBottom: "3px outset"+color[2], 
                    borderRight: "2px inset"+color[2], borderRadius: "0 4px 4px 0"}}>

                        <input type="text" placeholder={IdSearch===true?"Tìm kiếm...":"Nhập phép toán..."} className={classes.InputLabel}/>

                    </Grid>

                    <Grid item xs={12} style={{backgroundColor:color[1], minHeight:"10px"}}>
                        {caculator()}
                    </Grid>

                </Grid>

                <Grid item xs={false} sm={2} md={2} lg={2} style={{backgroundColor: color[1]}}></Grid>


                <Grid  item xs={false} sm={false} md={false} lg={false} style={{backgroundColor:color[1],}}></Grid>

                <Grid item container xs={12} sm={12} md={12} lg={12} style={{borderRadius: "10px 10px 0px 0px"}}>

                        <Grid item xs={3} style={{ borderRight: "1px solid white",}} >
                            <NextLink href='/' passHref >
                                <button   className={classes.trang_chu_btn} 
                                >THÔNG BÁO
                                </button>
                            </NextLink> 

                        </Grid>

                        <Grid item xs={3} style={{ borderRight: "1px solid white",}} >
                            <NextLink href='/bai_giang' passHref>
                            <button  className={classes.bai_giang_btn}

                            >BÀI GIẢNG
                                
                            </button>
                            </NextLink>   
                        </Grid>
                    
                        <Grid item xs={3} style={{ borderRight: "1px solid white",}} >
                            <NextLink href='/tai_lieu' passHref>
                            <button className={classes.tai_lieu_btn}
                             >TÀI LIỆU
                                
                            </button> 
                            </NextLink>
                              
                        </Grid>
                        <Grid item xs={3} >
                            <NextLink href='/tinh_diem' passHref>
                            <button  className={classes.tinh_diem_btn}
                             >TÍNH ĐIỂM
                                
                            </button> 
                            </NextLink>
                              
                        </Grid>
                </Grid>
        
            <Grid item xs={false} sm={2} md ={2} lg={2} style={{backgroundColor:color[1]}}></Grid>

            <Grid item xs={false} sm={false} md ={false} lg={false} style={{backgroundColor:color[1]}}></Grid>
            <Grid item xs={12} sm={12} md ={12} lg={12} style={{backgroundColor:"#2b2928"}}>
                {menuCheck?MenuList():""}
            </Grid>
            <Grid item xs={false} sm={2} md ={2} lg={2} style={{backgroundColor:color[1]}}></Grid>

            <Grid item xs={false} sm={false} md={false} lg={false} style={{backgroundColor: color[1], color:"white", }}>
                </Grid>
            {/* <Grid item container xs={12} sm={12} md={12} lg={12} className={classes.moreMenu} onClick={() => onClickMenu() }
                style={{backgroundColor: menuCheck||id>4?color[5]:(classes.moreMenu.backgroundColor), color:"white", borderTop: menuCheck?"none":"2px solid white"}}> 
                <Grid item xs={2} sm={2} md={2} lg={2}>{menuCheck?<ArrowDropUpIcon />:<ArrowDropDownIcon />}</Grid>
                <Grid  item xs={8} sm={8} md={8} lg={8} 
                     style={{fontSize:"15px", textAlign:"center", marginTop:"5px"}}>{id>4?"OPTION "+String(id-4):""}</Grid>
            </Grid> */}

            <Grid item xs={false} sm={false} md={false} lg={false} style={{backgroundColor: color[1],color:"white"}}></Grid>
            </Grid>
        </div>
    )  
}

export default AppBar
