import React from 'react'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'
import { Link } from 'react-router-dom'

const Signin = () => {
    return (
        <>
            <Nav />

            <main className="form-signin w-50 mx-auto my-5 shadow-lg p-5 text-center">
                <form>
                    <img className="mb-4" src="./logo192.png" alt="" width="72" height="72 " />
                    <h1 className="h3 mb-3 fw-bold mb-3">Please sign in</h1>

                    <div className="form-floating mb-1">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-1">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3 text-start">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    Do not have an account. <Link to='/signup'>Register</Link>

                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                </form>
            </main>

            <Footer />
        </>
    )
}

export default Signin