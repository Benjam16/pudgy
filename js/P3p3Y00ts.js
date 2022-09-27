const ContractAddress = "0xbe55781d3f8f51a9b6b760af136062b6f2e9f657";
const ContractABI = () => {
	return `[ { "inputs": [ { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "qty", "type": "uint256" } ], "name": "airdropNFT", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "ApprovalForAll", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "qty", "type": "uint256" } ], "name": "mint", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "qty", "type": "uint256" } ], "name": "OwnerBatchMint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "string", "name": "baseURI_", "type": "string" } ], "name": "setBaseURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "qty_", "type": "uint256" } ], "name": "setMaxFreeMint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "maxMint_", "type": "uint256" } ], "name": "setmaxMint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "maxMintPerTx_", "type": "uint256" } ], "name": "setmaxMintPerTx", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "price_", "type": "uint256" } ], "name": "setPrice", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "setPublicMinting", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "freeMint", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "getApproved", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" } ], "name": "isApprovedForAll", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxMintPerTx", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MintPrice", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MintStartEnabled", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "nextOwnerToExplicitlySet", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" } ], "name": "numberMinted", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "ownerOf", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "index", "type": "uint256" } ], "name": "tokenByIndex", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" } ], "name": "tokenOfOwnerByIndex", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "tokenURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "WalletMint", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" } ]`;  
};

const provider = new ethers.providers.Web3Provider(window.ethereum,"any");
const signer = provider.getSigner();
const Contract = new ethers.Contract(ContractAddress, ContractABI(), signer);
var connectedWallet = false;

const connect = async()=>{
	await provider.send("eth_requestAccounts", []);
	try {
		return await provider.send("eth_requestAccounts", []);
	}    
	catch (error) { 
			if (error) {
			}
			else {
			}
		}
};

const getAddress = async()=>{
	try {
		return await signer.getAddress()
	}catch (error) { 
        if (error) {
				connectedWallet = false;
			}
        else {
        }
    } finally {
		if(getAddress != null)
		{
				connectedWallet = true;
		}
	}
};

const updateMintInfo = async() => {
	
	await connect();
	const minted = parseInt(await Contract.totalSupply());
    $("#minted").html(`${minted}`+"/6969 P3p3 Y00ts");
	let userAddress = await getAddress();
	let length = userAddress.length;
	console.log("Connect");
    $("#connectWallet").html(`${userAddress.substr(0,4)}.`+`.${userAddress.substr((length-4),length)}`);
}
setInterval(async()=>{
	const addresses = await provider.listAccounts(); 
	if(addresses.length != 0)
	{
		$("#mintButton").html("Mint P3p3 Y00ts");
		await updateMintInfo();
	}
	else
	{
		$("#mintButton").html("Connect Wallet");
	}
}, 5000)

ethereum.on("accountsChanged", async(accounts_)=>{
    location.reload();
});

window.onload = async()=>{
	const addresses = await provider.listAccounts(); 
	if(addresses.length != 0)
	{
		console.log("YEST");
		$("#mintButton").html("Mint P3p3 Y00ts");
		await updateMintInfo();
	}
	else
	{
		console.log("YEST");
		$("#mintButton").html("Connect Wallet");
	}
};

const mint = async() => {
    try {
			await connect();
			let userAddress = await getAddress();
			const priceWei = parseInt(await Contract.MintPrice());
			const minted = parseInt(await Contract.totalSupply());
			const walletMint = parseInt(await Contract.WalletMint(userAddress));
			const free = parseInt(await Contract.freeMint());
			let  amount = parseInt($("#quantity").val());
			if(walletMint < free)
			{
				if(amount <= free - walletMint){amount = free};
				const cost = ethers.BigNumber.from(priceWei).mul(amount-free);
				const gasLimit = await Contract.estimateGas.mint(amount, {value: cost});
				const newGasLimit = parseInt((gasLimit * 1.2)).toString();
				await Contract.mint(amount, {value: cost,gasLimit: newGasLimit});
			}
			else
			{
				const cost = ethers.BigNumber.from(priceWei).mul(amount);
				const gasLimit = await Contract.estimateGas.mint(amount, {value: cost});
				const newGasLimit = parseInt((gasLimit * 1.2)).toString();
				await Contract.mint(amount, {value: cost,gasLimit: newGasLimit});
			}
		}
    catch (error) { 
			if (error) {
				console.log(error);
				if ((error.message).includes("Limit Per Transaction")) {
						swal("Max Tx Reached");
				}
				else if ((error.message).includes("Minting Public Pause")) {
						swal("Minting Pause");
				}	
				else if ((error.message).includes("Insufficient")) {
						swal("Insufficient Funds");
				}			
				else if ((error.message).includes("Max Per Wallet")) {
						swal("Max Mint Reached");
				}	
				else if ((error.message).includes("Soldout")) {
						swal("Soldout");
				}
				else if ((error.message).includes("wallet_requestPermissions")) {
						swal("Check Your Popup Metamask");
				}
				else if ((error.message).includes("User rejected the request.")) {
						swal("Rejected");
				}
				else if ((error.message).includes("insufficient funds for gas")) {
						swal("Insufficient");
				}
				else{
						swal("Something Wrong !");
					}
			}
			else {
				swal("Clear Browser Cookies and Cache");
			}
		}
	};
