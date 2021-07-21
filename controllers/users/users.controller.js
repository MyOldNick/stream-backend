const userAll = (req, res) => {
	res.status(200).send({
		access:true
	});

}

const userPrivate = (req, res) => {
	res.status(200).send({
		access:true
	});
};



// const refresh_token = (req, res)=>{
// 	const postData = req.body
//     // if refresh token exists
//     if((postData.refreshToken)) {

// 		const token = jwt.sign(user, config.secret, { expiresIn: config.tokenLife})
//         const response = {
//             "accsess_token": token,
//         }
//         // update the token in the list
//         res.status(200).json(response);        
//     } else {
//         res.status(404).send('Invalid request')
//     }
// }

module.exports = { userPrivate, userAll };