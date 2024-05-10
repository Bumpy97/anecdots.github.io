


const scriptsInEvents = {

	async списоксобытий1_Event1_Act1(runtime, localVars)
	{
		
	},

	async списоксобытий1_Event10_Act1(runtime, localVars)
	{
		    function share() {
		      vkBridge.send('VKWebAppShare', {
		  link: 'https://vk.com/app51921521'
		  })
		  .then((data) => { 
		    if (data.result) {
		      // Запись размещена, история опубликована, сообщение отправлено
		    }
		  })
		  .catch((error) => {
		    // Ошибка
		    console.log(error);
		  });
		    }
			
	},

	async списоксобытий1_Event11_Act1(runtime, localVars)
	{
		function inviteFriend() {
		      vkBridge.send('VKWebAppShowInviteBox', {
		  requestKey: "key-12345" //  Ключ приглашения
		  })
		  .then( (data) => {
		    if (data.success) {
		      // Пользователь нажал «Пригласить» 
		      // ...
		  
		      // Этим выбранным пользователям 
		      // не удалось отправить приглашения 
		      console.log('Приглашения не отправлены', data.notSentIds);
		    }
		  })
		  .catch( (error) => {
		    console.log(error); // Ошибка 
		  });
		    }
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

