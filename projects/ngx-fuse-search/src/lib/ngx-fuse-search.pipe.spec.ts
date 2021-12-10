import { NgxFuseSearchPipe } from "./ngx-fuse-search.pipe";

describe('NgxFuseSearchPipe', () => {
    let pipe: NgxFuseSearchPipe;

    beforeEach(() => {
        pipe = new NgxFuseSearchPipe();
    });

    it('Return the same list if the "list" is invalid', () => {
        expect(pipe.transform(null, 'hello')).toBe(null);
        expect(pipe.transform(undefined, 'hello')).toBe(undefined);
    });

    it('Filter the elements', () => {
        const list = [{ a: 'b' }, { a: 'c' }];
        expect(pipe.transform(list, 'b')).toEqual([{ a: 'b' }]);
    });

    it('Filter the nested object', () => {
        const list = [{ a: 'e' }, { a: { b: 'e', c: { b: 'd' } } }];
        expect(pipe.transform(list, 'd')).toEqual([{ a: { b: 'e', c: { b: 'd' } } }]);
    });

    it('Filter the array of strings', () => {
        const list = ['a', 'b', 'c'];
        expect(pipe.transform(list, 'd')).toEqual([]);
        expect(pipe.transform(list, 'b')).toEqual(['b']);
    });

});