import React from 'react';
import { Card } from 'react-bootstrap';
import ControlledCarousel from '../../components/BannerSlider';
import CategorySldier from '../../components/CategorySlider';
import MyInterests from '../../components/MyInterests';
import SuggestedForYou from '../../components/SuggestedForYou';

class Home extends React.Component {
  render() {
    return (
      <div >
        <div className="banner-style">
          <ControlledCarousel />
        </div>
        <Card className="cat-gallery-style">
          <div className="cat-gallery-title">
            Type of product
          </div>
          <CategorySldier />
        </Card>
        <div className="my-interests-style">
          <MyInterests />
        </div>
        <div className="app-content-body">
          <SuggestedForYou />
        </div>
      </div>
    )
  }
}

export default Home;