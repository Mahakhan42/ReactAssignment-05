import { Button_Component } from './Button_Component';
const Second_Component = () => {
  return <>
    <div className="container">
        <div className="row">
            <div className="col-md-6">
      <div className="image-container" style={{backgroundColor:'pink'}}>
        {/* Replace 'image.jpg' with the path to your image */}
        <img src="https://template.hasthemes.com/daxone/daxone/assets/images/banner/banner-1.jpg" alt="Furniture" />
      </div>
      </div>
      <div className="col-md-6">
      <div className="text-container">
      <br /><br /><br /><p>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry.</p>
        <br /><h1><b>Winter Discount</b></h1>
        <h2><b>Up to 30%</b></h2><br />
        <p>It is a long established fact that a reader will be distracted <br />by the readable content of a page when looking at its <br />layout.</p>
        <br /><Button_Component/>
      </div>
    </div>
    </div>
    </div><br /><br /><br />
    <div className="conatiner">
      <div className="text-center justify-content-center ">
        <h1><b>All Products</b></h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />Lorem Ipsum has been the industry's standard dummy text</p>
     <br />
      </div>
    </div>

    </>
};

export {Second_Component};
