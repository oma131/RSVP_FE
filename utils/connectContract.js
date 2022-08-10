
import abiJSON from "../utils/Web3RSVP.json";
import { ethers } from "ethers";

function connectContract() {
    const contractAddress = "0xEa65d9Cd5aC5bf3125733f7db93bCFB71E250994";
    const contractABI = abiJSON.abi;
    let rsvpContract;
    try {
        const { ethereum } = window;
  
        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          rsvpContract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          ); 
        } else {
          console.log('Rthereum object doesnot exist.')
        }
      } catch (error) {
        console.log("ERROR:", error);
      }
      return rsvpContract;
  }
  
  export default connectContract;
  