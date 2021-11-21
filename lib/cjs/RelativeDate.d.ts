declare class RelativeDate {
    private readonly formats;
    private readonly times;
    private readonly input;
    private readonly reference;
    constructor(input: any, reference?: any);
    print(): string;
}
export default RelativeDate;
