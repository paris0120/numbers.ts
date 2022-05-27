import {Series} from "../src";

describe('testing index file', () => {
    let series1 = new Series([1, 2, 3, 4, 5, 6, 7])
    let series2 = new Series([3, 4, 5, 6, 7, 8, 9])
    let series3 = new Series([3, 4, null, 6, 7, 8, 9])
    test('+ - * / % ^', () => {
        expect(series1.add(series2).getValue()).toEqual([4,6,8,10,12,14,16]);
        expect(series3.carry().getValue()).toEqual([3,7,null,13,20,28,37]);
        expect(series1.subtract(series2).getValue()).toEqual([-2, -2, -2, -2, -2, -2, -2]);
        expect(series1.distance(series2).getValue()).toEqual([2, 2, 2, 2, 2, 2, 2]);
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

    test("variance and deviation", () => {
        expect(series1.variance(series1.simpleMovingAverage(3), 3).getValue()).toEqual([null, null,  0.6666666666666666,  0.6666666666666666,  0.6666666666666666,  0.6666666666666666,  0.6666666666666666]);
        expect(series1.stdDev(series1.simpleMovingAverage(3), 3).getValue()).toEqual([null, null,  Math.sqrt(0.6666666666666666),  Math.sqrt(0.6666666666666666),  Math.sqrt(0.6666666666666666),  Math.sqrt(0.6666666666666666), Math.sqrt(0.6666666666666666)]);
    });


    test("moving averages", () => {
        expect(series1.simpleMovingAverage(3).getValue()).toEqual([null, null, 2, 3, 4, 5, 6]);
        expect(series1.exponentialMovingAverage(3, 2).getValue()).toEqual([1, 1.5, 2.25, 3.125, 4.0625, 5.03125, 6.015625]);
        expect(series1.weightedSimpleMovingAverage(series2,3).getValue()).toEqual([null, null, 2.1666666666666665,  3.1333333333333333, 4.111111111111111, 5.095238095238095, 6.083333333333333]);
        expect(series1.weightedExponentialMovingAverage(series2,3, 2).getValue()).toEqual([1,
            1.5714285714285714,
            2.411764705882353,
            3.341463414634146,
            4.298969072164948,
            5.266666666666667,
            6.239766081871345]);
    });
    expect(series1.modifiedMovingAverage(3).getValue()).toEqual([1,
        null,
        null,
        2,
        2.6666666666666665,
        3.4444444444444446,
        4.296296296296297,
        5.197530864197531]);
});