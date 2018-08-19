import React from 'react';
import PropTypes from 'prop-types';

const FormType = ({field,change,ddlproblem}) => (

<div>
    <div className="container">
        <div className="form-group row">
            <label for="problem" className="col-12 col-sm-12 col-form-label">กรุณาระบุปัญหาที่เกิดจากการใช้สินค้าหรือบริการ</label>
            <div className="col-12  col-sm-12">
                {/* <input type="text" className="form-control" id="problem"  value={field.problem} onChange={change}  required/>
            </div> */}
                <div class="form-group">
                    <select className="form-control" id="problem" value={field.problem} onChange={change} required>
                        {ddlproblem(field.ddlproblem)}
                    </select>
                </div>
            </div>
        </div>
        <div className="form-group row">
            <label for="damage" className="col-12 col-sm-12 col-form-label">มูลค่าความสียหายที่เกิดขึ้น / จำนวนเงินที่ต้องการชดเชย</label>
            <div className="col-12  col-sm-12">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">฿</span>
                    </div>
                    <input type="number" className="form-control" id="damage"  value={field.damage} onChange={change}/>
                </div>
            </div>
        </div>
        <div className="form-group row">
            <label for="datail" className="col-12 col-sm-12 col-form-label">รายละเอียดเกี่ยวกับเหตุการณ์ที่เกิดขึ้น</label>
            <div className="col-12 col-sm-12">
                <textarea className="form-control" aria-label="With textarea" id="desc" value={field.desc} onChange={change}></textarea>
            </div>
        </div>
    </div>
</div> 
);


FormType.propTypes = {
    field: PropTypes.object.isRequired,
    change: PropTypes.func.isRequired,
    ddlproblem : PropTypes.func.isRequired
};

export default FormType;
