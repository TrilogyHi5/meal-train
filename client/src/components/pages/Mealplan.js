import Ingredients from '../../utils/api/Ingredients';
import AddUser from '../../utils/api/AddUser';
import GetUser from '../../utils/api/GetUser';

const Mealplan = () => {    
    
        // NEW USER ID: ol5z3L3JV0OO4ROrikB18
        // NEW USER ID: Gi9lG9yTEWfDApLoejawo

    const style = { margin: '0 auto', width: '80%' };

    return (

        <div style={style}>  
                          
            {/* <Ingredients /> */}
            {/* <AddUser />  DO NOT TURN ON! CREATES NEW USER ON REFRESH! */} 
            <GetUser />

        </div>
    )
}

export default Mealplan;