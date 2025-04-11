# 🔹 What is node js?

Node.js is an open-source, cross-platform JavaScript runtime environment built on Chrome's V8 engine.
It allows running JavaScript on the server-side to build scalable network applications.

Node.js is designed for non-blocking, event-driven servers due to its single-threaded nature. It’s commonly used for:

- Web servers
- REST APIs
- Real-time applications (like chats, gaming, stock trading apps)
- Microservices architecture

# 🔹 Architecture

Node.js follows an event-driven, non-blocking I/O architecture. It is built on Google’s V8 engine and utilizes a single-threaded event loop to handle multiple concurrent requests efficiently.

- V8 Engine (JavaScript Execution)
- Single-threaded Event Loop (Handles asynchronous tasks)
- Non-blocking I/O (Efficiently processes requests)
- Libuv Library (Manages the Event Loop and Thread Pool)
- C++ Bindings (Allows interaction with system APIs)
- Node.js APIs (Modules like HTTP, File System, Streams)
- Event-Driven Programming (Callbacks, Promises, Async/Await)

Client Request
   │
   ▼
Node.js Server (Single Thread)
   │
   ├── Event Loop ───► Non-Blocking API Calls (Async)
   │         ├─ File System
   │         ├─ Database Queries
   │         ├─ Network Calls
   │         ├─ Streams
   │
   ├── Worker Thread Pool (For CPU-Intensive Tasks)
   │         ├─ Compression
   │         ├─ Encryption/Decryption
   │         ├─ Image Processing
   │
   ▼
Response Sent to Client


# 🔹 Advantages

- Non-blocking I/O: Uses event-driven, asynchronous operations.
- Single-threaded event loop: Handles multiple requests efficiently.
- Large ecosystem: NPM (Node Package Manager) provides a vast collection of libraries.

# 🔹 Why is Node.js single-threaded?

Node.js is single-threaded to efficiently handle asynchronous operations using an event loop.
It doesn’t create multiple threads for each request, avoiding overhead and making it highly scalable.

# 🔹 I/O Operations in Node.js

I/O (Input/Output) operations in Node.js refer to any operations that involve reading from or writing to external sources, such as:

- File system operations (reading/writing files)
- Network requests (HTTP requests, WebSockets)
- Database interactions (querying MongoDB, PostgreSQL, MySQL)
- Console input/output (reading user input, logging to console)
- Since I/O operations are generally slow and blocking, Node.js handles them asynchronously using non-blocking I/O.

# 🔹 Promise

A Promise in Node.js is an object that represents the eventual completion (or failure) of an asynchronous operation.

```bash
const myPromise = new Promise((resolve, reject) => {
    let success = true;
    
    setTimeout(() => {
        if (success) {
            resolve("✅ Task completed!");
        } else {
            reject("❌ Task failed!");
        }
    }, 2000);
});

myPromise
    .then(result => console.log(result)) // Success
    .catch(error => console.error(error)); // Failure

```

# 🔹 Promise race & Promise any

Both Promise.race() and Promise.any() are used to handle multiple promises concurrently, but they behave differently in terms of how they resolve or reject.

- race
   - Returns the first settled promise (either resolved or rejected).
   - If the first settled promise is fulfilled, then() is executed.
   - If the first settled promise is rejected, catch() is executed.
   - Use Promise.race() when you need the first settled result (whether success or failure).
   
   ```bash
   Promise.race([promise1, promise2, promise3])
    .then((value) => {
        console.log('First resolved:', value);
    })
    .catch((error) => {
        console.log('First rejected:', error);
    });

   ```

- any
   -  Returns the first successfully resolved promise.
   -  Ignores rejected promises unless all fail.
   -  If all promises fail, it throws an AggregateError.
   -  Use Promise.any() when you need the first successful result, ignoring failures.

   ```bash
   const fastFail = new Promise((_, reject) => setTimeout(() => reject('Fast failure!'), 100));
   const slowSuccess = new Promise((resolve) => setTimeout(() => resolve('Slow success!'), 500));
   const fastSuccess = new Promise((resolve) => setTimeout(() => resolve('Fast success!'), 200));

   Promise.any([fastFail, slowSuccess, fastSuccess])
    .then((result) => console.log('First resolved:', result))
    .catch((error) => console.log('All promises failed:', error));

   ```

# 🔹 control flow

Control flow in Node.js refers to the order of execution of code, especially in asynchronous programming. 
Since Node.js is non-blocking and event-driven, managing control flow is essential for handling asynchronous operations efficiently.

-  Control the order of execution
-  Collect data
-  Limit concurrency
-  Call the following step in the program.


# 🔹 Event Loop

The Event Loop is the core of Node.js that allows asynchronous, non-blocking execution.
It continuously monitors the event queue and executes callbacks in different phases:

# 🔹 child Process

