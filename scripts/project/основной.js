
// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";

runOnStartup(async runtime =>
{
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.
	
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime)
{
	// Code to run just before 'On start of layout' on
	// the first layout. Loading has finished and initial
	// instances are created and available to use here.
	
	runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime)
{
	// Code to run every tick
}

function share(){

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


function invite(){

            vkBridge.send('VKWebAppShowInviteBox', {
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