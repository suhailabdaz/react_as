import { sum } from "../sum";

test("should return sum of two numbers",()=>{
    const result=sum(2,5)

    expect(result).toBe(7)
});