

//import { contains } from "cypress/types/jquery";

//import cypress from "cypress";

//export class toDoesPage{
class toDosPage {

    navigateToTheURL(url){
        cy.visit(url);
    }
    checkPageHeaderIsPresent(){
        cy.get('h1').contains('Things To Do');
    }



    //--------- Search/Add New text field methods---------
    getAddNewItemElement(){
        return cy.get('.form-control')
        .click();
    }
    
    insertAddNewField(){
       this.getAddNewItemElement()
       .type('Learn Java{enter}');
    }
    checkNewItemIsAddedInTheList(){
        return cy.get(':nth-child(4) > .checkbox > label')
        .should('contain.text','Learn Java');
    }
    checkElementThatDosentExistInTheList(){
        this.getAddNewItemElement()
       .type('av!{enter}');
    }
    insertExistingTextInSearchField(){
        this.getAddNewItemElement()
        .type('Learn{enter}');
     }
    
    
    
    //-------------Item list elements methods------------

    getLearnJavascriptElement(){
        return cy.get(':nth-child(1) > .checkbox > label')
        .click();
    }
    getLebelOfFirstElement(){
        return cy.get(':nth-child(1) > .checkbox > label')
        .should('contain.text','Learn Javascript');
    }
           
    getLearnReactElement(){
        return cy.get(':nth-child(2) > .checkbox > label')
        .click();
    }
    getLebelOfSecondElement(){
        return cy.get(':nth-child(2) > .checkbox > label')
        .should('contain.text', 'Learn React');
    }
    
    getBuildAReactAppelement(){
        return cy.get(':nth-child(3) > .checkbox > label')
        .click();
    }

    getLebelOfThirdElement(){
        return cy.get(':nth-child(3) > .checkbox > label')
        .should('contain.text', 'Build a React App');
    }
    
    //---------------buttom clickable items elements--------------------
    clickPlusButton(){
        return cy.get('.add')
        .click();
    }
    //////////////////////////////////
    checkPlaceHolderText(){
         
        return cy.get('.form-control').invoke('placeholder').should('contain', 'Search')
        //return cy.get('[placeholder="Add New"]')   'attr',
         //.contains('Search');
        //.expect(placeholder).to.be.equal('Search')
        //.should('contain.value','Search');
    }
    /////////////////
    clickSearchButton(){
        return cy.get('.search')
        .click();
    }

    InsertTextInSearchField(text){
        this.getAddNewItemElement()
       .type('{text}{enter}');
    }
    
    //-------------------Filter related methods-----------------------------------------------------

    filterWithAll(){
        return cy.get('.filters > :nth-child(1) > a')
        .click()
    }
    
    filterWithActive(){
        return cy.get(':nth-child(2) > a')
        .click()
    }
    
    filterWithCompleted(){
       return cy.get(':nth-child(3) > a')
       .click()
    }

    //-------------- action elements---------------
    noItemFound(){
        return cy.get('.alert')
        .should('contain.text','There are no items.')
    }
    getElementCountOfTheList(length){
        return cy.get('ul.list-unstyled li div.checkbox')
        .should('have.length', length);
    }
    // getListUlLi(){
    //     //return cy.get('ul.list-unstyled li div.checkbox')
    //     return cy.get('div.checkbox')
    //     .eq(0).click();
    //}
}
const toDo = new toDosPage();
export default toDo;
//export default toDosPage;