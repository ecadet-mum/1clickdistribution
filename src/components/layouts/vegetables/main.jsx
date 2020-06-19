import React, {Component, useEffect} from 'react';
import {Helmet} from 'react-helmet'
import '../../common/index.scss';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';

// Import custom components
import {Slider3} from "../../../services/script"
import Trading from "./tranding"
import Special from "../common/special"
import {
    svgFreeShipping,
    svgservice,
    svgoffer
} from "../../../services/script"
import HeaderTwo from "../../common/headers/header-two"
import FooterOne from "../../common/footers/footer-one"
import ThemeSettings from "../../common/theme-settings"
import {Box} from "@material-ui/core";
import  './main.css'
import {makeStyles} from "@material-ui/core/styles";
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStylesCompare=makeStyles((theme)=>({
    root:{
        color: '#ff4c3b',
        fontSize:'100px',
        fontWeight: 500,
        fontFamily: 'inherit',
        [theme.breakpoints.down('sm')]:{
            fontSize: '50px'
        }
    },
    secondHead:{

        fontSize: '60px',
        color: '#333',
        textTransform: 'uppercase',
        fontWeight: 700,
        [theme.breakpoints.down('sm')]:{
            fontSize: '30px'
        }
    },
    thirdHead:{
        fontSize: '30px',
        textTransform: 'capitalize',
        fontWeight: 600,
        letterSpacing: '0.03em',
        color: '#4b4b4b',
        [theme.breakpoints.down('sm')]:{
            fontSize: '20px'
        }
    }
}))



function Vegetables(props) {

    const classes=useStylesCompare();


    useEffect(() => {


        document.getElementById("color").setAttribute("href", `#`);

    },[]);

    return (
            <div>
                <Helmet>
                    <title>1click Distribution | Vegetable Store</title>
                </Helmet>
                <HeaderTwo logoName={'logo.png'} />
                <section className="p-0">
                    <Slider className="slide-1 home-slider">
                        <div>
                            <div className="home home39 text-center">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <div className="slider-contain">

                                                    <div className="my-cool-wrapper">
                                                        <div className={"text-and-images-on-top"}>
                                                            <h4 style={{color: '#870000'}}>save 10%</h4>
                                                            <h1 >Produit alimentaires frais</h1><Link to={`${process.env.PUBLIC_URL}/features/element-product-box`}  className="btn btn-solid">shop All
                                                                                                </Link>
                                                         </div>


                                                        <div className="transparent-background">
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div>
                            <div className="home home38 text-center">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <div className="slider-contain">
                                                    <div className="my-cool-wrapper">
                                                        <div className="text-and-images-on-top">
                                                            <h4 style={{color: '#870000'}}>save 10%</h4>
                                                            <h1 >fresh vegetables</h1><Link to={`${process.env.PUBLIC_URL}/features/element-product-box`}  className="btn btn-solid">shop All
                                                            </Link>

                                                        </div>
                                                        <div className="transparent-background">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </Slider>
                </section>

                {/*collection banner layout*/}
                <section className="banner-padding absolute-banner pb-0">
                    <div className="container absolute-bg">
                        <div className="service p-0">
                            <div className="row">
                                <div className="col-md-4 service-block">
                                    <div className="media">
                                        <div dangerouslySetInnerHTML={{ __html: svgFreeShipping }} />
                                        <div className="media-body">
                                            <h4>free shipping</h4>
                                            <p>Professional shipping in Haiti</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 service-block">
                                    <div className="media">
                                        <div dangerouslySetInnerHTML={{ __html: svgservice }} />
                                        <div className="media-body">
                                            <h4>24 X 7 service</h4>
                                            <p>online service for new customer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 service-block">
                                    <div className="media">
                                        <div dangerouslySetInnerHTML={{ __html: svgoffer }} />
                                        <div className="media-body">
                                            <h4>festival offer</h4>
                                            <p>new online special festival offer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*collection banner layout end*/}

                {/*product section Start*/}

                <Trading type={'vegetable'} />
                {/*product section End*/}


                {/*Parallax banner*/}
                <section className="p-0">
                    <div className="full-banner parallax-banner15 parallax text-left p-left">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    {/*<div className="banner-contain">*/}
                                    {/*    <h2>2020</h2>*/}
                                    {/*    <h3>1 click distribution</h3>*/}
                                    {/*    <h4>special offer</h4>*/}
                                    {/*</div>*/}
                                    <div className="my-cool-wrapper">
                                        <div className="text-and-images-on-top ">
                                            <Typography variant='h1' className={classes.root}>2020</Typography>
                                            <h3 className={classes.secondHead}>1Click distribution</h3>
                                            <h4 className={classes.thirdHead}>special offer</h4>

                                        </div>
                                        <div className="transparent-background">
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Parallax banner end*/}

                {/*product-box slider*/}
                <Special type={'vegetable'} />
                {/*product-box slider end*/}

                {/*Blog Section*/}
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="title4">
                                <h4>recent story</h4>
                                <h2 className="title-inner4">from the blog</h2>
                                <div className="line"><span></span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="blog section-b-space pt-0 ratio2_3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <Slider {...Slider3} className="slide-3 no-arrow">
                                    <div className="col-md-12">
                                        <a href="#">
                                            <div className="classic-effect">
                                                <div>
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/vegetables/blog/1.jpg`}
                                                         className="img-fluid blur-up lazyload bg-img" alt="" />
                                                </div>
                                                <span></span>
                                            </div>
                                        </a>
                                        <div className="blog-details">
                                            <h4>25 January 2018</h4>
                                            <a href="#">
                                                <p>Lorem ipsum dolor sit consectetur adipiscing elit,</p>
                                            </a>
                                            <hr className="style1" />
                                                <h6>by: John Dio , 2 Comment</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <a href="#">
                                            <div className="classic-effect">
                                                <div>
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/vegetables/blog/2.jpg`}
                                                         className="img-fluid blur-up lazyload bg-img" alt="" />
                                                </div>
                                                <span></span>
                                            </div>
                                        </a>
                                        <div className="blog-details">
                                            <h4>25 January 2018</h4>
                                            <a href="#">
                                                <p>Lorem ipsum dolor sit consectetur adipiscing elit,</p>
                                            </a>
                                            <hr className="style1" />
                                                <h6>by: John Dio , 2 Comment</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <a href="#">
                                            <div className="classic-effect">
                                                <div>
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/vegetables/blog/3.jpg`}
                                                         className="img-fluid blur-up lazyload bg-img" alt="" />
                                                </div>
                                                <span></span>
                                            </div>
                                        </a>
                                        <div className="blog-details">
                                            <h4>25 January 2018</h4>
                                            <a href="#">
                                                <p>Lorem ipsum dolor sit consectetur adipiscing elit,</p>
                                            </a>
                                            <hr className="style1" />
                                                <h6>by: John Dio , 2 Comment</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <a href="#">
                                            <div className="classic-effect">
                                                <div>
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/vegetables/blog/4.jpg`}
                                                         className="img-fluid blur-up lazyload bg-img" alt="" />
                                                </div>
                                                <span></span>
                                            </div>
                                        </a>
                                        <div className="blog-details">
                                            <h4>25 January 2018</h4>
                                            <a href="#">
                                                <p>Lorem ipsum dolor sit consectetur adipiscing elit,</p>
                                            </a>
                                            <hr className="style1" />
                                                <h6>by: John Dio , 2 Comment</h6>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Blog Section End*/}
                <ThemeSettings/>
                <FooterOne logoName={'logo.png'} />
            </div>
        )

}


export default Vegetables
