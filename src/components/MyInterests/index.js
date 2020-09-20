import React, { Component, useState} from 'react';
import { Card, Modal, Button } from 'react-bootstrap';
import { catlist } from '../../constants/categoryConst'; 
import { copyArrayObjByNoRef } from '../../helper/function';

class MyInterests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModel: false,
      myInterests: [],
      tempMyInterests: [],
    }
  }

  handleSave = () => this.setState({ showModel: false, myInterests: copyArrayObjByNoRef(this.state.tempMyInterests) });
  handleClose = () => this.setState({ showModel: false, tempMyInterests: copyArrayObjByNoRef(this.state.myInterests) });
  handleShow = () => this.setState({ showModel: true });
  handleSelect = (item) => {
    var newMyInterests = copyArrayObjByNoRef(this.state.tempMyInterests);
    if(newMyInterests.filter(it => it.label === item.label).length > 0) {
      const lanIndex = newMyInterests.findIndex(it => it.label === item.label);
      newMyInterests.splice(lanIndex, 1);
      this.setState({ tempMyInterests: newMyInterests });
    }
    else
    {
      this.setState({ tempMyInterests: [...newMyInterests, item] });
    }
  }

  render() {
    const { myInterests, tempMyInterests, showModel } = this.state;
    return (
      <>
        <Card className="clearfix">
          <div>
            <div className="my-interests-title">
              Selected priority categories
            </div>
            <div className="my-interests-button" variant="primary" onClick={this.handleShow}>
              Update
            </div>
          </div>
          <div className="my-interests-body">
            {myInterests && myInterests.map((item, i) => 
              <div key={i} className="my-interests-item">
                {item.label}
              </div>
            )}
          </div>
        </Card>
        <Modal size="xl" show={showModel} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>My Interests</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {catlist.map((item, i) =>
              <div className="cat-gallery" key={i+1} style={{backgroundColor: tempMyInterests.filter(it => it.label === item.label).length > 0 ? 'lightgray' : ''}} >
                <div className="my-interests-item" onClick={() => this.handleSelect(item)}>{item.label}</div>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="success" onClick={this.handleSave}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default MyInterests; 