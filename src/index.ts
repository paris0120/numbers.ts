export class Series {
    private value: (number | null)[];

    constructor(value: (number | null)[] | undefined) {
        if (value == undefined) throw Error("Missing value.");
        this.value = value;
    }
    public push(value: number | null): Series {
        this.value.push(value);
        return this;
    }

    public getValue(): (number | null)[] {
        return this.value;
    }

    public length(): number{
        return this.value.length;
    }

    public add(value: Series | undefined | number):Series {
        if (this.value == undefined) throw Error("Empty series.");
        if (value == undefined) throw Error("Missing value.");
        let output: (number | null)[] = [];
        if (typeof value == 'number') {
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null) output.push(null);
                else { // @ts-ignore
                    output.push(this.value[i] + value);
                }
            }
        } else {
            if (this.value.length != value.length()) throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the input value has length of " + value.length() + ".");
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null || value.getValue()[i] == null) output.push(null);
                else { // @ts-ignore
                    output.push(this.value[i] + value.getValue()[i]);
                }
            }
        }
        return new Series(output);
    }

    public subtract(value: Series | undefined | number):Series {
        if (this.value == undefined) throw Error("Empty series.");
        if (value == undefined) throw Error("Missing value.");
        let output: (number | null)[] = [];
        if (typeof value == 'number') {
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null) output.push(null);
                else { // @ts-ignore
                    output.push(this.value[i] - value);
                }
            }
        } else {
            if (this.value.length != value.length()) throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the input value has length of " + value.length() + ".");
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null || value.getValue()[i] == null) output.push(null);
                else { // @ts-ignore
                    output.push(this.value[i] - value.getValue()[i]);
                }
            }
        }
        return new Series(output);
    }

    public distance(value: Series | undefined | number):Series {
        if (this.value == undefined) throw Error("Empty series.");
        if (value == undefined) throw Error("Missing value.");
        let output: (number | null)[] = [];
        if (typeof value == 'number') {
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null) output.push(null);
                else { // @ts-ignore
                    output.push(Math.abs(this.value[i] - value));
                }
            }
        } else {
            if (this.value.length != value.length()) throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the input value has length of " + value.length() + ".");
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null || value.getValue()[i] == null) output.push(null);
                else { // @ts-ignore
                    output.push(Math.abs(this.value[i] - value.getValue()[i]));
                }
            }
        }
        return new Series(output);
    }

    public multiply(value: Series | undefined | number):Series {
        if (this.value == undefined) throw Error("Empty series.");
        if (value == undefined) throw Error("Missing value.");
        let output: (number | null)[] = [];
        if (typeof value == 'number') {
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null) output.push(null);
                else { // @ts-ignore
                    output.push(this.value[i] * value);
                }
            }
        } else {
            if (this.value.length != value.length()) throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the input value has length of " + value.length() + ".");
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null || value.getValue()[i] == null) output.push(null);
                else { // @ts-ignore
                    output.push(this.value[i] * value.getValue()[i]);
                }
            }
        }
        return new Series(output);
    }

    public divide(value: Series | undefined | number):Series {
        if (this.value == undefined) throw Error("Empty series.");
        if (value == undefined) throw Error("Missing value.");
        if (value == 0) throw Error("Value cannot be 0.");
        let output: (number | null)[] = [];
        if (typeof value == 'number') {
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null) output.push(null);
                else { // @ts-ignore
                    output.push(this.value[i] / value);
                }
            }
        } else {
            if (this.value.length != value.length()) throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the input value has length of " + value.length() + ".");
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null || value.getValue()[i] == null || value.getValue()[i] == 0) output.push(null);
                else { // @ts-ignore
                    output.push(this.value[i] / value.getValue()[i]);
                }
            }
        }
        return new Series(output);
    }

    public modulo(value: Series | undefined | number):Series {
        if (this.value == undefined) throw Error("Empty series.");
        if (value == undefined) throw Error("Missing value.");
        if (value == 0) throw Error("Value cannot be 0.");
        let output: (number | null)[] = [];
        if (typeof value == 'number') {
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null) output.push(null);
                else { // @ts-ignore
                    output.push(this.value[i] % value);
                }
            }
        } else {
            if (this.value.length != value.length()) throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the input value has length of " + value.length() + ".");
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null || value.getValue()[i] == null || value.getValue()[i] == 0) output.push(null);
                else { // @ts-ignore
                    output.push(this.value[i] % value.getValue()[i]);
                }
            }
        }
        return new Series(output);
    }

    public power(value: Series | undefined | number):Series {
        if (this.value == undefined) throw Error("Empty series.");
        if (value == undefined) throw Error("Missing value.");
        let output: (number | null)[] = [];
        if (typeof value == 'number') {
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null) output.push(null);
                else { // @ts-ignore
                    output.push(Math.pow(this.value[i], value));
                }
            }
        } else {
            if (this.value.length != value.length()) throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the input value has length of " + value.length() + ".");
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null || value.getValue()[i] == null) output.push(null);
                else { // @ts-ignore
                    output.push(Math.pow(this.value[i], value.getValue()[i]));
                }
            }
        }
        return new Series(output);
    }

    public max(value: Series | undefined | number):Series {
        if (this.value == undefined) throw Error("Empty series.");
        if (value == undefined) throw Error("Missing value.");
        let output: (number | null)[] = [];
        if (typeof value == 'number') {
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null) output.push(null);
                else { // @ts-ignore
                    output.push(Math.max(this.value[i], value));
                }
            }
        } else {
            if (this.value.length != value.length()) throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the input value has length of " + value.length() + ".");
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null || value.getValue()[i] == null) output.push(null);
                else { // @ts-ignore
                    output.push(Math.max(this.value[i], value.getValue()[i]));
                }
            }
        }
        return new Series(output);
    }

    public min(value: Series | undefined | number):Series {
        if (this.value == undefined) throw Error("Empty series.");
        if (value == undefined) throw Error("Missing value.");
        let output: (number | null)[] = [];
        if (typeof value == 'number') {
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null) output.push(null);
                else { // @ts-ignore
                    output.push(Math.min(this.value[i], value));
                }
            }
        } else {
            if (this.value.length != value.length()) throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the input value has length of " + value.length() + ".");
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null || value.getValue()[i] == null) output.push(null);
                else { // @ts-ignore
                    output.push(Math.min(this.value[i], value.getValue()[i]));
                }
            }
        }
        return new Series(output);
    }

    public lead(period: number):Series {
        if (this.value == undefined) throw Error("Empty series.");
        if (period <= 0 || !Number.isInteger(period)) throw Error("period must be a positive ");
        let output:(number|null)[] = [];
        let c = 1;
        let end:number = this.value[0] == null?this._next(null, 0):0;
        for(let i = 0; i < period; i++) end = this._next(null, end);
        for(let i = 0;i<this.value.length; i++) {
            if(this.value[i] == null || end<0) output.push(null);
            else {
                output.push(this.value[end]);
                end = this._next(null, end);
            }
        }

        return new Series(output);
    }

    public lag(period: number):Series {
        if (this.value == undefined) throw Error("Empty series.");
        if (period <= 0 || !Number.isInteger(period)) throw Error("period must be a positive ");
        let output:(number|null)[] = [];
        let c = 0;
        let start:number = this.value[0] == null?this._next(null, 0):0;
        for(let i = 0;i<this.value.length; i++) {
            if(this.value[i] == null) output.push(null);
            else {
                if(c<period) {
                    c++;
                    output.push(null);
                }
                else {
                    output.push(this.value[start]);
                    start = this._next(null, start);
                }
            }
        }
        return new Series(output);
    }

    public fillNull(value: Series | number | undefined): Series {
        if (this.value == undefined) throw Error("Empty series.");
        if (value == undefined) throw Error("Missing value.");
        let output:(number|null)[] = [];
        if(typeof value == 'number') this.value.forEach(v=>{v==null?output.push(value):output.push(v)})
        else for(let i = 0;i<this.value.length;i++) {
            if(this.value[i] == null) output.push(value.getValue()[i])
            else output.push(this.value[i]);
        }
        return new Series(output);
    }


    /*
    the index of next non-null value
     */
    private _next(series: Series[]|null, index: number): number {
        if (index < 0 || !Number.isInteger(index)) throw Error("Index must be a non-negative integer.");
        index++;
        if(series==null)
            while (index<this.value.length) {
                if(this.value[index] == null) index++;
                else return index;
            }
        else
            while (index<this.value.length) {
                if(this.value[index] == null || this._hasNull(series, index)) index++;
                else return index;
            }
        return -1;
    }

    /*
    the index of next non-null value
     */
    private _last(series: Series[]|null, index: number): number {
        if (index < 0 || !Number.isInteger(index)) throw Error("Index must be a non-negative integer.");
        index--;
        if(series== null)
            while (index>=0) {
                if(this.value[index] == null) index--;
                else return index;
            }
        else {
            while (index>=0) {
                if(this.value[index] == null || this._hasNull(series, index) ) index--;
                else return index;
            }
        }
        return -1;
    }

    private _hasNull(series: Series[], index: number): boolean {
        series.forEach(s=>{if(s.getValue()[index]==null) return true});
        return false;
    }

    /*
    Rolling statistic
     */

    public movingMax(period: number):Series {
        if (this.value == undefined) throw Error("Empty series.");
        if (period <= 0 || !Number.isInteger(period)) throw Error("period must be a positive ");
        let output:(number|null)[] = [];
        let c = 0;
        for(let i = 0;i<this.value.length; i++) {
            if(this.value[i] == null) output.push(null);
            else {
                c++;
                if(c<period) output.push(null);
                else {
                    let m = this.value[i];
                    let pos = i;
                    for(let p = 1; p < period; p++) { // @ts-ignore
                        pos = this._last(pos);
                        if(pos<0) output.push(null)
                        else {
                            // @ts-ignore
                            m = m>=this.value[pos]?m:this.value[pos];
                            output.push(m);
                        }
                    }
                }
            }
        }

        return new Series(output);
    }

    public movingMin(period: number):Series {
        if (this.value == undefined) throw Error("Empty series.");
        if (period <= 0 || !Number.isInteger(period)) throw Error("period must be a positive ");
        let output:(number|null)[] = [];
        let c = 0;
        for(let i = 0;i<this.value.length; i++) {
            if(this.value[i] == null) output.push(null);
            else {
                c++;
                if(c<period) output.push(null);
                else {
                    let m = this.value[i];
                    let pos = i;
                    for(let p = 1; p < period; p++) { // @ts-ignore
                        pos = this._last(pos);
                        if(pos<0) output.push(null)
                        else {
                            // @ts-ignore
                            m = m<=this.value[pos]?m:this.value[pos];
                            output.push(m);
                        }
                    }
                }
            }
        }

        return new Series(output);
    }

    public simpleMovingAverage(period: number):Series {
        if (this.value == undefined) throw Error("Empty series.");
        if (period <= 0 || !Number.isInteger(period)) throw Error("period must be a positive ");

        let sum = 0;
        let start = 0;
        let c = 1;
        let output: (number | null)[] = [];
        for (let i = 0; i < this.value.length; i++) {
            if (this.value[i] == null) output.push(null);
            else {
                // @ts-ignore
                sum += this.value[i];
                if (c >= period) {
                    output.push(sum / period);
                    if (this.value[start] == null) {
                        start = this._next(null, start);
                    }
                    // @ts-ignore
                    sum -= this.value[start];
                    start++;
                } else {
                    c++;
                    output.push(null);
                }
            }
        }
        return new Series(output);
    }

    public exponentialMovingAverage(period: number, smoothing:number):Series {
        if (this.value == undefined) throw Error("Empty series.");
        if (period <= 0 || !Number.isInteger(period)) throw Error("period must be a positive ");

        let sum = 0;
        let factor = smoothing / (1 + period);
        let output: (number | null)[] = [];
        for (let i = 0; i < this.value.length; i++) {
            if (this.value[i] == null) output.push(null)
            else {
                // @ts-ignore
                sum = this.value[i] * factor + sum * (1 - factor);
                output.push(sum);
            }
        }
        return new Series(output);
    }

    public modifiedMovingAverage(period: number):Series {
        if (this.value == undefined) throw Error("Empty series.");
        if (period <= 0 || !Number.isInteger(period)) throw Error("period must be a positive ");
        let sum = 0;
        let c = 1;
        let output: (number | null)[] = [];
        for (let i = 0; i < this.value.length; i++) {
            if (this.value[i] == null) output.push(null);
            else {
                // @ts-ignore
                sum += this.value[i];
                if (c >= period) {
                    output.push(sum/period);
                    sum -= sum / period;

                } else {
                    c++;
                    output.push(null);
                }
            }
        }
        return new Series(output);
    }

    public weightedSimpleMovingAverage(weight: Series | undefined, period: number):Series {
        if (this.value == undefined) throw Error("Empty series.");
        if (weight == undefined) throw Error("Missing weight.");
        if (period <= 0 || !Number.isInteger(period)) throw Error("period must be a positive ");
        if (this.value.length != weight.length()) throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the weight has length of " + weight.length() + ".");
        let sum = 0;
        let wsum = 0;
        let start = 0;
        let c = 1;
        let output: (number | null)[] = [];
        for (let i = 0; i < this.value.length; i++) {
            if (this.value[i] == null || weight.getValue()[i] == null) output.push(null);
            else {
                // @ts-ignore
                sum += this.value[i] * weight.getValue()[i];
                // @ts-ignore
                wsum += weight.getValue()[i];
                if (c >= period) {
                    output.push(wsum / sum);
                    while (this.value[start] == null || weight.getValue()[start] == null) {
                        start++;
                    }
                    // @ts-ignore
                    sum -= this.value[start] * weight[start];
                    ;
                    // @ts-ignore
                    wsum -= weight[start];
                    start++;
                } else {
                    output.push(null);
                    c++;
                }
            }
        }
        return new Series(output);
    }

    public weightedExponentialMovingAverage(weight: Series | undefined,period: number, smoothing:number):Series {
        if (this.value == undefined) throw Error("Empty series.");
        if (weight == undefined) throw Error("Missing weight.");
        if (period <= 0 || !Number.isInteger(period)) throw Error("period must be a positive ");
        if (this.value.length != weight.length()) throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the weight has length of " + weight.length() + ".");

        let wsum = 0;
        let sum = 0;
        let factor = smoothing / (1 + period);
        let output: (number | null)[] = [];
        for (let i = 0; i < this.value.length; i++) {
            if (this.value[i] == null || weight.getValue()[i] == null) output.push(null)
            else {
                // @ts-ignore
                sum = this.value[i] * weight.getValue()[i] * factor + sum * (1 - factor);
                // @ts-ignore
                wsum = weight.getValue()[i] * factor + wsum * (1 - factor);
                if(wsum== 0) output.push(null);
                else output.push(sum/wsum);
            }
        }
        return new Series(output);
    }

    public weightedModifiedMovingAverage(weight: Series | undefined,period: number):Series {
        if (this.value == undefined) throw Error("Empty series.");
        if (weight == undefined) throw Error("Missing weight.");
        if (period <= 0 || !Number.isInteger(period)) throw Error("period must be a positive ");
        if (this.value.length != weight.length()) throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the weight has length of " + weight.length() + ".");

        let wsum = 0;
        let sum = 0;
        let c = 1;
        let output: (number | null)[] = [];
        for (let i = 0; i < this.value.length; i++) {
            if (this.value[i] == null || weight.getValue()[i] == null) output.push(null);
            else {
                // @ts-ignore
                sum += this.value[i];
                // @ts-ignore
                wsum += weight.getValue()[i];
                if (c >= period) {
                    if(wsum==0) output.push(null);
                    else output.push(sum/wsum);
                    sum -= sum / period;
                    wsum -= wsum / period;
                } else {
                    c++;
                    output.push(null);
                }
            }
        }
        return new Series(output);
    }

    public weightedVariance(average: Series|number, weight: Series, period: number, smoothing:number):Series {
        if (this.value == undefined) throw Error("Empty series.");
        if (weight == undefined) throw Error("Missing weight.");
        if (period <= 0 || !Number.isInteger(period)) throw Error("period must be a positive ");
        if (this.value.length != weight.length()) throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the weight has length of " + weight.length() + ".");


        let sum = 0;
        let start = 0;
        let c = 1;
        let output: (number | null)[] = [];
        let i = 0;
        while(c<period) {
            if(this.value[i] !=null) c++;
            i++;
            output.push(null);
        }
        if(typeof average == 'number') {
            for (; i < this.value.length; i++) {
                if(this.value[i] ==null || this._hasNull([weight], i)) output.push(null);
                else {
                    let p = 0;
                    let pos = i;
                    let sum = 0;
                    let w = 0;
                    while (p<period) {
                        // @ts-ignore
                        sum+=Math.pow(this.value[pos]-average, 2)*weight.getValue()[i];
                        // @ts-ignore
                        w+= weight.getValue()[i];
                        pos = this._last([weight], pos);
                        p++;
                    }
                    output.push(sum/w);
                }
            }
        }
        else for (; i < this.value.length; i++) {
            if(this.value[i] ==null || average.getValue()[i]==null) output.push(null);
            else {
                let p = 0;
                let pos = i;
                let sum = 0;
                while (p<period) {
                    // @ts-ignore
                    sum+=Math.pow(this.value[pos]-average.getValue[i], 2);
                    pos = this._last(null, pos);
                    p++;
                }
                output.push(sum/period);
            }
        }
        return new Series(output);
    }

    public weightedStdDev(average: Series|number, weight: Series, period: number, smoothing:number):Series {
        if (this.value == undefined) throw Error("Empty series.");
        if (weight == undefined) throw Error("Missing weight.");
        if (period <= 0 || !Number.isInteger(period)) throw Error("period must be a positive ");
        if (this.value.length != weight.length()) throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the weight has length of " + weight.length() + ".");


        let sum = 0;
        let start = 0;
        let c = 1;
        let output: (number | null)[] = [];
        let i = 0;
        while(c<period) {
            if(this.value[i] !=null) c++;
            i++;
            output.push(null);
        }
        if(typeof average == 'number') {
            for (; i < this.value.length; i++) {
                if(this.value[i] ==null || this._hasNull([weight], i)) output.push(null);
                else {
                    let p = 0;
                    let pos = i;
                    let sum = 0;
                    let w = 0;
                    while (p<period) {
                        // @ts-ignore
                        sum+=Math.pow(this.value[pos]-average, 2)*weight.getValue()[i];
                        // @ts-ignore
                        w+= weight.getValue()[i];
                        pos = this._last([weight], pos);
                        p++;
                    }
                    output.push(Math.sqrt(sum/w));
                }
            }
        }
        else for (; i < this.value.length; i++) {
            if(this.value[i] ==null || average.getValue()[i]==null) output.push(null);
            else {
                let p = 0;
                let pos = i;
                let sum = 0;
                while (p<period) {
                    // @ts-ignore
                    sum+=Math.pow(this.value[pos]-average.getValue[i], 2);
                    pos = this._last(null, pos);
                    p++;
                }
                output.push(sum/period);
            }
        }
        return new Series(output);
    }

    public stdDev(average: Series|number, period: number, smoothing:number):Series {
        if (this.value == undefined) throw Error("Empty series.");
        if (period <= 0 || !Number.isInteger(period)) throw Error("period must be a positive ");

        let sum = 0;
        let start = 0;
        let c = 1;
        let output: (number | null)[] = [];
        let i = 0;
        while(c<period) {
            if(this.value[i] !=null) c++;
            i++;
            output.push(null);
        }
        if(typeof average == 'number') {
            for (; i < this.value.length; i++) {
                if(this.value[i] ==null) output.push(null);
                else {
                    let p = 0;
                    let pos = i;
                    let sum = 0;
                    while (p<period) {
                        // @ts-ignore
                        sum+=Math.pow(this.value[pos]-average, 2);
                        pos = this._last(null, pos);
                        p++;
                    }
                    output.push(Math.sqrt(sum/period));
                }
            }
        }
        else for (; i < this.value.length; i++) {
            if(this.value[i] ==null || average.getValue()[i]==null) output.push(null);
            else {
                let p = 0;
                let pos = i;
                let sum = 0;
                while (p<period) {
                    // @ts-ignore
                    sum+=Math.pow(this.value[pos]-average.getValue[i], 2);
                    pos = this._last(null, pos);
                    p++;
                }
                output.push(sum/period);
            }
        }
        return new Series(output);
    }

    public variance(average: Series|number, period: number, smoothing:number):Series {
        if (this.value == undefined) throw Error("Empty series.");
        if (period <= 0 || !Number.isInteger(period)) throw Error("period must be a positive ");

        let sum = 0;
        let start = 0;
        let c = 1;
        let output: (number | null)[] = [];
        let i = 0;
        while(c<period) {
            if(this.value[i] !=null) c++;
            i++;
            output.push(null);
        }
        if(typeof average == 'number') {
            for (; i < this.value.length; i++) {
                if(this.value[i] ==null) output.push(null);
                else {
                    let p = 0;
                    let pos = i;
                    let sum = 0;
                    while (p<period) {
                        // @ts-ignore
                        sum+=Math.pow(this.value[pos]-average, 2);
                        pos = this._last(null, pos);
                        p++;
                    }
                    output.push(sum/period);
                }
            }
        }
        else for (; i < this.value.length; i++) {
            if(this.value[i] ==null || average.getValue()[i]==null) output.push(null);
            else {
                let p = 0;
                let pos = i;
                let sum = 0;
                while (p<period) {
                    // @ts-ignore
                    sum+=Math.pow(this.value[pos]-average.getValue[i], 2);
                    pos = this._last(null, pos);
                    p++;
                }
                output.push(sum/period);
            }
        }
        return new Series(output);
    }

    /*
    Conditions
     */

    public greaterThan(value: Series | undefined | number):Series {
        if (this.value == undefined) throw Error("Empty series.");
        if (value == undefined) throw Error("Missing value.");
        let output: (number | null)[] = [];
        if (typeof value == 'number') {
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null) output.push(null);
                else { // @ts-ignore
                    output.push(this.value[i]>value?1:0);
                }
            }
        } else {
            if (this.value.length != value.length()) throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the input value has length of " + value.length() + ".");
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null || value.getValue()[i] == null) output.push(null);
                else { // @ts-ignore
                    output.push(this.value[i]>value.getValue()[i]?1:0);
                }
            }
        }
        return new Series(output);
    }

    public greaterEqual(value: Series | undefined | number):Series {
        if (this.value == undefined) throw Error("Empty series.");
        if (value == undefined) throw Error("Missing value.");
        let output: (number | null)[] = [];
        if (typeof value == 'number') {
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null) output.push(null);
                else { // @ts-ignore
                    output.push(this.value[i]>=value?1:0);
                }
            }
        } else {
            if (this.value.length != value.length()) throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the input value has length of " + value.length() + ".");
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null || value.getValue()[i] == null) output.push(null);
                else { // @ts-ignore
                    output.push(this.value[i]>=value.getValue()[i]?1:0);
                }
            }
        }
        return new Series(output);
    }

    public lessThan(value: Series | undefined | number):Series {
        if (this.value == undefined) throw Error("Empty series.");
        if (value == undefined) throw Error("Missing value.");
        let output: (number | null)[] = [];
        if (typeof value == 'number') {
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null) output.push(null);
                else { // @ts-ignore
                    output.push(this.value[i]<value?1:0);
                }
            }
        } else {
            if (this.value.length != value.length()) throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the input value has length of " + value.length() + ".");
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null || value.getValue()[i] == null) output.push(null);
                else { // @ts-ignore
                    output.push(this.value[i]<value.getValue()[i]?1:0);
                }
            }
        }
        return new Series(output);
    }

    public lessEqual(value: Series | undefined | number):Series {
        if (this.value == undefined) throw Error("Empty series.");
        if (value == undefined) throw Error("Missing value.");
        let output: (number | null)[] = [];
        if (typeof value == 'number') {
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null) output.push(null);
                else { // @ts-ignore
                    output.push(this.value[i]<=value?1:0);
                }
            }
        } else {
            if (this.value.length != value.length()) throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the input value has length of " + value.length() + ".");
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null || value.getValue()[i] == null) output.push(null);
                else { // @ts-ignore
                    output.push(this.value[i]<=value.getValue()[i]?1:0);
                }
            }
        }
        return new Series(output);
    }

    public and(value: Series | undefined ):Series {
        if (this.value == undefined) throw Error("Empty series.");
        if (value == undefined) throw Error("Missing value.");
        let output: (number | null)[] = [];
        if (this.value.length != value.length()) throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the input value has length of " + value.length() + ".");
        for (let i = 0; i < this.value.length; i++) {
            if (this.value[i] == null || value.getValue()[i] == null) output.push(null);
            else {
                output.push(this.value[i]!= 0 && value.getValue()[i] != 0?1:0);
            }
        }
        return new Series(output);
    }

    public or(value: Series | undefined ):Series {
        if (this.value == undefined) throw Error("Empty series.");
        if (value == undefined) throw Error("Missing value.");
        let output: (number | null)[] = [];
        if (this.value.length != value.length()) throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the input value has length of " + value.length() + ".");
        for (let i = 0; i < this.value.length; i++) {
            if (this.value[i] == null || value.getValue()[i] == null) output.push(null);
            else {
                output.push(this.value[i]!= 0 || value.getValue()[i] != 0?1:0);
            }
        }
        return new Series(output);
    }

    public nor(value: Series | undefined ):Series {
        if (this.value == undefined) throw Error("Empty series.");
        if (value == undefined) throw Error("Missing value.");
        let output: (number | null)[] = [];
        if (this.value.length != value.length()) throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the input value has length of " + value.length() + ".");
        for (let i = 0; i < this.value.length; i++) {
            if (this.value[i] == null || value.getValue()[i] == null) output.push(null);
            else {
                output.push((this.value[i] != 0 && value.getValue()[i] == 0) || (this.value[i] == 0 && value.getValue()[i] != 0)?1:0);
            }
        }
        return new Series(output);
    }

    public not():Series {
        if (this.value == undefined) throw Error("Empty series.");
        let output: (number | null)[] = [];
        let count = 0;
        for (let i = 0; i < this.value.length; i++) {
            if (this.value[i] == null) output.push(null);
            else output.push(this.value[i]==0?1:0);
        }
        return new Series(output);
    }

    /**
     * count the number of continuous non-zero values.
     */
    public count():Series {
        if (this.value == undefined) throw Error("Empty series.");
        let output: (number | null)[] = [];
        let count = 0;
        for (let i = 0; i < this.value.length; i++) {
            if (this.value[i] == null) output.push(null);
            else {
                if(this.value[i] == 0) count = 0;
                else count++;
                output.push(count);
            }
        }
        return new Series(output);
    }
}
