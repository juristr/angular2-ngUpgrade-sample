import { PeopleDetailCmp } from './peopleDetail';
import upgradeAdapter from '../core/upgradeAdapter';

export default angular.module('peopleApp.peopleDetail', [
        'peopleApp.core'
    ])
    .directive('ppPeopleDetail', <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(PeopleDetailCmp));