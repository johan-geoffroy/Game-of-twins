import React, { Component } from 'react';



class TwinsWords extends Component {

    
    constructor(props) {
        super(props);

        this.twinsFunction = this.twinsFunction.bind(this);
    }

    twinsFunction = (a, b) => {

        let resultArray = [];

        if (a.length !== b.length) {
            return false;
        }

        for (let i = 0; i < b.length; i++) {

            let newArray = this.swapEven(b[i]);

            if (a[i] === newArray) {

                resultArray.push(" Yes ");

            } else {

                resultArray.push(" No ");
            }
        }
        return resultArray
    }

    swapEven = (array) => {

        let newArray = array.split('').sort().join('');

        return newArray;
    }

    render() {
        const a = ["abcd", "efgh", "test", "ijkl"];
        const b = ["cdab", "ghef", "tset", "ijlk"];
        const results = this.twinsFunction(a, b);

        return (
            <div className="result">
                <h2>Twins word :</h2>
                <p>{results}</p>
            </div>
        )
    }
}

export default TwinsWords