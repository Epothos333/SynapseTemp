const initialState = {
    wordList:["apple","car","hockey","chess","computer"],
};

function updateWordList(state=initialState, action){
    switch(action.type){
        case 'wordAdded' : {

            return {
                wordList:[...state.wordList,action.payload],
            };
        }
        default : {
            return state;
        }
    }
}