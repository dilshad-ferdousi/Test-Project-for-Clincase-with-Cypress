// This test file covers following cases:
// 1. Go to the url
// 2. Select the first element to make it complete.
// 3. Click on the Completed button to go to the Completed list.
// 4. check the first item of the list is now showing in the Completed list.

import toDo from "../page.elements/main.page";

describe('Check "Complete" functionality and Filter is working', () =>{

    it('Go to "Things To Do" page and check Page Header is present', () => {
        toDo.navigateToTheURL('https://simplest-react-todo-app.herokuapp.com/');
        toDo.checkPageHeaderIsPresent();
    });
    
    it('Click on First element to complete', () =>{
        toDo.getLearnJavascriptElement();
    });
    it('Click "Complete" Filter to see the completed element is there', ()=>{
        toDo.filterWithCompleted();
    });
    it('Click the "Completed" filter option to check first item is there', () =>{
        toDo.getLebelOfFirstElement();
    });
    it('Deselect the first item and check the item is gone from Completed list', () =>{
        toDo.getLearnJavascriptElement();
        toDo.noItemFound();
    })
});