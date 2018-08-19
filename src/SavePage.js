import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'
// import { Button, Checkbox, Form,Radio } from 'semantic-ui-react'
import PropTypes from 'prop-types';
import { ListGroup,ListGroupItem } from 'react-bootstrap';
import { Affix, Button } from 'antd';
import { message } from 'antd';
import 'antd/dist/antd.css';
// import RaisedButton from 'material-ui/RaisedButton';
// import FlatButton from 'material-ui/FlatButton';

class SaveForm extends Component{
	
	constructor(props) {
		super(props);  
		this.state={
			active : null,
			redirect : false ,
			check : false
		}
		this.saveAndContinue = this.saveAndContinue.bind(this);
		// this.state = {
		// }

		this.handleChange = this.handleChange.bind(this);
		this.clickownerid = this.clickownerid.bind(this);
		this.myColor = this.myColor.bind(this);
		this.checkDisable = this.checkDisable.bind(this);
	}

	checkDisable(){
		if (this.state.check === false) {
			return false;
		  }
		  return true;
	}
	 
	handleChange(event) {
		const field = event.target.id;
		this.props.fieldValues.status = "In-Progress";
		const fieldValues = this.props.fieldValues;
		fieldValues[field] = event.target.value;
		this.setState({
			
		  fieldValues
		  
		});
		}
		
	clickownerid(event){
		if (this.state.active === event.target.value) {
			this.setState({active : null,check : false})
		  } else {
			this.setState({active : event.target.value,check : true})
		  }
			// alert('You clicked the third ListGroupItem');
			console.log("event"+event)
			// var id = event.target.id;
			const fieldValues = this.props.fieldValues;
			fieldValues.ownerid = event.target.value;
			console.log("event.target.value"+event.target.value)
			this.setState({
				fieldValues
				});
		
	}
	myColor(name){
		if (this.state.active === name) {
			return "rgb(0, 188, 212)";
		  }
		  return "#ffffff";
	}
	saveAndContinue(e) {
		e.preventDefault()


		this.setState({
				check: false
			})
		
		message.success('เรื่องร้องเรียนของท่าน ทางมูลนิธิเพื่อผู้บริโภค ได้รับเรื่องร้องเรียนเป็นที่เรียบร้อยแล้ว และจะติดต่อกลับไปให้เร็วที่สุด',10);
		this.props.submitRegistration(this.props.fieldValues)
		// this.context.router.replace('/');

		// return this.context.router.replace('/');
		// this.setState({
		// 	redirect: true
		// })
		// this.renderRedirect()
		// this.context.router.replace('/');
		//Clear		
		// this.props.nextStep()
	  }

	render(){
		// let {indexStep} = this.props
		return(
			
			<div>
			{/* <h2>Submit Complaint <span>{this.props.fieldValues.name}</span></h2> */}
			<div>
				<Affix>
					<div className="z-index text-center">
					<div className="row">
						<div className="col-3">
						{/* <span> */}
							<button type="button" className="btn btnback float-left" onClick={this.props.previousStep}><i className="fa fa-angle-left"></i> ย้อนหลัง</button>
						{/* </span> */}
						</div>
						<div className="col-6">
						{/* <span> */}
							 (4/4) ส่งเรื่อง 
							 {/* </span> */}
						</div>
						</div>
					</div>
				</Affix>
			</div>
			<br></br>
			<br></br>
			<p className="text-center text-color">เพื่อดำเนินงานต่ออย่างมีประสิทธิภาพ<br></br>กรุณาระบุหน่วยงานรับผิดชอบที่ท่านต้องการ</p>
			<div>
            <ListGroup>
                <ListGroupItem className="text-left" id="ownerid" value="6" style={{backgroundColor: this.myColor("6")}} onClick={this.clickownerid}>มูลนิธิเพื่อผู้บริโภค (สำนักงานใหญ่) </ListGroupItem>
                <ListGroupItem className="text-left" id="ownerid" value="14" style={{backgroundColor: this.myColor("14")}} onClick={this.clickownerid} >สมาคมผู้บริโภคขอนแก่น (ภาคอีสาน)</ListGroupItem>
                <ListGroupItem className="text-left" id="ownerid" value="8" style={{backgroundColor: this.myColor("8")}} onClick={this.clickownerid}>สมาคมผู้บริโภคสงขลา (ภาคใต้)</ListGroupItem>
				<ListGroupItem className="text-left" id="ownerid" value="11" style={{backgroundColor: this.myColor("11")}} onClick={this.clickownerid}>มูลนิธิพะเยาเพื่อการพัฒนา (ภาคเหนือ) </ListGroupItem>
                <ListGroupItem className="text-left" id="ownerid" value="12" style={{backgroundColor: this.myColor("12")}} onClick={this.clickownerid} >สมาคมผู้บริโภคภาคตะวันตก (ภาคตะวันตก)</ListGroupItem>
                <ListGroupItem className="text-left" id="ownerid" value="13" style={{backgroundColor: this.myColor("13")}} onClick={this.clickownerid}>สมาคมผู้บริโภคภาคตะวันออก (ภาคตะวันออก)</ListGroupItem>
				<ListGroupItem className="text-left" id="ownerid" value="7" style={{backgroundColor: this.myColor("7")}} onClick={this.clickownerid}>มูลนิธิเพื่อผู้บริโภค (ภาคกลาง)</ListGroupItem>
            </ListGroup>
        </div>
			  <div style={{marginTop: 12}}>
				{/* <button type="button"  className="btn btn-primary" style={{marginRight: 12}} onClick={this.props.previousStep}>Back</button> */}
				{/* <button type="button" className="btn btn-primary float-left">Save For Later</button> */}
				{this.checkDisable()?(
					<button type="button" className="btn btn-primary float-right"  onClick={this.saveAndContinue}>ส่งเรื่อง</button>				
				):(
					<button type="button" className="btn btn-primary float-right disabled" aria-disabled='ture'>ส่งเรื่อง</button>						
				)}
              </div>
		      
			</div>



		);
	}

}
SaveForm.contextTypes = {
	router:  PropTypes.object
	// router : React.PropTypes.func.isRequired
  };
export default SaveForm;