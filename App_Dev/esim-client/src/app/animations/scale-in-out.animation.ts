import {trigger,transition,style,state,animate} from '@angular/animations';
import { transformMenu } from '@angular/material/menu/typings/menu-animations';

export const scaleInOutAnimation =
trigger('scaleInOutAnimation',[
    state('*',style({
        position:'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0)'
    })),
    transition(':enter',[
        style({
            transform:'scale(0.5)',
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }),
        animate('.3s ease-in-out', style({
            transform:'scale(1)',
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }))
    ]),
    transition(':leave',[
        animate('.3s ease-in-out', style({
            transform:'scale(0.5)',
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }))
    ])
]);