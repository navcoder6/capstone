import {trigger,transition,style,state,animate} from '@angular/animations';
import { transformMenu } from '@angular/material/menu/typings/menu-animations';

export const slideInAnimation =
trigger('slideInAnimation',[
    state('*',style({
        position:'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    })),
    transition(':enter',[
        style({
            left:'-400px',
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }),
        animate('.5s ease-in-out', style({
            left:0,
            // transition the background opacity to 0.8 to fade it in
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }))
    ])
    // transition(':leave',[
    //     animate('.5s ease-in-out', style({
    //         right:'-800px',
    //         // transition the background opacity to 0.8 to fade it in
    //         backgroundColor: 'rgba(0, 0, 0, 0.8)'
    //     }))
    // ])
]);