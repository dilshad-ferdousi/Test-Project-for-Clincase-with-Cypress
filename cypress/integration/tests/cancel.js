// This test file covers following cases:
// 1. Go to the url

import toDo from "../page.elements/main.page";

describe('Check "Complete" functionality and Filter is working', () =>{

    it('Go to "Things To Do" page', () => {
        //const getUrl = new toDoesPage();
        toDo.navigateToTheURL('https://simplest-react-todo-app.herokuapp.com/');
    });

});