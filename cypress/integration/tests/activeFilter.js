// 1. Go to the URL
// 2. check elements count in active filter (all 3 of them is there currently)
// 3. click first item and send it to Completed list.
// 4. count that now Item is 2 in the active list.


//import { it } from "mocha";
import toDo from "../page.elements/main.page"; 

describe('Apply Active filter on page elements', ()=> {
    it('Go to "Things To Do" page', () => {
        toDo.navigateToTheURL('https://simplest-react-todo-app.herokuapp.com/');
    });
    it('click Active filter to check all active items are showing ', ()=>{
        toDo.filterWithActive();
        toDo.getElementCountOfTheList(3);
    })
    it('Click on First element to complete', () =>{
        toDo.getLearnJavascriptElement(1);
    });
    it('Click "Active" filter to get count of the item', ()=>{
        //toDo.filterWithActive();
        toDo.getElementCountOfTheList(2);
    });
    
});