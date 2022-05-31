"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Series = void 0;
class Series {
    constructor(value) {
        if (value == undefined)
            throw Error("Missing value.");
        this.value = value;
    }
    push(value) {
        this.value.push(value);
        return this;
    }
    getValue() {
        return this.value;
    }
    length() {
        return this.value.length;
    }
    add(value) {
        if (this.value == undefined)
            throw Error("Empty series.");
        if (value == undefined)
            throw Error("Missing value.");
        let output = [];
        if (typeof value == 'number') {
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null)
                    output.push(null);
                else { // @ts-ignore
                    output.push(this.value[i] + value);
                }
            }
        }
        else {
            if (this.value.length != value.length())
                throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the input value has length of " + value.length() + ".");
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null || value.getValue()[i] == null)
                    output.push(null);
                else { // @ts-ignore
                    output.push(this.value[i] + value.getValue()[i]);
                }
            }
        }
        return new Series(output);
    }
    subtract(value) {
        if (this.value == undefined)
            throw Error("Empty series.");
        if (value == undefined)
            throw Error("Missing value.");
        let output = [];
        if (typeof value == 'number') {
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null)
                    output.push(null);
                else { // @ts-ignore
                    output.push(this.value[i] - value);
                }
            }
        }
        else {
            if (this.value.length != value.length())
                throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the input value has length of " + value.length() + ".");
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null || value.getValue()[i] == null)
                    output.push(null);
                else { // @ts-ignore
                    output.push(this.value[i] - value.getValue()[i]);
                }
            }
        }
        return new Series(output);
    }
    distance(value) {
        if (this.value == undefined)
            throw Error("Empty series.");
        if (value == undefined)
            throw Error("Missing value.");
        let output = [];
        if (typeof value == 'number') {
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null)
                    output.push(null);
                else { // @ts-ignore
                    output.push(Math.abs(this.value[i] - value));
                }
            }
        }
        else {
            if (this.value.length != value.length())
                throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the input value has length of " + value.length() + ".");
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null || value.getValue()[i] == null)
                    output.push(null);
                else { // @ts-ignore
                    output.push(Math.abs(this.value[i] - value.getValue()[i]));
                }
            }
        }
        return new Series(output);
    }
    multiply(value) {
        if (this.value == undefined)
            throw Error("Empty series.");
        if (value == undefined)
            throw Error("Missing value.");
        let output = [];
        if (typeof value == 'number') {
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null)
                    output.push(null);
                else { // @ts-ignore
                    output.push(this.value[i] * value);
                }
            }
        }
        else {
            if (this.value.length != value.length())
                throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the input value has length of " + value.length() + ".");
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null || value.getValue()[i] == null)
                    output.push(null);
                else { // @ts-ignore
                    output.push(this.value[i] * value.getValue()[i]);
                }
            }
        }
        return new Series(output);
    }
    divide(value) {
        if (this.value == undefined)
            throw Error("Empty series.");
        if (value == undefined)
            throw Error("Missing value.");
        if (value == 0)
            throw Error("Value cannot be 0.");
        let output = [];
        if (typeof value == 'number') {
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null)
                    output.push(null);
                else { // @ts-ignore
                    output.push(this.value[i] / value);
                }
            }
        }
        else {
            if (this.value.length != value.length())
                throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the input value has length of " + value.length() + ".");
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null || value.getValue()[i] == null || value.getValue()[i] == 0)
                    output.push(null);
                else { // @ts-ignore
                    output.push(this.value[i] / value.getValue()[i]);
                }
            }
        }
        return new Series(output);
    }
    modulo(value) {
        if (this.value == undefined)
            throw Error("Empty series.");
        if (value == undefined)
            throw Error("Missing value.");
        if (value == 0)
            throw Error("Value cannot be 0.");
        let output = [];
        if (typeof value == 'number') {
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null)
                    output.push(null);
                else { // @ts-ignore
                    output.push(this.value[i] % value);
                }
            }
        }
        else {
            if (this.value.length != value.length())
                throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the input value has length of " + value.length() + ".");
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null || value.getValue()[i] == null || value.getValue()[i] == 0)
                    output.push(null);
                else { // @ts-ignore
                    output.push(this.value[i] % value.getValue()[i]);
                }
            }
        }
        return new Series(output);
    }
    power(value) {
        if (this.value == undefined)
            throw Error("Empty series.");
        if (value == undefined)
            throw Error("Missing value.");
        let output = [];
        if (typeof value == 'number') {
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null)
                    output.push(null);
                else { // @ts-ignore
                    output.push(Math.pow(this.value[i], value));
                }
            }
        }
        else {
            if (this.value.length != value.length())
                throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the input value has length of " + value.length() + ".");
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null || value.getValue()[i] == null)
                    output.push(null);
                else { // @ts-ignore
                    output.push(Math.pow(this.value[i], value.getValue()[i]));
                }
            }
        }
        return new Series(output);
    }
    max(value) {
        if (this.value == undefined)
            throw Error("Empty series.");
        if (value == undefined)
            throw Error("Missing value.");
        let output = [];
        if (typeof value == 'number') {
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null)
                    output.push(null);
                else { // @ts-ignore
                    output.push(Math.max(this.value[i], value));
                }
            }
        }
        else {
            if (this.value.length != value.length())
                throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the input value has length of " + value.length() + ".");
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null || value.getValue()[i] == null)
                    output.push(null);
                else { // @ts-ignore
                    output.push(Math.max(this.value[i], value.getValue()[i]));
                }
            }
        }
        return new Series(output);
    }
    min(value) {
        if (this.value == undefined)
            throw Error("Empty series.");
        if (value == undefined)
            throw Error("Missing value.");
        let output = [];
        if (typeof value == 'number') {
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null)
                    output.push(null);
                else { // @ts-ignore
                    output.push(Math.min(this.value[i], value));
                }
            }
        }
        else {
            if (this.value.length != value.length())
                throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the input value has length of " + value.length() + ".");
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null || value.getValue()[i] == null)
                    output.push(null);
                else { // @ts-ignore
                    output.push(Math.min(this.value[i], value.getValue()[i]));
                }
            }
        }
        return new Series(output);
    }
    lead(period) {
        if (this.value == undefined)
            throw Error("Empty series.");
        if (period <= 0 || !Number.isInteger(period))
            throw Error("period must be a positive ");
        let output = [];
        let c = 1;
        let end = this._next(null, 0);
        for (let i = 0; i < period; i++)
            end = this._next(null, end + 1);
        for (let i = 0; i < this.value.length; i++) {
            if (this.value[i] == null || end < 0)
                output.push(null);
            else {
                output.push(this.value[end]);
                end = this._next(null, end + 1);
            }
        }
        return new Series(output);
    }
    lag(period) {
        if (this.value == undefined)
            throw Error("Empty series.");
        if (period <= 0 || !Number.isInteger(period))
            throw Error("period must be a positive ");
        let output = [];
        let c = 0;
        let start = this._next(null, 0);
        for (let i = 0; i < this.value.length; i++) {
            if (this.value[i] == null)
                output.push(null);
            else {
                if (c < period) {
                    c++;
                    output.push(null);
                }
                else {
                    output.push(this.value[start]);
                    start = this._next(null, start + 1);
                }
            }
        }
        return new Series(output);
    }
    fillNull(value) {
        if (this.value == undefined)
            throw Error("Empty series.");
        if (value == undefined)
            throw Error("Missing value.");
        let output = [];
        if (typeof value == 'number')
            this.value.forEach(v => { v == null ? output.push(value) : output.push(v); });
        else
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null)
                    output.push(value.getValue()[i]);
                else
                    output.push(this.value[i]);
            }
        return new Series(output);
    }
    fillNaN(value) {
        if (this.value == undefined)
            throw Error("Empty series.");
        if (value == undefined)
            throw Error("Missing value.");
        let output = [];
        if (typeof value == 'number')
            this.value.forEach(v => { v == NaN ? output.push(value) : output.push(v); });
        else
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == NaN)
                    output.push(value.getValue()[i]);
                else
                    output.push(this.value[i]);
            }
        return new Series(output);
    }
    /*
    the index of next non-null value
     */
    _next(series, index) {
        if (index < 0 || !Number.isInteger(index))
            throw Error("Index must be a non-negative integer.");
        if (series == null)
            while (index < this.value.length) {
                if (this.value[index] == null)
                    index++;
                else
                    return index;
            }
        else
            while (index < this.value.length) {
                if (this.value[index] == null || this._hasNull(series, index))
                    index++;
                else
                    return index;
            }
        return -1;
    }
    /*
    the index of next non-null value
     */
    _last(series, index) {
        if (index < 0 || !Number.isInteger(index))
            throw Error("Index must be a non-negative integer.");
        index--;
        if (series == null)
            while (index >= 0) {
                if (this.value[index] == null)
                    index--;
                else
                    return index;
            }
        else {
            while (index >= 0) {
                if (this.value[index] == null || this._hasNull(series, index))
                    index--;
                else
                    return index;
            }
        }
        return -1;
    }
    _hasNull(series, index) {
        series.forEach(s => { if (s.getValue()[index] == null)
            return true; });
        return false;
    }
    /*
    Rolling statistic
     */
    movingMax(period) {
        if (this.value == undefined)
            throw Error("Empty series.");
        if (period <= 0 || !Number.isInteger(period))
            throw Error("period must be a positive ");
        let output = [];
        let c = 0;
        for (let i = 0; i < this.value.length; i++) {
            if (this.value[i] == null)
                output.push(null);
            else {
                c++;
                if (c < period)
                    output.push(null);
                else {
                    let m = this.value[i];
                    let pos = i;
                    for (let p = 1; p < period; p++) { // @ts-ignore
                        pos = this._last(pos);
                        if (pos < 0)
                            output.push(null);
                        else {
                            // @ts-ignore
                            m = m >= this.value[pos] ? m : this.value[pos];
                            output.push(m);
                        }
                    }
                }
            }
        }
        return new Series(output);
    }
    movingMin(period) {
        if (this.value == undefined)
            throw Error("Empty series.");
        if (period <= 0 || !Number.isInteger(period))
            throw Error("period must be a positive ");
        let output = [];
        let c = 0;
        for (let i = 0; i < this.value.length; i++) {
            if (this.value[i] == null)
                output.push(null);
            else {
                c++;
                if (c < period)
                    output.push(null);
                else {
                    let m = this.value[i];
                    let pos = i;
                    for (let p = 1; p < period; p++) { // @ts-ignore
                        pos = this._last(pos);
                        if (pos < 0)
                            output.push(null);
                        else {
                            // @ts-ignore
                            m = m <= this.value[pos] ? m : this.value[pos];
                            output.push(m);
                        }
                    }
                }
            }
        }
        return new Series(output);
    }
    movingMaxIndex(period) {
        if (this.value == undefined)
            throw Error("Empty series.");
        if (period <= 0 || !Number.isInteger(period))
            throw Error("period must be a positive ");
        let output = [];
        let c = 0;
        for (let i = 0; i < this.value.length; i++) {
            if (this.value[i] == null)
                output.push(null);
            else {
                c++;
                if (c < period)
                    output.push(null);
                else {
                    let m = this.value[i];
                    let index = i;
                    let pos = i;
                    for (let p = 1; p < period; p++) { // @ts-ignore
                        pos = this._last(pos);
                        if (pos < 0)
                            output.push(null);
                        else {
                            // @ts-ignore
                            m = m >= this.value[pos] ? m : this.value[pos], index = pos;
                            output.push(index);
                        }
                    }
                }
            }
        }
        return new Series(output);
    }
    movingMinIndex(period) {
        if (this.value == undefined)
            throw Error("Empty series.");
        if (period <= 0 || !Number.isInteger(period))
            throw Error("period must be a positive ");
        let output = [];
        let c = 0;
        for (let i = 0; i < this.value.length; i++) {
            if (this.value[i] == null)
                output.push(null);
            else {
                c++;
                if (c < period)
                    output.push(null);
                else {
                    let m = this.value[i];
                    let index = i;
                    let pos = i;
                    for (let p = 1; p < period; p++) { // @ts-ignore
                        pos = this._last(pos);
                        if (pos < 0)
                            output.push(null);
                        else {
                            // @ts-ignore
                            m = m <= this.value[pos] ? m : this.value[pos], index = pos;
                            output.push(index);
                        }
                    }
                }
            }
        }
        return new Series(output);
    }
    movingMaxDistance(period) {
        if (this.value == undefined)
            throw Error("Empty series.");
        if (period <= 0 || !Number.isInteger(period))
            throw Error("period must be a positive ");
        let output = [];
        let c = 0;
        for (let i = 0; i < this.value.length; i++) {
            if (this.value[i] == null)
                output.push(null);
            else {
                c++;
                if (c < period)
                    output.push(null);
                else {
                    let m = this.value[i];
                    let index = 0;
                    let pos = i;
                    for (let p = 1; p < period; p++) { // @ts-ignore
                        pos = this._last(pos);
                        if (pos < 0)
                            output.push(null);
                        else {
                            // @ts-ignore
                            m = m > this.value[pos] ? m : this.value[pos], index = p;
                            output.push(index);
                        }
                    }
                }
            }
        }
        return new Series(output);
    }
    movingMinDistance(period) {
        if (this.value == undefined)
            throw Error("Empty series.");
        if (period <= 0 || !Number.isInteger(period))
            throw Error("period must be a positive ");
        let output = [];
        let c = 0;
        for (let i = 0; i < this.value.length; i++) {
            if (this.value[i] == null)
                output.push(null);
            else {
                c++;
                if (c < period)
                    output.push(null);
                else {
                    let m = this.value[i];
                    let index = 0;
                    let pos = i;
                    for (let p = 1; p < period; p++) { // @ts-ignore
                        pos = this._last(pos);
                        if (pos < 0)
                            output.push(null);
                        else {
                            // @ts-ignore
                            m = m < this.value[pos] ? m : this.value[pos], index = p;
                            output.push(index);
                        }
                    }
                }
            }
        }
        return new Series(output);
    }
    simpleMovingAverage(period) {
        if (this.value == undefined)
            throw Error("Empty series.");
        if (period <= 0 || !Number.isInteger(period))
            throw Error("period must be a positive ");
        let sum = 0;
        let start = this._next(null, 0);
        let c = 1;
        let output = [];
        for (let i = 0; i < this.value.length; i++) {
            if (this.value[i] == null)
                output.push(null);
            else {
                // @ts-ignore
                sum += this.value[i];
                if (c >= period) {
                    output.push(sum / period);
                    // @ts-ignore
                    sum -= this.value[start];
                    start = this._next(null, start + 1);
                }
                else {
                    c++;
                    output.push(null);
                }
            }
        }
        return new Series(output);
    }
    exponentialMovingAverage(period, smoothing) {
        if (this.value == undefined)
            throw Error("Empty series.");
        if (period <= 0 || !Number.isInteger(period))
            throw Error("period must be a positive ");
        let sum;
        let factor = smoothing / (1 + period);
        let output = [];
        for (let i = 0; i < this.value.length; i++) {
            if (this.value[i] == null)
                output.push(null);
            else {
                // @ts-ignore
                if (sum == undefined)
                    sum = this.value[i];
                else { // @ts-ignore
                    sum = this.value[i] * factor + sum * (1 - factor);
                }
                output.push(sum);
            }
        }
        return new Series(output);
    }
    modifiedMovingAverage(period) {
        if (this.value == undefined)
            throw Error("Empty series.");
        if (period <= 0 || !Number.isInteger(period))
            throw Error("period must be a positive ");
        let sum = 0;
        let c = 1;
        let output = [];
        for (let i = 0; i < this.value.length; i++) {
            if (this.value[i] == null)
                output.push(null);
            else {
                // @ts-ignore
                sum += this.value[i];
                if (c >= period) {
                    output.push(sum / period);
                    sum -= sum / period;
                }
                else {
                    c++;
                    output.push(null);
                }
            }
        }
        return new Series(output);
    }
    weightedSimpleMovingAverage(weight, period) {
        if (this.value == undefined)
            throw Error("Empty series.");
        if (weight == undefined)
            throw Error("Missing weight.");
        if (period <= 0 || !Number.isInteger(period))
            throw Error("period must be a positive ");
        if (this.value.length != weight.length())
            throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the weight has length of " + weight.length() + ".");
        let sum = 0;
        let wsum = 0;
        let start = this._next([weight], 0);
        let c = 1;
        let output = [];
        for (let i = 0; i < this.value.length; i++) {
            if (this.value[i] == null || weight.getValue()[i] == null)
                output.push(null);
            else {
                // @ts-ignore
                sum += this.value[i] * weight.getValue()[i];
                // @ts-ignore
                wsum += weight.getValue()[i];
                if (c >= period) {
                    if (wsum == 0)
                        output.push(null);
                    else
                        output.push(sum / wsum);
                    // @ts-ignore
                    sum -= this.value[start] * weight.getValue()[start];
                    // @ts-ignore
                    wsum -= weight.getValue()[start];
                    start = this._next([weight], start + 1);
                }
                else {
                    output.push(null);
                    c++;
                }
            }
        }
        return new Series(output);
    }
    weightedExponentialMovingAverage(weight, period, smoothing) {
        if (this.value == undefined)
            throw Error("Empty series.");
        if (weight == undefined)
            throw Error("Missing weight.");
        if (period <= 0 || !Number.isInteger(period))
            throw Error("period must be a positive ");
        if (this.value.length != weight.length())
            throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the weight has length of " + weight.length() + ".");
        let wsum = 0;
        let sum;
        let factor = smoothing / (1 + period);
        let output = [];
        for (let i = 0; i < this.value.length; i++) {
            if (this.value[i] == null || weight.getValue()[i] == null)
                output.push(null);
            else {
                if (sum == undefined) {
                    // @ts-ignore
                    sum = this.value[i] * weight.getValue()[i];
                    // @ts-ignore
                    wsum = weight.getValue()[i];
                }
                else {
                    // @ts-ignore
                    sum = this.value[i] * weight.getValue()[i] * factor + sum * (1 - factor);
                    // @ts-ignore
                    wsum = weight.getValue()[i] * factor + wsum * (1 - factor);
                }
                if (wsum == 0)
                    output.push(null);
                else
                    output.push(sum / wsum);
            }
        }
        return new Series(output);
    }
    weightedModifiedMovingAverage(weight, period) {
        if (this.value == undefined)
            throw Error("Empty series.");
        if (weight == undefined)
            throw Error("Missing weight.");
        if (period <= 0 || !Number.isInteger(period))
            throw Error("period must be a positive ");
        if (this.value.length != weight.length())
            throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the weight has length of " + weight.length() + ".");
        let wsum = 0;
        let sum = 0;
        let c = 1;
        let output = [];
        for (let i = 0; i < this.value.length; i++) {
            if (this.value[i] == null || weight.getValue()[i] == null)
                output.push(null);
            else {
                // @ts-ignore
                sum += this.value[i];
                // @ts-ignore
                wsum += weight.getValue()[i];
                if (c >= period) {
                    if (wsum == 0)
                        output.push(NaN);
                    else
                        output.push(sum / wsum);
                    sum -= sum / period;
                    wsum -= wsum / period;
                }
                else {
                    c++;
                    output.push(null);
                }
            }
        }
        return new Series(output);
    }
    weightedVariance(average, weight, period, smoothing) {
        if (this.value == undefined)
            throw Error("Empty series.");
        if (weight == undefined)
            throw Error("Missing weight.");
        if (period <= 0 || !Number.isInteger(period))
            throw Error("period must be a positive ");
        if (this.value.length != weight.length())
            throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the weight has length of " + weight.length() + ".");
        let sum = 0;
        let start = 0;
        let c = 1;
        let output = [];
        let i = 0;
        while (c < period) {
            if (this.value[i] != null)
                c++;
            i++;
            output.push(null);
        }
        if (typeof average == 'number') {
            for (; i < this.value.length; i++) {
                if (this.value[i] == null || this._hasNull([weight], i))
                    output.push(null);
                else {
                    let p = 0;
                    let pos = i;
                    let sum = 0;
                    let w = 0;
                    while (p < period) {
                        // @ts-ignore
                        sum += Math.pow(this.value[pos] - average, 2) * weight.getValue()[i];
                        // @ts-ignore
                        w += weight.getValue()[i];
                        pos = this._last([weight], pos);
                        p++;
                    }
                    output.push(sum / w);
                }
            }
        }
        else
            for (; i < this.value.length; i++) {
                if (this.value[i] == null || average.getValue()[i] == null)
                    output.push(null);
                else {
                    let p = 0;
                    let pos = i;
                    let sum = 0;
                    while (p < period) {
                        // @ts-ignore
                        sum += Math.pow(this.value[pos] - average.getValue()[i], 2);
                        pos = this._last(null, pos);
                        p++;
                    }
                    output.push(sum / period);
                }
            }
        return new Series(output);
    }
    weightedStdDev(average, weight, period, smoothing) {
        if (this.value == undefined)
            throw Error("Empty series.");
        if (weight == undefined)
            throw Error("Missing weight.");
        if (period <= 0 || !Number.isInteger(period))
            throw Error("period must be a positive ");
        if (this.value.length != weight.length())
            throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the weight has length of " + weight.length() + ".");
        let sum = 0;
        let start = 0;
        let c = 1;
        let output = [];
        let i = 0;
        while (c < period) {
            if (this.value[i] != null)
                c++;
            i++;
            output.push(null);
        }
        if (typeof average == 'number') {
            for (; i < this.value.length; i++) {
                if (this.value[i] == null || this._hasNull([weight], i))
                    output.push(null);
                else {
                    let p = 0;
                    let pos = i;
                    let sum = 0;
                    let w = 0;
                    while (p < period) {
                        // @ts-ignore
                        sum += Math.pow(this.value[pos] - average, 2) * weight.getValue()[i];
                        // @ts-ignore
                        w += weight.getValue()[i];
                        pos = this._last([weight], pos);
                        p++;
                    }
                    if (w == 0)
                        output.push(NaN);
                    else
                        output.push(Math.sqrt(sum / w));
                }
            }
        }
        else
            for (; i < this.value.length; i++) {
                if (this.value[i] == null || average.getValue()[i] == null)
                    output.push(null);
                else {
                    let p = 0;
                    let pos = i;
                    let sum = 0;
                    let w = 0;
                    while (p < period) {
                        // @ts-ignore
                        sum += Math.pow(this.value[pos] - average.getValue()[i], 2) * weight.getValue()[i];
                        // @ts-ignore
                        w += weight.getValue()[i];
                        pos = this._last(null, pos);
                        p++;
                    }
                    if (w == 0)
                        output.push(NaN);
                    else
                        output.push(Math.sqrt(sum / w));
                }
            }
        return new Series(output);
    }
    weightedMeanDev(average, weight, period, smoothing) {
        if (this.value == undefined)
            throw Error("Empty series.");
        if (weight == undefined)
            throw Error("Missing weight.");
        if (period <= 0 || !Number.isInteger(period))
            throw Error("period must be a positive ");
        if (this.value.length != weight.length())
            throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the weight has length of " + weight.length() + ".");
        let sum = 0;
        let start = 0;
        let c = 1;
        let output = [];
        let i = 0;
        while (c < period) {
            if (this.value[i] != null)
                c++;
            i++;
            output.push(null);
        }
        if (typeof average == 'number') {
            for (; i < this.value.length; i++) {
                if (this.value[i] == null || this._hasNull([weight], i))
                    output.push(null);
                else {
                    let p = 0;
                    let pos = i;
                    let sum = 0;
                    let w = 0;
                    while (p < period) {
                        // @ts-ignore
                        sum += Math.abs(this.value[pos] - average) * weight.getValue()[i];
                        // @ts-ignore
                        w += weight.getValue()[i];
                        pos = this._last([weight], pos);
                        p++;
                    }
                    if (w == 0)
                        output.push(NaN);
                    else
                        output.push(sum / w);
                }
            }
        }
        else
            for (; i < this.value.length; i++) {
                if (this.value[i] == null || average.getValue()[i] == null)
                    output.push(null);
                else {
                    let p = 0;
                    let pos = i;
                    let sum = 0;
                    let w = 0;
                    while (p < period) {
                        // @ts-ignore
                        sum += Math.abs(this.value[pos] - average.getValue()[i]) * weight.getValue()[i];
                        // @ts-ignore
                        w += weight.getValue()[i];
                        pos = this._last(null, pos);
                        p++;
                    }
                    if (w == 0)
                        output.push(NaN);
                    else
                        output.push(sum / w);
                }
            }
        return new Series(output);
    }
    stdDev(average, period) {
        if (this.value == undefined)
            throw Error("Empty series.");
        if (period <= 0 || !Number.isInteger(period))
            throw Error("period must be a positive ");
        let sum = 0;
        let start = 0;
        let c = 1;
        let output = [];
        let i = 0;
        while (c < period) {
            if (this.value[i] != null)
                c++;
            i++;
            output.push(null);
        }
        if (typeof average == 'number') {
            for (; i < this.value.length; i++) {
                if (this.value[i] == null)
                    output.push(null);
                else {
                    let p = 0;
                    let pos = i;
                    let sum = 0;
                    while (p < period) {
                        // @ts-ignore
                        sum += Math.pow(this.value[pos] - average, 2);
                        pos = this._last(null, pos);
                        p++;
                    }
                    output.push(Math.sqrt(sum / period));
                }
            }
        }
        else
            for (; i < this.value.length; i++) {
                if (this.value[i] == null || average.getValue()[i] == null)
                    output.push(null);
                else {
                    let p = 0;
                    let pos = i;
                    let sum = 0;
                    while (p < period) {
                        // @ts-ignore
                        sum += Math.pow(this.value[pos] - average.getValue()[i], 2);
                        pos = this._last(null, pos);
                        p++;
                    }
                    output.push(Math.sqrt(sum / period));
                }
            }
        return new Series(output);
    }
    meanDev(average, period) {
        if (this.value == undefined)
            throw Error("Empty series.");
        if (period <= 0 || !Number.isInteger(period))
            throw Error("period must be a positive ");
        let sum = 0;
        let start = 0;
        let c = 1;
        let output = [];
        let i = 0;
        while (c < period) {
            if (this.value[i] != null)
                c++;
            i++;
            output.push(null);
        }
        if (typeof average == 'number') {
            for (; i < this.value.length; i++) {
                if (this.value[i] == null)
                    output.push(null);
                else {
                    let p = 0;
                    let pos = i;
                    let sum = 0;
                    while (p < period) {
                        // @ts-ignore
                        sum += Math.abs(this.value[pos] - average);
                        pos = this._last(null, pos);
                        p++;
                    }
                    output.push(sum / period);
                }
            }
        }
        else
            for (; i < this.value.length; i++) {
                if (this.value[i] == null || average.getValue()[i] == null)
                    output.push(null);
                else {
                    let p = 0;
                    let pos = i;
                    let sum = 0;
                    while (p < period) {
                        // @ts-ignore
                        sum += Math.abs(this.value[pos] - average.getValue()[i]);
                        pos = this._last(null, pos);
                        p++;
                    }
                    output.push(sum / period);
                }
            }
        return new Series(output);
    }
    variance(average, period) {
        if (this.value == undefined)
            throw Error("Empty series.");
        if (period <= 0 || !Number.isInteger(period))
            throw Error("period must be a positive ");
        let sum = 0;
        let start = 0;
        let c = 1;
        let output = [];
        let i = 0;
        while (c < period) {
            if (this.value[i] != null)
                c++;
            i++;
            output.push(null);
        }
        if (typeof average == 'number') {
            for (; i < this.value.length; i++) {
                if (this.value[i] == null)
                    output.push(null);
                else {
                    let p = 0;
                    let pos = i;
                    let sum = 0;
                    while (p < period) {
                        // @ts-ignore
                        sum += Math.pow(this.value[pos] - average, 2);
                        pos = this._last(null, pos);
                        p++;
                    }
                    output.push(sum / period);
                }
            }
        }
        else
            for (; i < this.value.length; i++) {
                if (this.value[i] == null || average.getValue()[i] == null)
                    output.push(null);
                else {
                    let p = 0;
                    let pos = i;
                    let sum = 0;
                    while (p < period) {
                        // @ts-ignore
                        sum += Math.pow(this.value[pos] - average.getValue()[i], 2);
                        pos = this._last(null, pos);
                        p++;
                    }
                    output.push(sum / period);
                }
            }
        return new Series(output);
    }
    absolute() {
        if (this.value == undefined)
            throw Error("Empty series.");
        let output = [];
        this.value.forEach(v => { v == null ? output.push(null) : output.push(Math.abs(v)); });
        return new Series(output);
    }
    /*
    Conditions
     */
    greaterThan(value) {
        if (this.value == undefined)
            throw Error("Empty series.");
        if (value == undefined)
            throw Error("Missing value.");
        let output = [];
        if (typeof value == 'number') {
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null)
                    output.push(null);
                else { // @ts-ignore
                    output.push(this.value[i] > value ? 1 : 0);
                }
            }
        }
        else {
            if (this.value.length != value.length())
                throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the input value has length of " + value.length() + ".");
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null || value.getValue()[i] == null)
                    output.push(null);
                else { // @ts-ignore
                    output.push(this.value[i] > value.getValue()[i] ? 1 : 0);
                }
            }
        }
        return new Series(output);
    }
    greaterEqual(value) {
        if (this.value == undefined)
            throw Error("Empty series.");
        if (value == undefined)
            throw Error("Missing value.");
        let output = [];
        if (typeof value == 'number') {
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null)
                    output.push(null);
                else { // @ts-ignore
                    output.push(this.value[i] >= value ? 1 : 0);
                }
            }
        }
        else {
            if (this.value.length != value.length())
                throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the input value has length of " + value.length() + ".");
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null || value.getValue()[i] == null)
                    output.push(null);
                else { // @ts-ignore
                    output.push(this.value[i] >= value.getValue()[i] ? 1 : 0);
                }
            }
        }
        return new Series(output);
    }
    lessThan(value) {
        if (this.value == undefined)
            throw Error("Empty series.");
        if (value == undefined)
            throw Error("Missing value.");
        let output = [];
        if (typeof value == 'number') {
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null)
                    output.push(null);
                else { // @ts-ignore
                    output.push(this.value[i] < value ? 1 : 0);
                }
            }
        }
        else {
            if (this.value.length != value.length())
                throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the input value has length of " + value.length() + ".");
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null || value.getValue()[i] == null)
                    output.push(null);
                else { // @ts-ignore
                    output.push(this.value[i] < value.getValue()[i] ? 1 : 0);
                }
            }
        }
        return new Series(output);
    }
    lessEqual(value) {
        if (this.value == undefined)
            throw Error("Empty series.");
        if (value == undefined)
            throw Error("Missing value.");
        let output = [];
        if (typeof value == 'number') {
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null)
                    output.push(null);
                else { // @ts-ignore
                    output.push(this.value[i] <= value ? 1 : 0);
                }
            }
        }
        else {
            if (this.value.length != value.length())
                throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the input value has length of " + value.length() + ".");
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null || value.getValue()[i] == null)
                    output.push(null);
                else { // @ts-ignore
                    output.push(this.value[i] <= value.getValue()[i] ? 1 : 0);
                }
            }
        }
        return new Series(output);
    }
    and(value) {
        if (this.value == undefined)
            throw Error("Empty series.");
        if (value == undefined)
            throw Error("Missing value.");
        let output = [];
        if (this.value.length != value.length())
            throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the input value has length of " + value.length() + ".");
        for (let i = 0; i < this.value.length; i++) {
            if (this.value[i] == null || value.getValue()[i] == null)
                output.push(null);
            else {
                output.push(this.value[i] != 0 && value.getValue()[i] != 0 ? 1 : 0);
            }
        }
        return new Series(output);
    }
    or(value) {
        if (this.value == undefined)
            throw Error("Empty series.");
        if (value == undefined)
            throw Error("Missing value.");
        let output = [];
        if (this.value.length != value.length())
            throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the input value has length of " + value.length() + ".");
        for (let i = 0; i < this.value.length; i++) {
            if (this.value[i] == null || value.getValue()[i] == null)
                output.push(null);
            else {
                output.push(this.value[i] != 0 || value.getValue()[i] != 0 ? 1 : 0);
            }
        }
        return new Series(output);
    }
    nor(value) {
        if (this.value == undefined)
            throw Error("Empty series.");
        if (value == undefined)
            throw Error("Missing value.");
        let output = [];
        if (this.value.length != value.length())
            throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the input value has length of " + value.length() + ".");
        for (let i = 0; i < this.value.length; i++) {
            if (this.value[i] == null || value.getValue()[i] == null)
                output.push(null);
            else {
                output.push((this.value[i] != 0 && value.getValue()[i] == 0) || (this.value[i] == 0 && value.getValue()[i] != 0) ? 1 : 0);
            }
        }
        return new Series(output);
    }
    not() {
        if (this.value == undefined)
            throw Error("Empty series.");
        let output = [];
        let count = 0;
        for (let i = 0; i < this.value.length; i++) {
            if (this.value[i] == null)
                output.push(null);
            else
                output.push(this.value[i] == 0 ? 1 : 0);
        }
        return new Series(output);
    }
    /**
     * count the number of continuous non-zero values.
     */
    count() {
        if (this.value == undefined)
            throw Error("Empty series.");
        let output = [];
        let count = 0;
        for (let i = 0; i < this.value.length; i++) {
            if (this.value[i] == null)
                output.push(null);
            else {
                if (this.value[i] == 0)
                    count = 0;
                else
                    count++;
                output.push(count);
            }
        }
        return new Series(output);
    }
    carry() {
        if (this.value == undefined)
            throw Error("Empty series.");
        let output = [];
        let sum = 0;
        for (let i = 0; i < this.value.length; i++) {
            if (this.value[i] == null)
                output.push(null);
            else {
                // @ts-ignore
                sum += this.value[i];
                output.push(sum);
            }
        }
        return new Series(output);
    }
}
exports.Series = Series;
