import React from 'react'

const TransactionList = () => {
  return (
    <>
        <h3>History</h3>
      <ul  className="list">
        <li className="minus">
          Cash <span>-INR400</span><button class="delete-btn">x</button>
        </li>
      </ul>
    </>
  )
}

export default TransactionList