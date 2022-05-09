import React,{useState} from 'react'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'
import { Link } from 'react-router-dom'
import {userRegister} from '../../api/userApi'

const Signup = () => {

    const [error,setError] = useState('')
    const[success,setSuccess] = useState(false)

    const [user_name,setuser_name] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    
    const clickSubmit = e => {
        e.preventDefault()
        userRegister({user_name, email, password})
        .then(data=>{
            if(data.error){
                setError(data.error)
            }
            setSuccess(true)
        })
        .catch(error=>console.log(error))
    }

    const showError = () =>{
        if(error){
            return <div>{error}</div>
        }

    }
    const showSuccess = () =>{
        if(success){
            return <div>User Created Successfully</div>
        }

    }



    return (
        <>
            <Nav />
            {showError()}
            {showSuccess()}

            <main className="form-signin w-50 mx-auto my-5 shadow-lg p-5 text-center">
                <form>
                    <img className="mb-4" src="./logo192.png" alt="" width="72" height="72 " />
                    <h1 className="h3 mb-3 fw-bold mb-3">Register</h1>

                    {/* <div className="form-floating mb-1">
                        <input type="text" className="form-control" id="floatingfname" placeholder="enter first name" />
                        <label for="floatingfname">First name</label>
                    </div>

                    <div className="form-floating mb-1">
                        <input type="text" className="form-control" id="floatinglname" placeholder="enter last name" />
                        <label for="floatinglname">Last name</label>
                    </div> */}

                    {/* <div className="form-floating mb-1">
                        <input type="date" className="form-control" id="dob" placeholder="enter date of birth" />
                        <label for="dob">Date of Birth</label>
                    </div>

                    {/* <div className='form-floating mb-1'> */}
                        {/* <div className='form-control d-flex mb-1'>
                        <label>Gender</label>

                            <div className="form-check">
                                <input className="form-check-input mt-1 me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                    <label className="form-check-label" for="flexRadioDefault1">
                                        Male
                                    </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input mt-1 me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                    <label className="form-check-label" for="flexRadioDefault2">
                                        Female
                                    </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input mt-1 me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                                    <label className="form-check-label" for="flexRadioDefault3">
                                        Other
                                    </label>
                            </div>
                        </div>  */}
                        {/* <label>Gender</label> */}
                    {/* </div> */}
                    {/* <div className="form-floating mb-1">
                        <input type="text" className="form-control" id="floatingName" placeholder="enter Uesrname" onChange={e=>setuser_name(e.target.value)} /
                        >
                        <label for="floatingname">user_name</label>
                    </div> */}
                    <div className="form-floating mb-1">
                        <input type="text" className="form-control" id="floatingfname" placeholder="enter first name" onClick={e=>setuser_name(e.target.value)} />
                        <label for="floatingfname">user_name</label>
                    </div>



                    <div className="form-floating mb-1">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onClick={e=>setEmail(e.target.value)} />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-1">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onClick={e=>setPassword(e.target.value)} />
                        <label for="floatingPassword">Password</label>
                    </div>

                    <div className="form-floating mb-1">
                        <input type="password" className="form-control" id="floatingConfirmPassword" placeholder="Confirm Password" />
                        <label for="floatingConfirmPassword">Confirm Password</label>
                    </div>

                    <div className="checkbox mb-3 text-start">
                        <label>
                            <input type="checkbox" value="i agree" /> I agree to the terms and conditions.
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={clickSubmit}>Register</button>
                    Already have an account. <Link to='/signin'>Sign in</Link>

                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                </form>
            </main>

            <Footer />
        </>
    )
}

export default Signup