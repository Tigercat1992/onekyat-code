import React, { Component } from 'react';
import { adslist } from '../../constants/adsConst';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart} from '@fortawesome/free-solid-svg-icons'
import { Image, Container, Row, Col } from 'react-bootstrap';
import { copyArrayObjByNoRef } from '../../helper/function';

class SuggestedForYou extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myInterests: [],
    }
  }

  handleSelect = (item) => {
    var newMyInterests = copyArrayObjByNoRef(this.state.myInterests);
    if(newMyInterests.filter(it => it.label === item.label).length > 0) {
      const lanIndex = newMyInterests.findIndex(it => it.label === item.label);
      newMyInterests.splice(lanIndex, 1);
      this.setState({ myInterests: newMyInterests });
    }
    else
    {
      this.setState({ myInterests: [...newMyInterests, item] });
    }
  }

  render() {
    const { myInterests } = this.state;
    return (
      <div>
        <div className="cat-gallery-title">
          Suggested For You
        </div>
        <Row className="sfy-container">
          {adslist.map((item, i) => 
            <div key={i} className="sfy-item">
              <div className="like-heart" onClick={() => this.handleSelect(item)}>
                <FontAwesomeIcon icon={faHeart} size='2x'
                  color={myInterests.filter(it => it.label === item.label).length > 0 ? '#3EA202' : '#ffffff'} 
                />
              </div>
              <Image className="sfy-img" src={item.src} width="100%" />
              <div className="sfy-title-container">
                <p className="sfy-title">{item.label}</p>
                <p className="sfy-amount">{10000 * (i+1)} Kyat</p>
              </div>
            </div>
          )}
        </Row>
      </div>
    )
  }
}

export default SuggestedForYou;