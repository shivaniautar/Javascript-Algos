







        const reverse = x => {
            let y;
            // check for negative
            if(x<0){
                y=x.toString().split('').reverse();
                y.unshift('-');
                y.pop();
                y = parseInt(y.join(''));
                // check for 32 bit outside of bounds
                if(y< -2147483648){
                    return 0 
                }
                // positive case
            }else{
                y=parseInt(x.toString().split('').reverse().join(''))
                // check for 32 bit outside of bounds
                if(y> 2147483647){
                    return 0 
                }
            }
            console.log(y);
            return y
        }

        reverse(-10)
        reverse(102)