import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { App } from './components/app/app'
import {PlanView} from './components/plan-view/plan-view';
import {PlanList} from './components/plan-list/plan-list';
import {PlanNew} from './components/plan-new/plan-new';
import {About} from './components/about/about';
import {MomentDatePipe, DurationPipe, DurationUnitPipe} from './pipes'
import { PlanNode } from './components/plan-node/plan-node';

const appRoutes: Routes = [
    { path: '', redirectTo: 'plans', pathMatch: 'full' },
    { path: 'plans', component: PlanList},
    { path: 'plans/new', component: PlanNew },
    { path: 'plans/:id', component: PlanView },
    { path: 'about', component: About}
];

@NgModule({
    declarations: [
        App,
        PlanList,
        PlanNew,
        PlanView,
        About,
        MomentDatePipe,
        DurationPipe,
        DurationUnitPipe,
        PlanNode
    ],
    imports: [ 
        BrowserModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes),
        FormsModule
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
    bootstrap: [ App ]
})

export class AppModule {}