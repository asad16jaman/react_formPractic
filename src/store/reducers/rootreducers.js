const inisilaState = {
    count:0
}

function RootReducers(state=inisilaState,action){
    switch(action.type){

        case 'ADD':{
            console.log('ti is from dreuse')
            return {
                count:state.count + 1
            }
        };
        case "SUB":{
            return {
                count:state.count - 1
            }
        };

        default:
            return state;
    }
}


export default RootReducers