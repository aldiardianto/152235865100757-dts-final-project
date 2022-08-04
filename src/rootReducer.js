

const rootReducer = (state, action) => {
    if(!action.amount){
        return state;
    }
    switch (action.type) {
        case "withdraw":
           
            if(state.balance >= action.amount){
                const afterWithdraw = state.balance - action.amount;
                return { ...state, balance: afterWithdraw };

            }
            return state;
        case "deposit":
            const afterDeposit = state.balance + action.amount;
            return { ...state, balance: afterDeposit };

        default:
            return state;
    }
};

export const selectUser = state => state.user;
export const selectBalance = state => state.balance;

export default rootReducer;
