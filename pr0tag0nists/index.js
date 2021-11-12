window.onload = function () {
	// connect()
};

async function connect() {
	// Connect to wallet
	//Get Account info
	const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
	const account = accounts[0];
	console.log(accounts[0]);
	// const showAccount = document.querySelector('.showAccount');
	// // showAccount.innerHTML = account;
	// document.getElementById('id_login').value = account
	// document.getElementById('id_password').value = CryptoJS.MD5(account)
	// //CSRF for form
	// var inputElem = document.createElement('input');
	// inputElem.type = 'hidden';
	// inputElem.name = 'csrfmiddlewaretoken';
	// inputElem.value = '{{ csrf_token }}';
	// document.getElementById('loginForm').appendChild(inputElem);
	// document.getElementById('loginForm').submit()
}
// Web3 wallet sign in end



// Function used to sign the raffle purchase confirmation
async function signature() {
	try {
		// const msg = 'Sample message to hash for signature'
		// const msgHash = keccak256(msg)
		const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
		const from = accounts[0];
		const msg = 'Purchase Raffle tickets';
		// const msg = `0x${Buffer.from(plainMessage, 'utf8').toString('hex')}`;
		const sign = await ethereum.request({
			method: 'personal_sign',
			params: [msg, from, 'Example password'],
		});
	} catch (err) {
		console.error(err);
	}
	document.getElementById('purchase_raffle_tickets').disabled = false;			
}



// Function used to mint protagonists
async function minter(){
	var amount = document.getElementById('id_contribution_amount').value;

	const web3 = new Web3(window.web3.currentProvider);
	const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

	web3.eth.defaultAccount = accounts[0];

	// var Pr0tAddress = "0x83BE666f79E380070F5951b9b99efc981373B495";
	// var Pr0tABI = [];

	// var Pr0tContract = new web3.eth.Contract(Pr0tABI, Pr0tAddress);

	// var today = Date.now();
	// var slug = "{{object.slug}}";

	// // Variable formating
	// today = new Date(today).getTime() / 1000;
	// amount = web3.utils.toWei(amount, 'ether');

	// console.log("Big Number: " + amount);

	// // To bytes32
	// slug = web3.utils.toHex(slug);

	// // console.log(parseFloat(requiredContribution));
	// // console.log(deadline);
	// // console.log(slug);


	// var mintPr0t = Pr0tContract.methods.mintPr0t(slug, today).call().then(function (response) {
		
	// });

	// web3.eth.sendTransaction({ to: Pr0tAddress,
	// 			value: amount,  
	// 			from: accounts[0], 
	// 			gasLimit: 150000,
	// 			data: mintPr0t });
}