import React, {Component} from 'react';
import {connect} from "react-redux";
import Slider from "react-slick"

// import Custom Components
import Breadcrumb from "../../common/breadcrumb";
import ProductStyleOne from "./common/product-style-one";
import {getVisibleproducts,getProductByCategory} from "../../../services";
import {addToCart, addToCompare, addToWishlist} from "../../../actions";
import {Product4, Product5} from "../../../services/script";
import ProductStyleTwo from "./common/product-style-two";
import ProductStyleThree from "./common/product-style-three";
import ProductStyleFour from "./common/product-style-four";
import ProductStyleFive from "./common/product-style-five";
import ProductStyleSix from "./common/product-style-six";
import ProductStyleSeven from "./common/product-style-seven";
import ProductStyleEight from "./common/product-style-eight";
import ProductStyleNine from "./common/product-style-nine";
import ProductStyleTen from "./common/product-style-ten";
import ProductStyleEleven from "./common/product-style-eleven";

class ElementProductBox extends Component {

    render (){
        const {products, addToCart, symbol, addToWishlist, addToCompare} = this.props;
        let showHead=true;
        if(this.props.showHead!=undefined)
            showHead=this.props.showHead;

        return (
            <div>
                {showHead && <Breadcrumb parent={'Products'} title={'Category'}/>}


                <section  className="ratio_square tools-grey light-layout section-b-space">

                    <div className="title4">
                        <h2 className="title-inner4">Recommended for you</h2>
                        <div className="line"><span></span></div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Slider {...Product4} className="product-4 product-m no-arrow">
                                    { products.map((product, index) =>
                                        <div className="col-xl-3 col-md-6 col-grid-box">
                                            <ProductStyleFive product={product} symbol={symbol}
                                                              onAddToCompareClicked={() => addToCompare(product)}
                                                              onAddToWishlistClicked={() => addToWishlist(product)}
                                                              onAddToCartClicked={addToCart} key={index}/>
                                        </div>)}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>



                <section className="ratio_square gym-product light-layout section-b-space">
                    <div className="title4">
                        <h2 className="title-inner4">List of products</h2>
                        <div className="line"><span></span></div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="no-slider row">
                                    { products.map((product, index) =>
                                        <ProductStyleEight product={product} symbol={symbol}
                                           onAddToCompareClicked={() => addToCompare(product)}
                                           onAddToWishlistClicked={() => addToWishlist(product)}
                                           onAddToCartClicked={addToCart} key={index}/>
                                        )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>





            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    products: getProductByCategory(state.data, state.filters),
    symbol: state.data.symbol,
})

export default connect(
    mapStateToProps, {addToCart, addToWishlist, addToCompare}
)(ElementProductBox)
