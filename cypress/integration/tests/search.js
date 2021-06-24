// This test file covers following cases:
// 1. Go to the url
// 2. change the input type from add new to search by clicking at the buttom left options.
// 3. search with an item which exists in the list
// 4. search is working and the item is found.
// 5. since this is a rezex search, search with a text which is exist in multiple times in the list.
// 6. search is working and the item is found.
// 7. search with a text which does not exist in the list.
// 8. search is working and 'No data found' text shows.



import toDo from "../page.elements/main.page";

describe('Apply Search on different elements', ()=>{

    it('Go to "Things To Do" page and check Page Header is present', () => {
        
        toDo.navigateToTheURL('https://simplest-react-todo-app.herokuapp.com/');
        toDo.checkPageHeaderIsPresent();
    });
    
    it('change the input type from Add New to Search by clicking at the buttom left options', () =>{
        toDo.clickSearchButton();
        toDo.checkPlaceHolderTextSearch();
    });
    it('change the input type from Search to Add New by clicking at the buttom left options', () =>{
        toDo.clickPlusButton();
        toDo.checkPlaceHolderTextAddNew();
        toDo.clickSearchButton();
                
    });
    it('search with a text which exists in the list', () =>{
        toDo.insertExistingTextInSearchField();
        toDo.getElementCountOfTheList(2);
    });
   
    it('search with a text which does not exist in the list.', () =>{
        toDo.checkElementThatDosentExistInTheList();
    });

    it('Check "No item found" text shows and clear search text', () =>{
        toDo.noItemFound();
        toDo.getAddNewItemElement().clear();
    });
    it('Check all 3 elements are visible aagain after clearing the previous search', () =>{
        toDo.getElementCountOfTheList(3);
    });
    
});