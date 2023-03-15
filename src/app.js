const root = document.getElementById('root');
const ClickMe = (param) => {
    alert(param)
}

function App(){
    const [count, setCount] = React.useState(0);
    const [click, setClick] = React.useState(false);
    React.useEffect(() => {
        console.log(document.getElementById('namess'));
    },[]);
    return (
        <>
            <button id="namess" onClick={()=>setCount(count+1)}>+</button>
            <span>{count}</span>
            <button onClick={()=>setCount(count-1)}>-</button>
            <button onClick={()=>setCount(0)}>Reset</button>
            <button onClick={()=>setClick(true)}>get clicked!</button>
        </>
    )

}
function SearchBar(){
    React.useEffect(()=>{
        const input = document.getElementById('input');
        const input1 = document.getElementById('input1');
        const output = document.getElementById('output');
        console.log(input.innerText)
    });
    const changeValue = ()=>{
        output.innerText = input.value;
    }
    const changeColor = ()=>{
        output.style.color = input1.value;
    }
    return (
        <>
            <input id="input" placeholder="Change the color" onKeyUp={()=>changeValue()}></input>
            <input id="input1" placeholder="Change the value" onKeyUp={()=>changeColor()}></input>
            <h2 id="output"></h2>
        </>
    )
}
function SearchFilter(){
    React.useEffect(()=>{
        const input = document.getElementById('input');
        const output = document.getElementById('output');
    });
    
    function SearchIt(){
        const anotherInput = input.value;
        const ul = document.getElementById('myUl');
        const li = ul.getElementsByTagName('li');
        output.innerText = input.value;
        var i;
        for(i=0;i<li.length;i++){
            const text = li[i].innerText;
            if(text.indexOf(anotherInput) > -1){
                li[i].style.display = "";
            }
            else{
                li[i].style.display = "none";
            }
        }
    }
    function changeColor(){
        const input_color = document.getElementById('inputcolor');
        output.style.color = input_color.value;
    }
    return (
        <>
            <input id="input" placeholder="Search Item.." onKeyUp={()=>SearchIt()}></input>
            <input id="inputcolor" placeholder="Change the color.." onKeyUp={()=>changeColor()}></input>
            <h2 id="output"></h2>
            <ul id='myUl'>
                <li>apple</li>
                <li>banana</li>
                <li>berry</li>
                <li>strawberry</li>
                <li>blueberry</li>
                <li>cerry</li>
                <li>dragonfruits</li>
            </ul>
        </>
    )
}

function Conditional(){
    [login, setlogin] = React.useState(false);
    if(login){
        return (
            <>
                <h1>Makasih udah Bayar</h1>
                <button onClick={()=>setlogin(false)}>Keluar</button>
            </>
        )
    }
    return (
        <>
            <h1>Bayar dulu NGAB!</h1>
            <button onClick={()=>setlogin(true)}>Bayar</button>
        </>
    );
}
//? Conditional Without State, tidak berfokus pada state
function NewConditional(){
    [login, setlogin] = React.useState(false)
    return(
        <>
            {login ? <h1>Aman, udah login Ngab!</h1> : <h1>Login dulu Ngab!</h1>}
            {login ? <button onClick={()=>setlogin(false)}>Logout</button> : <button onClick={()=>setlogin(true)}>Login</button>}
        </>
    )
}

function MapLearn(){
    const fruits = ["Apple", "Manggo", "Banana", "Berry"];
    var i;
    return (
        <>
            <ul>
                {fruits.map((fruit)=>{
                    return <li key={fruit}>{fruit}</li>;
                })}
            </ul>
        </>
    )
}

function FormLearn(){
    const [nama, setName] = React.useState('');
    function ketikaSubmit(event){
        event.preventDefault();

        console.log(nama)
    }
    return(
        <form onSubmit={ketikaSubmit}>
            <div>
                <label>Name :</label>
                <input placeholder="Masukkan Nama..." name="nama" onChange={(event)=>{
                    setName(event.target.value)
                }}></input>
            </div>
            <button>Send</button>
        </form>
    )
}

function GetApi(){
    const [data, setData] = React.useState([])
    const [loadData, setLoadData] = React.useState(true)
    React.useState(()=>{
        async function getData(){
            const request = await fetch('https://api.spaceflightnewsapi.net/v3/blogs');
            const response = await request.json()
            
            setData(response);
            setLoadData(false);
        }
        getData();
    },[])
    return(
        <> 
            <h1>Fetch Data</h1>
            <ul>
                {loadData ? (<p>Loading Data...</p>) 
                : (data.map((value)=>{
                    return <li key={value.id}>{value.title}</li>
                }))
                }
            </ul>
        </>
    )
}

function TodoListVanilla(){

    function addValue(){
        const view = document.getElementById('view');
        const li = document.createElement('li');
        const input = document.getElementById('input').value;
        var node = document.createTextNode(input)
        li.appendChild(node);
        view.appendChild(li);
    }
    return (
        <>
            <input id="input" placeholder="Tambahkan kegiatan"></input>
            <button onClick={()=>addValue()}>Tambah</button>
            <ul id="view">
            </ul>
        </>
    )
}

