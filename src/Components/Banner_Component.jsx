import { Button_Component } from './Button_Component';
const Banner_Components = () =>{
    return<>
    <div className="background mt-5">
     <div className="container-fluid">
        <div className="row">
            <div className="col-md-6">
            <br /><br /><br /> <img width='80%' src="https://template.hasthemes.com/daxone/daxone/assets/images/slider/hm1-single-1.png" alt="" />
            </div>
            <div className="col-md-6">
            <br /><br /><br />  <h1 style={{fontSize: '50px',color:'red'}}><i> 30% Off</i></h1><br />
                <h1 style={{fontSize: '70px'}}><b>Comfort Chair</b></h1><br />
                <h4>Collect From Daxone & get 30% Discount.</h4><br /><br />
                <Button_Component/>
                </div>
            </div>
        </div>
     </div>
    </>
}
export {Banner_Components}