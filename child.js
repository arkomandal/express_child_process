process.on('message', (data) => {
    //Use your business logic here instead of 
    let dummyBusinessLogic = parseInt(data.id) + 200;
    setTimeout(() => {
        process.send(`Updated data using business logic: ${dummyBusinessLogic}`);
    }, 5000);
});