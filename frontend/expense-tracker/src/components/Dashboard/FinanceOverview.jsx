import React from 'react'
import CustomPieChart from '../Charts/CustomPieChart'

const COLORS = ["#875cf5", "#FA2C37", "#FF6900"]

const FinanceOverview = ({totalBalance, totalIncome, totalExpense }) => {

    const balanceData = [
        {name : 'Total balance', amount : totalBalance},
        {name : 'Total income', amount : totalIncome},
        {name : 'Total expenses', amount : totalExpense}
    ] 

  return (
    <div className='card'>
      <div className='flex items-center justify-between'>
        <h5 className='text-lg'>Finance Overview</h5>
      </div>

      <CustomPieChart 
        data = {balanceData}
        label = "Total balance"
        totalAmount = {`$${totalBalance}`}
        colors = {COLORS}
        showTextAnchor
      />
    </div>
  )
}

export default FinanceOverview
