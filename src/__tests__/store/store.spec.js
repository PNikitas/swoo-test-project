import { counterReducer } from '../../store';

describe('reducers', () => {
    describe('counter', () => {
        it('* [type=INCREMENT] Should increase count by 1', () => {
            expect(counterReducer({ "count": 1 }, { type: 'INCREMENT' }))
                .toStrictEqual({ "count": 2 });
        });
        it('* [type=DECREMENT] Should decrease count by 1', () => {
            expect(counterReducer({ "count": 2 }, { type: 'DECREMENT' }))
                .toStrictEqual({ "count": 1 });
        });
        it('* [unknown type] Should be equal to previous state', () => {
            expect(counterReducer({ "count": 1 }, { type: 'UNKNOWN' }))
                .toStrictEqual({ "count": 1 });
        });
        it('* [unknown type] Should be equal to previous state', () => {
            expect(counterReducer({ "count": 25 }, { type: 'UNKNOWN' }))
                .toStrictEqual({ "count": 25 });
        });
        it('* [store is undefined] Should return count as 1', () => {
            expect(counterReducer(undefined, { type: 'INCREMENT' }))
                .toStrictEqual({ "count": 1 });
        });
    });
});
