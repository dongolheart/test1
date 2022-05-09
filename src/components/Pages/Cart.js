import React from 'react'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'

const Cart = () => {
  return (
    <>
    <Nav/>
    <h3 className='text-center my-3'>Cart Items</h3>

    <table className='table container mx-auto text-center table-hover table-striped'>
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Product Image</th>
          <th>Product Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>
            <img src='./images/img1.jpg' style={{"height":100}}/>
          </td>
          <td>
            <h4>Laptop</h4>
            <h5>Rs. 90000</h5>
            <h6>Processor:i7, 15.6" display, 8gb RAM, 512Gb SSD HDD</h6>
          </td>
          <td>
            <a className='btn btn-warning me-2'>Update</a>
            <a className='btn btn-danger'>Remove</a>
          </td>
        </tr>

        <tr>
          <td>2</td>
          <td>
            <img src='./images/img2.jpg' style={{"height":100}}/>
          </td>
          <td>
            <h4>Data Cable</h4>
            <h5>Rs. 900</h5>
            <h6>very durable</h6>
          </td>
          <td>
            <button className='btn btn-warning me-2'>Update</button>
            <button className='btn btn-danger'>Remove</button>
          </td>
        </tr>

        <tr>
          <td>3</td>
          <td>
            <img src='./images/img3.jpg' style={{"height":100}}/>
          </td>
          <td>
            <h4>Asus Predator</h4>
            <h5>Rs. 130000</h5>
            <h6>Processor:i7, 15.6" display, 16gb RAM, 1TB SSD HDD</h6>
          </td>
          <td>
            <button className='btn btn-warning me-2'>Update</button>
            <button className='btn btn-danger'>Remove</button>
          </td>
        </tr>

      </tbody>
    </table>
    <Footer/>
    </>
  )
}

export default Cart