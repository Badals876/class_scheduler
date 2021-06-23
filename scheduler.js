var x=document.getElementById("dates");
for(let i=1;i<31;i++)
{
    let y=document.createElement("option");
    y.innerHTML=i;
    y.value=i;
    x.appendChild(y);
}

var cal=document.getElementById("calendar");
for(let i=1;i<31;i++)
{
    let y=document.createElement("button");
    y.innerHTML=i;
    y.class="calbtn";
    y.id="cbt"+i;
    y.onclick=function() {fun(y.innerHTML)};
    cal.appendChild(y);
}


function fun(p){
    
    document.getElementById("bod").innerHTML=
    `<h3>Date : ${p} June 2021</h3>
    <div id ="view">
    <h2>Schedule</h2>
    <p>10:00pm-12:00pm : Available</p>
    <p>12:00pm- 2:00pm : Available </p>
    <p>2:00pm - 4:00pm : Available</p>
    </div>
    <div id="teacherfilter" >
    <label for="teacher" >Select Teacher</label>
    <select name="teachername" id="teacher">
        
        <option class="opt" value="A">A</option>
        <option class="opt" value="B">B</option>
        <option class="opt" value="C">C</option>
    </select>
    </div>
    <div id="slotfilter"> 
            <label for="slot"> Teaching Slot </label>
            <select name="slot" id="slots">
                <option class="opt" value="i">10:00am-12:00pm</option>
                <option class="opt" value="ii">12:00pm-2:00pm</option>
                <option class="opt" value="iii">2:00pm-4:00pm</option>
            </select>
        </div>
        <div id="filbtn"><button class="btn" id="filterbtn">Set</button></div>
        <div id="itsfooter">
        <button class="btn" id="back" onclick="fun2()">Back</button>  
        <button class="btn" id="reset">Reset</button>
        
        </div>

        
    `;
}
function fun2()
{
    location.reload();
    return false;
    
}
/*
function slotsbook(let x)
{
    document.getElementById("scheduler").innnerHTML();
}
*/
