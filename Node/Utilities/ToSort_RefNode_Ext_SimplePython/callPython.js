// Taken from: https://stackoverflow.com/questions/23450534/how-to-call-a-python-function-from-node-js
// "Easiest way I know of is to use "child_process" package which comes packaged with node."

const spawn = require("child_process").spawn;

// const pythonProcess = spawn('python',["path/to/script.py", arg1, arg2, ...]);
const pythonProcess = spawn('python',["./simplePythonScript.py",""]);

// Then all you have to do is make sure that you import sys in your python script, and then you can access arg1 using sys.argv[1], arg2 using sys.argv[2], and so on.
// To send data back to node just do the following in the python script:
// print(dataToSendBack)
// sys.stdout.flush()
// And then node can listen for data using:
pythonProcess.stdout.on('data', (data) => {
    // Do something with the data returned from python script
    console.log(data.toString());
    
});


