import upgradeAdapter from '../core/upgradeAdapter';

import { AustinComponent } from './austin.component';

export default angular
	.module('peopleApp.austin', [])
	.directive('austinComponent', <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(AustinComponent));
