// This test file covers following cases:
// 1. Go to the url
// 2. click on the Add New text field
// 3. add a new item 
// 4. check the newly added item is added in the list


import toDo from '../page.elements/main.page';

describe('Test navigate to the page and add New item in the list', () => { 
    
    it('Go to "Things To Do" page', () => {
        toDo.navigateToTheURL('https://simplest-react-todo-app.herokuapp.com/');
        toDo.checkPageHeaderIsPresent();
    });
    it('Add new element "learn Java" using Add New field', () =>{
        toDo.getAddNewItemElement();
        toDo.insertAddNewField(); 
    });
    it('Check the newly added item is there in the list', () =>{
        toDo.checkNewItemIsAddedInTheList();
    })

});