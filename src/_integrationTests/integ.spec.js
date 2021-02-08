import moxios from 'moxios';
import { testStore } from '../../utils';
import { fetchPosts } from '../actions';

describe('fetchPosts action', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('Store is updated correctly', () => {
        const expectedState = [{
            title: 'Test title 1',
            body: 'test body'
        },{
            title: 'Test title 2',
            body: 'test body'
        },{
            title: 'Test title 13',
            body: 'test body'
        },{
            title: 'Test title 14',
            body: 'test body'
        }];

        const store = testStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            });
        });

        return store.dispatch(fetchPosts())
            .then(() => {
                const newState = store.getState();
                expect(newState.posts).toBe(expectedState);
            })
    });
});