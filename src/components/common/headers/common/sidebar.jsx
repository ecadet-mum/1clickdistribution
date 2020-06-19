import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class SideBar extends Component {

    state={
        categories:[
            {id:1,description:'All',img:''},
            {id:2,description:'Produits Alimentaires ',img:'',subcategories:[{id:1,description:'Grains',img:''},{id:2,description:'Pattes',img:''},{id:3,description:'Condiments',img:''},{id:4,description:'Produits laitiers',img:''}]},
            {id:6,description:'Boissons',img:'',subcategories:[{id:1,description:'Boissons gazeuses',img:''},{id:2,description:'Jus de fruits',img:''},{id:3,description:'Jus en poudre',img:''},{id:4,description:'Boissons Alcoolisées',img:''}]},
            {id:11,description:'Produit de Nettoyage',img:'',subcategories:[{id:1,description:'Lessive',img:''},{id:2,description:'Vaisselle',img:''},{id:3,description:'Desinfectant/desodorisant',img:''}]},
            {id:15,description:'Produits pour Bebe',img:''},
            {id:16,description:'Produits Hygiéniques',img:''},
            {id:17,description:'Fleurs pour toutes les occasions',img:''},




        ]
    }



    closeNav() {
        var closemyslide = document.getElementById("mySidenav");
        if (closemyslide)
            closemyslide.classList.remove('open-side');
    }

    handleSubmenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if(event.target.nextElementSibling.classList.contains('opensub1'))
            event.target.nextElementSibling.classList.remove('opensub1')
        else{
            document.querySelectorAll('.opensub1').forEach(function (value) {
                value.classList.remove('opensub1');
            });
            event.target.nextElementSibling.classList.add('opensub1')
        }
    }
    handleSubTwoMenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if(event.target.nextElementSibling.classList.contains('opensub2'))
            event.target.nextElementSibling.classList.remove('opensub2')
        else{
            document.querySelectorAll('.opensub2').forEach(function (value) {
                value.classList.remove('opensub2');
            });
            event.target.nextElementSibling.classList.add('opensub2')
        }
    }
    handleSubThreeMenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if(event.target.nextElementSibling.classList.contains('opensub3'))
            event.target.nextElementSibling.classList.remove('opensub3')
        else{
            document.querySelectorAll('.opensub3').forEach(function (value) {
                value.classList.remove('opensub3');
            });
            event.target.nextElementSibling.classList.add('opensub3')
        }
    }
    handleSubFourMenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if(event.target.nextElementSibling.classList.contains('opensub4'))
            event.target.nextElementSibling.classList.remove('opensub4')
        else{
            document.querySelectorAll('.opensub4').forEach(function (value) {
                value.classList.remove('opensub4');
            });
            event.target.nextElementSibling.classList.add('opensub4')
        }
    }

    handleMegaSubmenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if(event.target.nextElementSibling.classList.contains('opensidesubmenu'))
            event.target.nextElementSibling.classList.remove('opensidesubmenu')
        else{
            event.target.nextElementSibling.classList.add('opensidesubmenu')
        }
    }

    render() {
        return (
            <div id="mySidenav" className="sidenav">
                <a href="javascript:void(0)" className="sidebar-overlay" onClick={this.closeNav}></a>
                <nav>
                    <a onClick={this.closeNav}>
                        <div className="sidebar-back text-left">
                            <i className="fa fa-angle-left pr-2" aria-hidden="true"></i> Back
                        </div>
                    </a>
                    <div className="sidebar-menu">
                        <h5 style={{marginTop:'10px',marginLeft:'10px'}}>Categories</h5>
                    </div>

                    <ul id="sub-menu" className="sidebar-menu">
                        {/*<li>*/}
                        {/*    <Link to={`${process.env.PUBLIC_URL}/features/element-product-box`}  onClick={this.closeNav} >*/}
                        {/*        All                              */}
                        {/*    </Link>*/}
                        {/*</li>*/}


                        {this.state.categories.map(cat=>{
                        return (<li key={cat.id}>
                                    <Link to={`${process.env.PUBLIC_URL}/features/element-product-box`}  onClick={this.closeNav} >
                                        {cat.description}
                                        {(cat.subcategories===undefined || cat.subcategories.length<=0)? null :
                                        <span className="sub-arrow"></span>}
                                    </Link>
                                    {(cat.subcategories===undefined || cat.subcategories.length<=0)? null :
                                        <ul>
                                            {cat.subcategories.map(sub=>{

                                            return(
                                                      <li>
                                                          <Link to={`${process.env.PUBLIC_URL}/features/element-product-box`} onClick={this.closeNav}>{sub.description}</Link>
                                                      </li>
                                                 )
                                            })}
                                        </ul>

                                    }


                                </li>)
                        })}





                    </ul>
                </nav>
            </div>

        )
    }
}


export default SideBar;
