import {Component, OnInit} from '@angular/core';
//import {ROUTER_DIRECTIVES} from '@angular/router';

import {IPlan} from '../../interfaces/iplan';
import {PlanService} from '../../services/plan-service';
import { PlanNew } from '../plan-new/plan-new';
import { PlanView } from '../plan-view/plan-view';

@Component({
    selector: 'plan-list',
    templateUrl: 'app/components/plan-list/plan-list.html',
    providers: [PlanService]
})
export class PlanList {
    plans: Array<IPlan>;
    newPlanName: string;
    newPlanContent: any;
    newPlanId: string;
    openDialog: boolean = false;
    planToDelete: IPlan;

    constructor(private _planService: PlanService) { }

    ngOnInit() {
        this.plans = this._planService.getPlans();
    }

    requestDelete(plan: IPlan) {
        this.openDialog = true;
        this.planToDelete = plan;
    }

    deletePlan(plan: IPlan) {
        this.openDialog = false;
        console.log(this.planToDelete);
        this._planService.deletePlan(this.planToDelete);
        this.plans = this._planService.getPlans();
    }

    cancelDelete() {
        this.openDialog = false;
    }

    deleteAllPlans() {
        this._planService.deleteAllPlans();
    }
}
