import {
    trigger,
    transition,
    animateChild,
    animate,
    stagger,
    group,
    style,
    state,
    query,
} from '@angular/animations';

export const tokenListViewTransition = trigger('tokenViewAnimation',[
    transition(':enter', [
        style({
            transform: 'translateY(-100%)',
            position: 'absolute',
            opacity: 0,
            width: '100%'

        }),
        animate('200ms 0ms ease', style({
            transform: 'translateY(0%)',
            opacity: 1
        }))
    ]),
    transition(':leave', [
        animate('300ms 0ms ease', style({
            transform: 'translateY(-100%)',
            position: 'absolute',
            width: '100%'
        }))
    ])
])