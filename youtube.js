const interval = setInterval(()=>	{	
	const skip = document.getElementsByClassName('ytp-ad-skip-button ytp-button')[0];
	if (skip){
		console.log('Pulando Anúncio youtube');
		skip.click();	
	}
	return;
},2000);


