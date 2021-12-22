const button = document.getElementById("redner-button")
    const input = document.getElementById("redner-input")
    const list = document.getElementById("redner-list")
    let timesArray = []
    let allTimerButtons = []
    let currentTimer = null;
    
    button.addEventListener("click", event => addToList());
    
    input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        addToList();
      }
    });

    function addToList() {
    	if(input.value.trim() == "") return;
      
   	  const item = document.createElement("li");
      const children = list.children.length + 1
      item.setAttribute("id", "element-"+children)
      item.appendChild(document.createTextNode(input.value))
      item.appendChild(document.createTextNode(" "))
      item.appendChild(createTimer(children))
      item.appendChild(document.createTextNode(" "))
      item.appendChild(createButton(children))
      list.appendChild(item)
      input.value = ""
    }
    
    function createTimer(index) {
    	const timer = document.createElement("span")
      timer.setAttribute("id", "timer-"+index)
      timer.textContent = "00:00:00"
      return timer;
    }
    
    function createButton(index) {
     	const startStopBtn = document.createElement("button")
      
      startStopBtn.textContent = "Start!"
      startStopBtn.setAttribute("id", "btn-"+index)
      startStopBtn.dataset.type = "start"
      timesArray[index] = 0
      startStopBtn.addEventListener("click", event => {
      
      	if(startStopBtn.dataset.type === "start") {
        	stopTimer();

        	currentTimer = setInterval(function(){
              timesArray[index]++;
              document.getElementById("timer-"+index).textContent = displayTime(timesArray[index])
          }, 1000);
      		startStopBtn.textContent = "Stop!"
      		startStopBtn.dataset.type = "stop"
        } else {
        	stopTimer();

          startStopBtn.textContent = "Start!"
          startStopBtn.dataset.type = "start"
        }
        
      })
      allTimerButtons[index] = startStopBtn;
      return startStopBtn;
    }
    
    function stopTimer() {
      clearInterval(currentTimer);
			for(let i = 0; i < allTimerButtons.length; i++) {
        if(allTimerButtons[i]) {
          allTimerButtons[i].textContent = "Start!"
          allTimerButtons[i].dataset.type = "start"
        }
      }
    }
    
    function displayTime(time) {
    	let hour = parseInt((time / 60) / 60, 10);
      let minutes = parseInt((time / 60) % 60, 10);
      let seconds = parseInt(time % 60, 10);;
      
      hour = hour < 10 ? "0" + hour : hour;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
            
      return hour + ":" + minutes + ":" + seconds;
    }