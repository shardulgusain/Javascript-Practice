nums = [1,2,3,54,54,54566,33,52,55,22,552,55,25,6,463,];

//from nums array we filtered values based on even or odd and printed using for each
nums.filter((n)=>
{
    if(n%2==0)
    {
        return n
    }
}).forEach(element => {
    console.log(element);
});