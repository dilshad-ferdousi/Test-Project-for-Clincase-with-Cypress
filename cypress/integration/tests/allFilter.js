// This test file covers following cases:
// 1. Go to the url
// 2. click Completed filter - result: 'there are no items' text.
// 3. click "All" filter and count the default item in the list which is 3.


import toDo from "../page.elements/main.page";


describe('Apply All filter on page elements', ()=>{

    it('Go to "Things To Do" page and check Page Header is present', () => {
        
        toDo.navigateToTheURL('https://simplest-react-todo-app.herokuapp.com/');
        toDo.checkPageHeaderIsPresent();
    });
    it('Click Completed filter and no Item found', ()=>{
        toDo.filterWithCompleted();
        toDo.noItemFound();
    });
    it('Click to filter "All"', () =>{
        toDo.filterWithAll();
        toDo.getElementCountOfTheList(3);
    });
})