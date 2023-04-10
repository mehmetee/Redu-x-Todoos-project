export default function(state,action){
    switch (action.type) {
        case "ADD_LIST":
            return {...state,todooList:[...state.todooList,action.pyload.name]}
        case 'DELETEDLIST':
            const itemName = action.pyload.name;
            const copyList = state.todooList.slice();
            const itemIndex = copyList.indexOf(itemName);
            
            const failedTask= state.failedTask.slice()
            const failedIndex = failedTask.indexOf(action.pyload.name);

                const completed=state.completed.slice()
                const completIndex=completed.indexOf(action.pyload.name);

                if(completed.includes(action.pyload.name)==true){
                    completed.splice(completIndex,1);
                    copyList.splice(itemIndex, 1);
                    console.log('başarılı')
                    return {
                        ...state,
                       todooList: copyList,
                        completed:completed,
                    };
                }else if(failedTask.includes(action.pyload.name)==true){
                    failedTask.splice(failedIndex,1);
                    copyList.splice(itemIndex, 1);
                    console.log('girdi')
                   return{
                       ...state,
                       failedTask:failedTask,
                       todooList:copyList,
                       completed:completed
                   }
                }else{

                    copyList.splice(itemIndex, 1);
                    return{
                        ...state,
                        todooList:copyList,
                        failedTask:failedTask,
                        completed:completed
                    }
                }
                console.log(ver1)
                console.log(ver2)
                
                case 'FAILEDTASK':
            return{...state,failedTask:[...state.failedTask,action.pyload.failede,]}
        case 'UNDO':
           if(state.failedTask.includes(action.pyload.failede)==true){
              const previousState = [...state.failedTask]
              const failedeIndex =previousState.indexOf(action.pyload.failede)
                previousState.splice(failedeIndex,1)

              return {
                ...state,
                failedTask : previousState,
              };
            }else{
                return {...state,}
            }
           
        case 'COMPLETED':
            return{...state,completed:[...state.completed,action.pyload.complet]}
        case 'COMPLETUNDO':
            if (state.completed.length>0) {
                const allCompletedList=[...state.completed];
                const newCompletListIndex=allCompletedList.indexOf(action.pyload.complet);
                allCompletedList.splice(newCompletListIndex,1)
                return{
                    ...state,
                    completed:allCompletedList 
                };
            }else{
                return state;
            }
        default:
            return state;
    }
}