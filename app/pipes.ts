import {Pipe, PipeTransform} from '@angular/core';
import moment from 'moment';
import * as _ from 'lodash';

@Pipe({ name: 'momentDate' })
export class MomentDatePipe implements PipeTransform {
    transform(value: string, args: string[]): any {
        return moment(value).format('LLL');
    }
}

@Pipe({ name: 'duration' })
export class DurationPipe implements PipeTransform {
    transform(value: number): string {
        var duration: string = '';

        if (value < 1) {
            duration = '<1';
        } else if (value > 1 && value < 1000) {
            duration = _.round(value, 2).toString();
        } else if (value >= 1000 && value < 60000) {
            duration = _.round(value / 1000, 2).toString();
        } else if (value >= 60000) {
            duration = _.round(value / 60000, 2).toString();
        }
        return duration;
    }
}

@Pipe({ name: 'durationUnit' })
export class DurationUnitPipe implements PipeTransform {
    transform(value: number) {
        var unit: string = '';

        if (value < 1) {
            unit = 'ms';
        } else if (value > 1 && value < 1000) {
            unit = 'ms';
        } else if (value >= 1000 && value < 60000) {
            unit = 's';
        } else if (value >= 60000) {
            unit = 'min';
        }
        return unit;
    }
}
