import React, { Component } from 'react';
import './App.css';

import Web3 from 'web3';


class App extends Component {

  async componentDidMount() {
    await this.initWeb3()
    console.log(this.web3);
    let accounts = await this.web3.eth.getAccounts();
    console.log(accounts);

    let balance = await this.web3.eth.getBalance(accounts[0]);
    console.log(balance);
  }

  initWeb3 = async () => {
    if (window.ethereum) {
      console.log('Recent mode')
      this.web3 = new Web3(window.ethereum);
      try {
          // Request account access if needed
          // deprecated
          // await window.ethereum.enable();
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          // Acccounts now exposed
          // this.web3.eth.sendTransaction({/* ... */});
      } catch (error) {
          // User denied account access...
          console.log(`User denied account access error : ${error}`)
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      console.log('legacy mode')
      this.web3 = new Web3(Web3.currentProvider);
      // Acccounts always exposed
      // web3.eth.sendTransaction({/* ... */});
    }
    // Non-dapp browsers...
    else {
      console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default App;
