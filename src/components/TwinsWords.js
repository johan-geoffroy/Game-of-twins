import React, { Component } from 'react';



class TwinsWords extends Component {


    constructor(props) {
        super(props);

        this.twinsFunction = this.twinsFunction.bind(this);
    }


    twinsFunction = (a, b) => {

        let stringA = a;
        let stringB = b;
        let newArray, resultArray;
        let result = [];


        this.swapEven = (array, indexA, indexB) => {

            let tempArray = array[indexA];

            array[indexA] = array[indexB];
            array[indexB] = tempArray;

            return array;
        }

        this.compareArray = (arrayA, arrayB) => {

            let joinArrayA = arrayA.join('');
            let joinArrayB = arrayB.join('');


            if (joinArrayA.length !== joinArrayB.length) {

                return false;
            }

            if (joinArrayA === joinArrayB) {

                return result.push(' Yes ');

            } else {
                return result.push(' No ');
            }
        }

        //first swap
        for (let i = 0; i < stringB.length; i++) {

            let splitArray = stringB[i].split('');

            for (let j = 0; j < splitArray.length; j++) {

                if (splitArray[j] < splitArray[j + 1]) {

                    newArray = this.swapEven(splitArray, j, j + 2);
                }
            }
        }

        //second swap
        for (let k = 0; k < newArray.length; k++) {

            resultArray = this.swapEven(newArray, 1, 4 - 1);

            //compare string
            this.compareArray(stringA, resultArray);
        }

        return result;

    }


    render() {
        const a = ["abcd"];
        const b = ["cdab"];
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