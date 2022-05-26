export declare class Series {
    private value;
    constructor(value: (number | null)[] | undefined);
    push(value: number | null): Series;
    getValue(): (number | null)[];
    length(): number;
    add(value: Series | undefined | number): Series;
    subtract(value: Series | undefined | number): Series;
    distance(value: Series | undefined | number): Series;
    multiply(value: Series | undefined | number): Series;
    divide(value: Series | undefined | number): Series;
    modulo(value: Series | undefined | number): Series;
    power(value: Series | undefined | number): Series;
    max(value: Series | undefined | number): Series;
    min(value: Series | undefined | number): Series;
    lead(period: number): Series;
    lag(period: number): Series;
    fillNull(value: Series | number | undefined): Series;
    private _next;
    private _last;
    private _hasNull;
    movingMax(period: number): Series;
    movingMin(period: number): Series;
    movingMaxIndex(period: number): Series;
    movingMinIndex(period: number): Series;
    simpleMovingAverage(period: number): Series;
    exponentialMovingAverage(period: number, smoothing: number): Series;
    modifiedMovingAverage(period: number): Series;
    weightedSimpleMovingAverage(weight: Series | undefined, period: number): Series;
    weightedExponentialMovingAverage(weight: Series | undefined, period: number, smoothing: number): Series;
    weightedModifiedMovingAverage(weight: Series | undefined, period: number): Series;
    weightedVariance(average: Series | number, weight: Series, period: number, smoothing: number): Series;
    weightedStdDev(average: Series | number, weight: Series, period: number, smoothing: number): Series;
    stdDev(average: Series | number, period: number): Series;
    variance(average: Series | number, period: number): Series;
    absolute(): Series;
    greaterThan(value: Series | undefined | number): Series;
    greaterEqual(value: Series | undefined | number): Series;
    lessThan(value: Series | undefined | number): Series;
    lessEqual(value: Series | undefined | number): Series;
    and(value: Series | undefined): Series;
    or(value: Series | undefined): Series;
    nor(value: Series | undefined): Series;
    not(): Series;
    /**
     * count the number of continuous non-zero values.
     */
    count(): Series;
    carry(): Series;
}
