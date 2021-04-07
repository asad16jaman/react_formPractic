import React, { Component } from 'react'



export default class GetComponent extends Component{

    state={
        education:[],
        name:'',
        email:'',
        password:'',
        bio:'',
        cuntry:'',
        gander:'',
        
    }

    formHandle = (e)=>{
       
        if(e.target.type === 'checkbox'){
            if (e.target.checked){
                // let newitem = [...this.state.education,e.target.value]
                this.setState({
                    education:this.state.education.concat(e.target.value)
                })
            }else{
                this.setState({
                    education:this.state.education.filter(ele=>{
                        if (ele !== e.target.value ){
                            return ele
                        }
                    })
                })
            }
        }{
            this.setState({
                [e.target.name]:e.target.value
            })
        }

        
    }

    mySubmit = (e)=>{
        e.preventDefault()
        console.log(this.state)

        this.setState({
            name:'',
            email:'',
            password:'',
            bio:'',
            cuntry:'',
            gander:''
        })
    }

    render(){

        console.log(this.state)
        return(
            <div className='container'>
                <form onSubmit={this.mySubmit}>
                <div className='form-group'>
                    <label htmlFor='name'>Name*</label>
                    <input value={this.state.name} type='text' name='name' placeholder='type your name' className='form-control' onChange={this.formHandle} />
                </div>
                <div className='form-group'>
                    <label htmlFor='name'>email</label>
                    <input value={this.state.email} type='email' name='email' placeholder='type your email' className='form-control' onChange={this.formHandle} />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>password</label>
                    <input name='password' type='password' className='form-control' value={this.state.password} onChange={this.formHandle} placeholder='type password' />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>bio</label>
                    <textarea value={this.state.bio} name='textarea' name='bio' placeholder='type short bio' className='form-control' onChange={this.formHandle} />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Your country</label>
                    <select className="form-control" id="exampleFormControlSelect1" name='cuntry' onChange={this.formHandle}>
                    <option value=''>select country</option>
                    <option value='bangladesh'>Bangladesh</option>
                    <option value='indea'>indea</option>
                    <option value='pakistan'>pakistan</option>
                    <option value='inlane'>inlane</option>
                    </select>
                </div>
                
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="gander" id="exampleRadios1" value="Male" onChange={this.formHandle}/>
                    <label className="form-check-label" htmlFor="exampleRadios1">
                        Male
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="gander" id="exampleRadios2" value="Female" onChange={this.formHandle}/>
                    <label className="form-check-label" htmlFor="exampleRadios1">
                        Female
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="gander" id="exampleRadios2" value="other" onChange={this.formHandle}/>
                    <label className="form-check-label" htmlFor="exampleRadios1">
                        other
                    </label>
                </div>

                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="Javascript"  onChange={this.formHandle}/>
                    <label className="form-check-label" htmlFor="inlineCheckbox1">Javascript</label>
                </div>

                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="Python" onChange={this.formHandle}/>
                    <label className="form-check-label" htmlFor="inlineCheckbox2">Python</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="java" onChange={this.formHandle}/>
                    <label className="form-check-label" htmlFor="inlineCheckbox3">Java</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="Django" onChange={this.formHandle}/>
                    <label className="form-check-label" htmlFor="inlineCheckbox5">Django</label>
                </div>


                <br></br>





                <input type="submit" className="btn btn-success" />
                </form>
            </div>
        )
    }

} 