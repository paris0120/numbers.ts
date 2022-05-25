import {Series} from "../lib";

describe('testing index file', () => {
    let series1 = new Series([1, 2, 3, 4, 5, 6, 7])
    let series2 = new Series([3, 4, 5, 6, 7, 8, 9])
    let series3 = new Series([3, 4, null, 6, 7, 8, 9])
    test('+ - * / % ^', () => {
        expect(series1.add(series2).getValue()).toEqual([4,6,8,10,12,14,16]);
        expect(series1.subtract(series2).getValue()).toEqual([-2, -2, -2, -2, -2, -2, -2]);
        expect(series1.multiply(series2).getValue()).toEqual([3, 8 ,15, 24, 35, 48, 63]);
        expect(series1.divide(series2).getValue()).toEqual([1/3, 2/4, 3/5, 4/6, 5/7, 6/8, 7/9]);
        expect(series1.modulo(series2).getValue()).toEqual([1%3, 2%4, 3%5, 4%6, 5%7, 6%8, 7%9]);
        expect(series1.power(2).getValue()).toEqual([1, 4 ,9, 16, 25, 36, 49]);
    });

    test('lag lead', () => {
        expect(series1.lag(2).getValue()).toEqual([null, null, 1, 2, 3, 4, 5]);
        expect(series1.lead(2).getValue()).toEqual([3, 4, 5, 6, 7, null, null]);
        expect(series3.lag(2).getValue()).toEqual([null, null, null, 3, 4, 6, 7]);
        expect(series3.lead(2).getValue()).toEqual([6, 7, null, 8, 9, null, null]);
    });

    test('max min', () => {
        expect(series1.max(series2).getValue()).toEqual([3, 4, 5, 6, 7, 8, 9]);
        expect(series1.min(series2).getValue()).toEqual([1, 2, 3, 4, 5, 6, 7]);
        expect(series1.max(4).getValue()).toEqual([4, 4, 4, 4, 5, 6, 7]);
        expect(series1.min(4).getValue()).toEqual([1, 2, 3, 4, 4, 4, 4]);

    });

    test('fill null', () => {
        expect(series3.fillNull(2).getValue()).toEqual([3, 4, 2, 6, 7, 8, 9]);
        expect(series3.fillNull(series1).getValue()).toEqual([3, 4, 3, 6, 7, 8, 9]);
    });

});