The child_process module in Node.js allows the execution of external system commands and spawning
child processes to handle CPU-intensive tasks without blocking the main event loop.

# 🔹 buffer and event buffer and stream

In Node.js, handling binary data efficiently is crucial, especially when dealing with file operations,
network requests, and real-time data processing. Three key concepts help with this:

-  Buffer – Stores binary data in memory.
   -  A Buffer is a temporary storage area in memory that holds binary data. 
      It is primarily used when working with binary files, network packets, or raw data.
-  Event Buffer – Temporarily holds data before processing.
   -  An event buffer is a temporary storage area that holds data before an event is processed. 
      It is commonly used in event-driven architectures
-  Stream – Handles continuous data flows efficiently.
   - A Stream is a continuous flow of data that allows processing chunk by chunk instead of loading everything into memory.  

# 🔹 middleware in Express.js?

Middleware functions in Express.js process requests before they reach the route handler.
```bash
const app = require('express')();

// Middleware
app.use((req, res, next) => {
  console.log('Request received');
  next(); // Pass to next middleware
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000);

```

# 🔹 process.nextTick() and setImmediate() and setTimeout(0)?

- process.nextTick(callback)	: Executes before the next event loop cycle
- setImmediate(callback)	: Executes after I/O operations in the event loop
- setTimeout(0) : Executes after the specified delay

```bash
console.log('Start');

process.nextTick(() => console.log('Next Tick'));
setImmediate(() => console.log('Set Immediate'));
setTimeout(() => console.log("Timeout callback"), 0);

console.log('End');

output:
Start
End
Next Tick
Set Immediate

```

# 🔹 synchronous and asynchronous functions?

- Feature       | Sync                | Async
- Blocking      | Yes                 | No
- Execution     | Line by Line        | Executes in the background
- Performance   | Slow for large tasks| Fast and scalable

# 🔹 clustering

Clustering allows multi-core usage by creating child processes.

# 🔹 fork() and spawn() and exec()

- fork
  - Run a separate Node.js script with communication
  - Creates child process for Node.js script	
  - IPC (Inter-Process Communication)	
  - child_process.fork('script.js')	
- spawn
  - Stream data, long-running processes
  - Executes external processes
  - No built-in IPC
  - child_process.spawn('ls', ['-lh'])
- exec
  - Executes a command, returns entire output as a buffer
  - child_process.exec('ls -lh', (err, stdout) => console.log(stdout))


# 🔹 JWT and session-based authentication

- JWT
  - Client-side (localStorage, cookies)	
  - High (stateless)	
  - Token-based	
  - jsonwebtoken package	
- Sessions
  - Server-side (Database, Redis)
  - Low (stateful)
  - Session ID stored in cookies
  - express-session package

# 🔹 Curry Function

Currying is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument.

```bash
const curry = (a) => (b) => (c) => a + b + c;

console.log(curry(2)(3)(4)); // Output: 9
```


# 🔹 Convert variable Names

```bash
function convertVariableName(input) {
    // If the input contains '_', assume it's C++ style (snake_case) and convert to Java style (camelCase)
    if (input.includes('_')) {
        return input.split('_').map((word, index) => {
            return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
        }).join('');
    } 
    
    // Otherwise, assume it's Java style (camelCase) and convert to C++ style (snake_case)
    if (/^[a-z]+$/.test(input)) {
        return input.split('').join('_'); // Convert to _t_h_i_s format
    }
    return input.replace(/[A-Z]/g, letter => '_' + letter.toLowerCase());
}

// Example Usage
console.log(convertVariableName("this_is_a_variable")); // Output: "thisIsAVariable"
console.log(convertVariableName("thisIsAVariable"));  // Output: "this_is_a_variable"
console.log(convertVariableName("thisisavariable"));  // Output: "t_h_i_s_i_s_a_v_a_r_i_a_b_l_e"

```

# 🔹 Calculating total marks excluding lowest subject

```bash
function calculateTotalMarksExcludingLowestSubject(N, M, marks) {
    let result = [];
    
    // Find the subject with the lowest average
    let subjectSums = new Array(M).fill(0);
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            subjectSums[j] += marks[i][j];
        }
    }
    
    let minAvgSubject = subjectSums.map(sum => sum / N).indexOf(Math.min(...subjectSums.map(sum => sum / N)));
    
    // Calculate total marks excluding the lowest average subject for each student
    for (let i = 0; i < N; i++) {
        let totalMarks = marks[i].reduce((sum, val) => sum + val, 0);
        result.push(totalMarks - marks[i][minAvgSubject]);
    }
    
    return result;
}

// Example Usage
let N = 3;
let M = 5;
let marks = [
    [75, 76, 65, 87, 87],
    [78, 76, 68, 56, 89],
    [67, 87, 78, 77, 65]
];

console.log(calculateTotalMarksExcludingLowestSubject(N, M, marks)); // Output: [325, 299, 296]

```

