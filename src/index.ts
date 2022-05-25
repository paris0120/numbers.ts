export class Series {
    private value: (number | null)[];
    constructor(value: (number | null)[]) {
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

    public add(value: (number | null)[] | undefined | number):Series {
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
            if (this.value.length != value.length) throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the input value has length of " + value.length + ".");
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null || value[i] == null) output.push(null);
                else { // @ts-ignore
                    output.push(this.value[i] + value[i]);
                }
            }
        }
        return new Series(output);
    }

    public subtract(value: (number | null)[] | undefined | number):Series {
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
            if (this.value.length != value.length) throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the input value has length of " + value.length + ".");
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null || value[i] == null) output.push(null);
                else { // @ts-ignore
                    output.push(this.value[i] - value[i]);
                }
            }
        }
        return new Series(output);
    }

    public distance(value: (number | null)[] | undefined | number):Series {
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
            if (this.value.length != value.length) throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the input value has length of " + value.length + ".");
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null || value[i] == null) output.push(null);
                else { // @ts-ignore
                    output.push(Math.abs(this.value[i] - value[i]));
                }
            }
        }
        return new Series(output);
    }

    public multiply(value: (number | null)[] | undefined | number):Series {
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
            if (this.value.length != value.length) throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the input value has length of " + value.length + ".");
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null || value[i] == null) output.push(null);
                else { // @ts-ignore
                    output.push(this.value[i] * value[i]);
                }
            }
        }
        return new Series(output);
    }

    public divide(value: (number | null)[] | undefined | number):Series {
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
            if (this.value.length != value.length) throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the input value has length of " + value.length + ".");
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null || value[i] == null || value[i] == 0) output.push(null);
                else { // @ts-ignore
                    output.push(this.value[i] / value[i]);
                }
            }
        }
        return new Series(output);
    }

    public modulo(value: (number | null)[] | undefined | number):Series {
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
            if (this.value.length != value.length) throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the input value has length of " + value.length + ".");
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null || value[i] == null || value[i] == 0) output.push(null);
                else { // @ts-ignore
                    output.push(this.value[i] % value[i]);
                }
            }
        }
        return new Series(output);
    }

    public power(value: (number | null)[] | undefined | number):Series {
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
            if (this.value.length != value.length) throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the input value has length of " + value.length + ".");
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null || value[i] == null) output.push(null);
                else { // @ts-ignore
                    output.push(Math.pow(this.value[i], value[i]));
                }
            }
        }
        return new Series(output);
    }

    public max(value: (number | null)[] | undefined | number):Series {
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
            if (this.value.length != value.length) throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the input value has length of " + value.length + ".");
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null || value[i] == null) output.push(null);
                else { // @ts-ignore
                    output.push(Math.max(this.value[i], value[i]));
                }
            }
        }
        return new Series(output);
    }

    public min(value: (number | null)[] | undefined | number):Series {
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
            if (this.value.length != value.length) throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the input value has length of " + value.length + ".");
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == null || value[i] == null) output.push(null);
                else { // @ts-ignore
                    output.push(Math.min(this.value[i], value[i]));
                }
            }
        }
        return new Series(output);
    }


    public lag(period: number):Series {
        if (this.value == undefined) throw Error("Empty series.");
        if (period <= 0 || !Number.isInteger(period)) throw Error("period must be a positive ");

        let output = []
        for (let i = 0; i < period; i++) {
            output.push(null);
        }
        // @ts-ignore
        return new Series(output.concat(this.value.slice(0, this.value.length-period)));
    }

    public lead(period: number):Series {
        if (this.value == undefined) throw Error("Empty series.");
        if (period <= 0 || !Number.isInteger(period)) throw Error("period must be a positive ");

        let output = this.value.slice(period);
        for (let i = 0; i < period; i++) {
            output.push(null);
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
                    while (this.value[start] == null) {
                        start++;
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


    public weightedSimpleMovingAverage(weight: (number | null)[] | undefined, period: number):Series {
        if (this.value == undefined) throw Error("Empty series.");
        if (weight == undefined) throw Error("Missing weight.");
        if (period <= 0 || !Number.isInteger(period)) throw Error("period must be a positive ");
        if (this.value.length != weight.length) throw Error("Two values have different lengths. The current series has length of " + this.value.length + " and the weight has length of " + weight.length + ".");
        let sum = 0;
        let wsum = 0;
        let start = 0;
        let c = 1;
        let output: (number | null)[] = [];
        for (let i = 0; i < this.value.length; i++) {
            if (this.value[i] == null || weight[i] == null) output.push(null);
            else {
                // @ts-ignore
                sum += this.value[i] * weight[i];
                // @ts-ignore
                wsum += weight[i];
                if (c >= period) {
                    output.push(wsum / sum);
                    while (this.value[start] == null || weight[start] == null) {
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

}

let s = new Series([]);