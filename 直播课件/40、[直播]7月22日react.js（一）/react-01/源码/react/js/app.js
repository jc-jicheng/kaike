// const App = (
//     <div>
//         <h1>开课吧</h1>
//         <p>web前端高级工程师</p>
//     </div>
// 	<div>第二个</div>
// );

let name = '开课吧!!';
let title = 'web前端高级工程师';
let n = 100;
let arr = ['kai', 'ke', 'ba'];
let d1 = new Date();
let obj1 = {x: 1, y: 2};
let id = 'kaikeba';
let style1 = {width: '100px', height: '100px', background:'red'};

let zMouse = {
    name: '子鼠',
    gender: '男',
    skills: ['JavaScript', 'Node.js'],
    interests: ['音乐', '足球', '编程']
};

const App = (
    <div>
        <h1>{name}</h1>
        <p>{title}</p>
        <div>{n}</div>
        <div>{arr}</div>
        <div>{d1.toString()}</div>
        {/*<ul>
            {Object.keys(obj1).map(k => {
                return <li>{`${k} = ${obj1[k]}`}</li>;
            })}
        </ul>*/}
        <ul>
            {Object.keys(obj1).map(k => <li>{`${k} = ${obj1[k]}`}</li>)}
        </ul>
        <div>{true}</div>
        <div>{null}</div>
        <div>{undefined}</div>
        <hr/>
        <div id="div1"></div>
        <div id={"div1"}></div>
        <div id={id}></div>
        <hr/>
        <div style={style1}></div>

        <hr/>

        <ul>
          	{zMouse.skills.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
        
        <hr/>

        {getSkills()}
    </div>
);

function getSkills() {
    return (
        <ul>
            {zMouse.skills.map(skill => <li>{skill}</li>)}
        </ul>
    );
}

console.log( App );

ReactDOM.render(
    <div>
        {App}
    </div>,
    document.getElementById('app')
);