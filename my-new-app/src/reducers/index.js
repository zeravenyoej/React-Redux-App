

const initialState = {
    quote: 'Hit the button below!'
}

export const reducer = (state = initialState, action) => {
    switch (action.type){
        default:
            return state;
    };
};