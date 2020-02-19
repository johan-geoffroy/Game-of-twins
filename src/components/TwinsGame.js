import React, { Component } from 'react'




class TwinsGame extends Component {

    constructor(props) {
        super(props);

        this.state = {
            gameQuestion: this.alphabetFunction(),
            wordInput: '',
            gameResult: false,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.alphabetFunction = this.alphabetFunction.bind(this);
        this.restartGame = this.restartGame.bind(this);
    }



    alphabetFunction = () => {

        const alphabetArray = ['cdab', 'ghef', 'klij', 'opmn', 'stqru', 'xyvwz'];

        let selectRand = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];

        let result = selectRand;

        return result;
    }


    handleInputChange = (event) => {
        this.setState({ wordInput: event.target.value });
    }
    

    handleSubmit = (event) => {
        event.preventDefault();

        let getQuestion = this.state.gameQuestion;
        let responseGamer = Array(this.state.wordInput);


        let result = [];

        if (this.state.wordInput === '') {

            result.push("Le champ est vide!");

            return this.setState({ gameResult: result });

        }

        if (responseGamer.join('') === getQuestion.split('').sort().join('')) {

            result.push("Bonne réponse!");

        } else {

            result.push("Oups mauvaise réponse");
        }
        return this.setState({ gameResult: result });
    }

    restartGame = () => {
        this.setState({gameQuestion: this.alphabetFunction()});
        this.setState({wordInput: ''});
        this.setState({gameResult: false});
    }


    render() {
        return (
            <div className="twins-game">
                <h2>Game of Twins</h2>
                <div className="game-question">
                    <p>Retrouver le twin : {this.state.gameQuestion}</p>
                </div>
                <form className="form-game" onSubmit={this.handleSubmit}>
                    <input type="text" className="form-control" value={this.state.wordInput} onChange={this.handleInputChange} />
                    <div className="btn-control">
                        <button type="submit" className="btn btn-primary btn-lg">Valider</button>
                        <button type="button" className="btn btn-secondary btn-lg" onClick={this.restartGame}>Rejouer</button>
                    </div>
                </form>
                <div className="result-game">
                    <p>{this.state.gameResult}</p>
                </div>
            </div>
        )
    }
}

export default TwinsGame;