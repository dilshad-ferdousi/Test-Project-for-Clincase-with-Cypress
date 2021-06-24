//Created by : Dilshad Ferdousi

class toDosPage {

    navigateToTheURL(url){
        cy.visit(url);
    }
    checkPageHeaderIsPresent(){
        cy.get('h1').contains('Things To Do');
    }



    //---------------------- Search/Add New text field methods---------
    
    //------select related methods------------
    
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
    
    
    
    //==========================Item list elements methods=======================
    //-------------
    getLearnJavascriptElement(){
        return cy.get(':nth-child(1) > .checkbox > label')
        .click();
    }
    
    getLebelOfFirstElement(){
        return cy.get(':nth-child(1) > .checkbox > label')
        .should('contain.text','Learn Javascript');
    }
    //-----------------------------------------------       
    getLearnReactElement(){
        return cy.get(':nth-child(2) > .checkbox > label')
        .click();
    }
    getLebelOfSecondElement(){
        return cy.get(':nth-child(2) > .checkbox > label')
        .should('contain.text', 'Learn React');
    }
    //----------------------------------------

    getBuildAReactAppelement(){
        return cy.get(':nth-child(3) > .checkbox > label')
        .click();
    }

    getLebelOfThirdElement(){
        return cy.get(':nth-child(3) > .checkbox > label')
        .should('contain.text', 'Build a React App');
    }
    
    //---------------bottom clickable items elements--------------------
    clickPlusButton(){
        return cy.get('.add')
        .click();
    }
    
    checkPlaceHolderTextSearch(){
         
        return cy.get('.form-control')
        .invoke('attr','placeholder')
        .should('contain', 'Search');
    }
    checkPlaceHolderTextAddNew(){
        return cy.get('.form-control')
        .invoke('attr','placeholder')
        .should('contain', 'Add New');
    }
   
    clickSearchButton(){
        return cy.get('.search')
        .click();
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
    
}
const toDo = new toDosPage();
export default toDo;
