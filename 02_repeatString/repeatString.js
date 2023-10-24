const repeatString = function(string, num) {
        let result = ''
    
        if(num < 0){
            return "ERROR"
        }
    
        for(let i = 0; i < num; i++){
           result = result + string;
        }
    
        // console.log(result)
        return result
    };
    
    repeatString('hey', 2)

// Do not edit below this line
module.exports = repeatString;