function TodoList(){
    const [activity, setActivity] = React.useState('');
    const [todolist, setTodolist] = React.useState([]);
    const [editTodo, setEditTodo] = React.useState({});

    function generateId(){
        return Date.now();
    }
    function print(event){
        event.preventDefault();
        if(!activity){
            return;
        }
        if(editTodo.id){
            const updatedTodo = {
                ... editTodo,
                activity
            };
            const getIndex = todolist.findIndex((value)=>{
                return editTodo.id === value.id;
            })

            const updatedTodos = [... todolist];
            updatedTodos[getIndex] = updatedTodo;
            setTodolist(updatedTodos);
             
            setEditTodo({});
            setActivity('');
            return;
        }

        setTodolist([... todolist, {
            id: generateId(),
            activity,
            progress: false,
        }])
        setActivity('');
    }
    function deleteFromList(idTodo){
        const filteredTodolist = todolist.filter((value)=>{
            return value.id !== idTodo;
        });
        setTodolist(filteredTodolist)
        // console.log(filteredTodolist)
    }

    function editData(todo){
        setActivity(todo.activity);
        setEditTodo(todo);
        // const filteredTodolist = todolist.filter((value)=>{
        //     return value.id === idTodo;
        // });
        // filteredTodolist[0].activity = "hapus"
        // setTodolist(todolist)
    }

    function gotCheck(todo){
        const updatedCheckbox = {
            ... todo,
            progress: todo.progress ? false : true,
        };

        const getIndex = todolist.findIndex((value)=>{
            return todo.id === value.id;
        })

        const updatedTodos = [... todolist];
        updatedTodos[getIndex] = updatedCheckbox;
        setTodolist(updatedTodos);
    }
    return(
        <>
            <h1>Todo List</h1>
            <form onSubmit={print}>
                <input value={activity} placeholder="add to do list" onChange={(event)=>{
                    setActivity(event.target.value);
                }}></input>
                <button type="submit">
                {editTodo.id ? 'Simpan Perubahan' 
                : 'Tambah'}
                </button>
            </form>

            <ul>
                {todolist.map((value)=>{
                    return (
                        <>
                            <li key={value.id}>
                            <input type="checkbox" onClick={gotCheck.bind(this, value)}></input>
                            {value.activity}{value.progress ? ('(Selesai)') : ('(Belum Selesai)')}
                                <button onClick={()=>deleteFromList(value.id)}>hapus</button>
                                <button onClick={editData.bind(this, value)}>edit</button>
                            </li>
                        </>
                    )
                })}
            </ul>
        </>
    )
}

function LearnToDoList(){
    const [habbits, setHabbits] = React.useState('');
    const [listHabbits, setListHabbits] = React.useState([]);
    const [editHabbits, setEditHabbits] = React.useState({});
    
    function generateId(){
        return Date.now();
    }
    function ShowHabbits(event){
        event.preventDefault();
        if(!habbits){
            return;
        }
        if(editHabbits.id){
            const editedHabbits = {
                ... editHabbits,
                habbits,
            };
            const indexOfHabbits = listHabbits.findIndex((value)=>{
                return value.id === editHabbits.id;
            });
    
            const newListHabbits = [... listHabbits];
            newListHabbits[indexOfHabbits] = editedHabbits;
            setListHabbits(newListHabbits);

            setEditHabbits({});
            setHabbits('');
            return;
        }

        setListHabbits([... listHabbits, {
            id: generateId(),
            habbits,
            progress:false,
        }]);
        setHabbits('');
    }

    function deleteHabbitsHandler(value){
        const selectedHabbits = value.id;
        const filteredListHabbits = listHabbits.filter((itemHabbits)=>{
            return itemHabbits.id !== selectedHabbits;
        })
        setListHabbits(filteredListHabbits);
    }

    function editHabbitsHandler(value){
        const selectedHabbits = value.habbits;
        setHabbits(selectedHabbits);
        setEditHabbits(value);

        return;
    }

    function progressHabbitsHandler(value){
        const editedHabbits = {
            ... value,
            progress: value.progress ? false : true
        };
        const indexOfHabbits = listHabbits.findIndex((itemHabbits)=>{
            return itemHabbits.id === value.id;
        });
        const newListHabbits = [... listHabbits];
        newListHabbits[indexOfHabbits] = editedHabbits;
        setListHabbits(newListHabbits);
        // console.log(listHabbits);

    }

    return (
        <div className="container">
            <h1 className="h1-a">Habit Tracker</h1>
            <form onSubmit={ShowHabbits}>
                <input 
                className="input-awal"
                value={habbits}
                type="text" 
                placeholder="Track your habit..."
                onChange={(habbits)=>{
                    setHabbits(habbits.target.value);
                }} ></input>
                <button type="submit" className="button-1">
                {editHabbits.id ? 'Save' 
                : 'Add'}
                </button>
            </form>
                <ul>
                <hr className="garis"></hr>
                    {/* <li>
                    <input className="checkbox" type="checkbox" onChange={()=>progressHabbitsHandler(value)}></input>
                    <span className="habbits">Migel</span>
                    <span className="status-onp">Belum Selesai</span>
                    <div className="buttonsss">
                        <button className="but-del" onClick={()=>deleteHabbitsHandler(value)}>Delete</button>
                        <button className="but-edit" onClick={()=>editHabbitsHandler(value)}>Edit</button>
                    </div>
                    </li> */}
                    {listHabbits.map((value)=>{
                        return (
                            <div className="container-li">
                                <li key={value.id}>
                                    <input className="checkbox" type="checkbox" onChange={()=>progressHabbitsHandler(value)}></input>
                                    <span className="habbits">{value.habbits}</span>
                                    {value.progress ? <span className="status-onp">done!</span> : <span className="status-done">not done yet!</span>}
                                    <div className="buttonsss">
                                        <button className="but-del" onClick={()=>deleteHabbitsHandler(value)}>Delete</button>
                                        <button className="but-edit" onClick={()=>editHabbitsHandler(value)}>Edit</button>
                                    </div>
                                </li>
                                
                            </div>
                        )
                    })}
                </ul>
        </div>
    )
}
ReactDOM.render(<LearnToDoList />, root);