import React from 'react';
import {Navbar_Component} from "./Components/Navbar_Component.jsx";
import './App.css'
import { Banner_Components } from "./Components/Banner_Component";
import { First_Component } from "./Components/First_Component";
import { Card_Component} from "./Components/Card_Component";
import { Second_Component } from './Components/Second_Component';
import { Footer_Component } from './Components/Footer_Component';
import {CardList} from './Components/CardRender_Component.jsx';
const App = () =>{
  return <>
<Navbar_Component/>
<Banner_Components/>
<First_Component/>
<div className="container">
  <div className="row d-flex">
<CardList/>
</div>
</div>
<Second_Component/>
<div className="container">
  <div className="row">
<div className="col-md-3">
             <Card_Component
          img="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-1.jpg"
          title="Chair Golden Easy Spot Chair."
          text="$210.00"
        />
        </div>
        <div className="col-md-3">
             <Card_Component
          img="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-2.jpg"
          title="Chair Golden Easy Spot Chair."
          text="$210.00"
        />
        </div>
        <div className="col-md-3">
             <Card_Component
          img="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-3.jpg"
          title="Chair Golden Easy Spot Chair."
          text="$210.00"
        />
        </div>
        <div className="col-md-3">
             <Card_Component
          img="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-4.jpg"
          title="Chair Golden Easy Spot Chair."
          text="$210.00"
        />
        </div>
        <div className="col-md-3">
             <Card_Component
          img="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-5.jpg"
          title="Chair Golden Easy Spot Chair."
          text="$210.00"
        />
        </div>
        <div className="col-md-3">
             <Card_Component
          img="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-6.jpg"
          title="Chair Golden Easy Spot Chair."
          text="$210.00"
        />
        </div>
        <div className="col-md-3">
             <Card_Component
          img="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-7.jpg"
          title="Chair Golden Easy Spot Chair."
          text="$210.00"
        />
        </div>
        <div className="col-md-3">
             <Card_Component
          img="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-8.jpg"
          title="Chair Golden Easy Spot Chair."
          text="$210.00"
        />
        </div>
        </div>
        </div>
<Footer_Component/>
  </>
}
export default App;