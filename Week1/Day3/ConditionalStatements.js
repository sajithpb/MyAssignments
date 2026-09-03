function launchBrowser(browserName) {
    if (browserName==="chrome") {
        console.log("browser is chrome");
        
    } else {
        console.log("browser is not chrome");
        
    }
}

function runTests(testType) {
  
    switch (testType) {
        case "sanity" :
            console.log("The test is sanity");
            break;
        case "regression" :
            console.log("The test is regression");
            break;
        default : 
            console.log("The test is smoke");     
            break;
    }
}

//
launchBrowser("chrom")
runTests("h")