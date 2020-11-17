import React, { createContext, useReducer } from "react";
import TransactionReducer from "./TransactionReducer";
import Balance from "../components/Balance";
import AddTransaction from "../components/AddTransaction";
import IncomeExpense from "../components/IncomeExpense";
import History from "../components/History";

const initialState = {
	transactions: [],
};

export const transContext = createContext(initialState);

const TransactionProvider = ({ children }) => {
	const [state, dispatch] = useReducer(TransactionReducer, initialState);

	function deleteTransaction(id) {
		dispatch({
			type: "DELETE_TRANSACTION",
			payload: id,
		});
	}

	function addTransaction(transaction) {
		dispatch({
			type: "ADD_TRANSACTION",
			payload: transaction,
		});
	}

	return (
		<transContext.Provider
			value={{
				transactions: state.transactions,
				addTransaction,
				deleteTransaction,
			}}
		>
			{children}
		</transContext.Provider>
	);
};

export default TransactionProvider;
