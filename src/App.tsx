import React from 'react';
import './App.css';


export interface MyState {
    nama: string;
    kelas: string;
    isAvailable: string;
    numButton: number;
}


export class Component1 extends React.Component <any, MyState>  {
    constructor(props: any) {
        super(props);

        this.state = {
            nama: "Yuda",
            kelas: "XI MIPA 2",
            isAvailable: "true",
            numButton: 1
        };
    }

    handleClick = () => {
        console.log("button clicked...")
        this.setState({
            numButton: this.state.numButton + 1,
        });
    }
   

    render() {
        if (this.state.numButton%3) {
          const {nama, kelas, isAvailable, numButton}= this.state
            return (
                <div>
                    <h1>Nama : {nama}</h1>
                    <p>Kelas : {kelas}</p>
                    <p>Pagi : {isAvailable}</p>
    
                    <h1>{numButton}</h1>
                   
                    <button type="button" onClick={this.handleClick}>
                    click me
                    </button>
                </div>
            )
        } else {
          const {nama, kelas, isAvailable, numButton}= this.state
            return (
                <div>
                    <h1>Nama : {nama}</h1>
                    <p>Kelas : {kelas}</p>
                    <p>Pagi : {isAvailable}</p>
    
                    <h1>{numButton}</h1>
                   
                    <button type="button" onClick={this.handleClick}>
                    click me
                    </button>
                    <img src= "	https://e7.pngegg.com/pngimages/910/222/png-clipart-star-computer-icons-galaxy-circle-nebula-star-purple-blue.png" ></img>           

                </div>
            )
        }
    }
}
export default Component1;