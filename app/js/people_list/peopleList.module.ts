import PeopleListCtrl from './peopleList.component';

export default angular.module('peopleApp.peopleList', [
        'peopleApp.core'
    ])
    .component('ppPeopleList', {
        controller: PeopleListCtrl,
        controllerAs: 'vm',
        templateUrl: 'js/people_list/people-list.html' 
    });