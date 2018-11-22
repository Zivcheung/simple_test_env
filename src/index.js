import _ from "lodash";
import Data from "./data.xml";
import moment from "moment";
import "./style.css"
import Icon from "./image1.png";


function component() {
    var element = document.createElement('div');
  
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack',"font"], ' ');
    element.classList.add("hello");
    // 将图像添加到我们现有的 div。
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
    
    console.log(Data);
    // var time = document.createElement("div");
    // var m = Moment.format("MMM Do YY");
    moment.locale("en");
    var time=moment("2018-06-23").format("MMM Do");
    // var time = moment();
    console.log(time);



    return element;
  }
  
  document.body.appendChild(component());