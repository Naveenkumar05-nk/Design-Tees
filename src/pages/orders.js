import React, { useReducer, useContext } from "react"
import { OrdersContext } from "../context/ordersContext"
import { Link } from "gatsby"
import SingleOrder from "../components/SingleOrder"

const Orders = () => {
  const context = useContext(OrdersContext)
  return (
    <>
      <div className="navbarStyle">
        <Link to="/" className="rl">
          Design-Tees
        </Link>
        <Link to="/" className="rl">
          Back to Design Panel
        </Link>
      </div>

      {context.state.map((order, index) => (
        <SingleOrder order={order} key={index} />
      ))}
    </>
  )
}

export default Orders
