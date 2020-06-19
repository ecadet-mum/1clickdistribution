import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {IntlActions, withTranslate} from 'react-redux-multilingual'
import {Box} from "@material-ui/core";
import store from '../../../../store';
import {makeStyles} from "@material-ui/core/styles";

const useStyles=makeStyles((theme)=>({
    listItemStyle:{
        padding: '0px 5px'
    }
}))

const TopBar= (props)=> {
    const {translate} = props;
    const classes=useStyles();

    const changeLanguage = (lang) => {
        store.dispatch(IntlActions.setLocale(lang))
    }


    return (


        <div className="top-header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6" >
                        <div className="header-contact">
                            <ul >
                                <li>{translate('topbar_title', {theme_name: ' 1ClickDistribution'})}</li>
                                {/*{translate('call_us')}*/}
                                <li><i className="fa fa-phone" aria-hidden="true"></i>: 509-474950
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 text-right">
                        <ul className="header-dropdown">
                            {/*<li className="mobile-wishlist compare-mobile"><Link to={`${process.env.PUBLIC_URL}/compare`}><i className="fa fa-random" aria-hidden="true"></i>{translate('compare')}</Link></li>*/}
                            <Box display={{xs: 'none', md: 'inline'}}>
                                {/*<li ><Link to={`${process.env.PUBLIC_URL}/wishlist`}><i className="fa fa-language" aria-hidden="true"></i>{translate('english')}</Link></li>*/}
                                {/*<li><Link to={`${process.env.PUBLIC_URL}/wishlist`}><i className="fa fa-language" aria-hidden="true"></i>{translate('french')}</Link></li>*/}
                                {/*<li ><Link to={`${process.env.PUBLIC_URL}/wishlist`}><i className="fa fa-language" aria-hidden="true"></i>{translate('creole')}</Link></li>*/}

                                <li style={{padding: '0px 10px'}}><a href={null}
                                                                         onClick={() => changeLanguage('en')}><img
                                    style={{width: '15px', height: '15px', marginBottom: '3px', marginRight: '2px'}}
                                    src={`${process.env.PUBLIC_URL}/assets/images/vegetables/language/en-us.png`}/>{translate('english')}
                                </a></li>
                                <li  style={{padding: '0px 10px'}}><a href={null}
                                                                         onClick={() => changeLanguage('fn')}><img
                                    style={{width: '15px', height: '15px', marginBottom: '3px', marginRight: '2px'}}
                                    src={`${process.env.PUBLIC_URL}/assets/images/vegetables/language/fr.png`}/>{translate('french')}
                                </a></li>
                                <li  style={{padding: '0px 10px'}}><a href={null}
                                                                         onClick={() => changeLanguage('cr')}><img
                                    style={{width: '15px', height: '15px', marginBottom: '3px', marginRight: '2px'}}
                                    src={`${process.env.PUBLIC_URL}/assets/images/vegetables/language/ht.png`}/>{translate('creole')}
                                </a></li>
                            </Box>

                            <li className="mobile-wishlist" ><Link to={`${process.env.PUBLIC_URL}/wishlist`}><i
                                className="fa fa-heart" aria-hidden="true"></i>{translate('wishlist')}</Link></li>
                            <li className="onhover-dropdown mobile-account">
                                <i className="fa fa-user" aria-hidden="true"></i> {translate('my_account')}
                                <ul className="onhover-show-div">
                                    <li>
                                        <Link to={`${process.env.PUBLIC_URL}/pages/login`} data-lng="en">Login</Link>
                                    </li>
                                    <li>
                                        <Link to={`${process.env.PUBLIC_URL}/pages/register`}
                                              data-lng="en">Register</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}



export default withTranslate(TopBar);
