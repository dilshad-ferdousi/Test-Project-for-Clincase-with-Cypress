import cypress from "cypress";

export class toDoesPage{

    thingsToDoPage_addNew = $(cy.get(".form-control"));
    thingsToDoPage_learnJS = $(cy.get('.completed > .checkbox > label'));
    thingsToDoPage_learnReact = $(cy.get(':nth-child(2) > .checkbox > label'));
    thingsToDoPage_buildAReactApp = $(cy.get('.pending > .checkbox > label'));
    thingsToDoPage_plusButton = $(cy.get('.add'));
    thingsToDoPage_searchButton = $(cy.get('.search'));
    thingsToDoPage_all = $(cy.get('.selected'));
    thingsToDoPage_active =$(cy.get(':nth-child(2) > a'));
    thingsToDoPage_complete = $(cy.get(':nth-child(3) > a'));


    navigateToTheURL(url){
        cy.visit(url);
    }
    Test-Project-for-Clincase-with-Cypress
    addNewItem(){
        cy.get(this.thingsToDoPage_addNew).type('itemName{enter}');
    }
    
    clickLearnJavascript(){
        cy.get(this.thingsToDoPage_learnJS).click();
    }
    
    clickLearnReact(){
        cy.get(this.thingsToDoPage_learnReact).click();
    }
    
    clickBuildAReactApp(){
        cy.get(this.thingsToDoPage_buildAReactApp).click();
    }
    
    clickPlusButton(){
        cy.get(this.thingsToDoPage_plusButton).click();
    }
    
    clickSearchButton(){
        cy.get(this.thingsToDoPage_searchButton).click();
    }
    
    filterWithAll(){
        cy.get(this.thingsToDoPage_all).click()
    }
    
    filterWithActive(){
        cy.get(this.thingsToDoPage_active).click()
    }
    
    filterWithCompleted(){
        cy.get(this.thingsToDoPage_complete).click()
    }
}