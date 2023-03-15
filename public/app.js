const root = document.getElementById('root');
const ClickMe = param => {
  alert(param);
};
function App() {
  const [count, setCount] = React.useState(0);
  const [click, setClick] = React.useState(false);
  React.useEffect(() => {
    console.log(document.getElementById('namess'));
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    id: "namess",
    onClick: () => setCount(count + 1)
  }, "+"), /*#__PURE__*/React.createElement("span", null, count), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count - 1)
  }, "-"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(0)
  }, "Reset"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setClick(true)
  }, "get clicked!"));
}
function SearchBar() {
  React.useEffect(() => {
    const input = document.getElementById('input');
    const input1 = document.getElementById('input1');
    const output = document.getElementById('output');
    console.log(input.innerText);
  });
  const changeValue = () => {
    output.innerText = input.value;
  };
  const changeColor = () => {
    output.style.color = input1.value;
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
    id: "input",
    placeholder: "Change the color",
    onKeyUp: () => changeValue()
  }), /*#__PURE__*/React.createElement("input", {
    id: "input1",
    placeholder: "Change the value",
    onKeyUp: () => changeColor()
  }), /*#__PURE__*/React.createElement("h2", {
    id: "output"
  }));
}
function SearchFilter() {
  React.useEffect(() => {
    const input = document.getElementById('input');
    const output = document.getElementById('output');
  });
  function SearchIt() {
    const anotherInput = input.value;
    const ul = document.getElementById('myUl');
    const li = ul.getElementsByTagName('li');
    output.innerText = input.value;
    var i;
    for (i = 0; i < li.length; i++) {
      const text = li[i].innerText;
      if (text.indexOf(anotherInput) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
  function changeColor() {
    const input_color = document.getElementById('inputcolor');
    output.style.color = input_color.value;
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
    id: "input",
    placeholder: "Search Item..",
    onKeyUp: () => SearchIt()
  }), /*#__PURE__*/React.createElement("input", {
    id: "inputcolor",
    placeholder: "Change the color..",
    onKeyUp: () => changeColor()
  }), /*#__PURE__*/React.createElement("h2", {
    id: "output"
  }), /*#__PURE__*/React.createElement("ul", {
    id: "myUl"
  }, /*#__PURE__*/React.createElement("li", null, "apple"), /*#__PURE__*/React.createElement("li", null, "banana"), /*#__PURE__*/React.createElement("li", null, "berry"), /*#__PURE__*/React.createElement("li", null, "strawberry"), /*#__PURE__*/React.createElement("li", null, "blueberry"), /*#__PURE__*/React.createElement("li", null, "cerry"), /*#__PURE__*/React.createElement("li", null, "dragonfruits")));
}
function Conditional() {
  [login, setlogin] = React.useState(false);
  if (login) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Makasih udah Bayar"), /*#__PURE__*/React.createElement("button", {
      onClick: () => setlogin(false)
    }, "Keluar"));
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Bayar dulu NGAB!"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setlogin(true)
  }, "Bayar"));
}
//? Conditional Without State, tidak berfokus pada state
function NewConditional() {
  [login, setlogin] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, login ? /*#__PURE__*/React.createElement("h1", null, "Aman, udah login Ngab!") : /*#__PURE__*/React.createElement("h1", null, "Login dulu Ngab!"), login ? /*#__PURE__*/React.createElement("button", {
    onClick: () => setlogin(false)
  }, "Logout") : /*#__PURE__*/React.createElement("button", {
    onClick: () => setlogin(true)
  }, "Login"));
}
function MapLearn() {
  const fruits = ["Apple", "Manggo", "Banana", "Berry"];
  var i;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ul", null, fruits.map(fruit => {
    return /*#__PURE__*/React.createElement("li", {
      key: fruit
    }, fruit);
  })));
}
function FormLearn() {
  const [nama, setName] = React.useState('');
  function ketikaSubmit(event) {
    event.preventDefault();
    console.log(nama);
  }
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: ketikaSubmit
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Name :"), /*#__PURE__*/React.createElement("input", {
    placeholder: "Masukkan Nama...",
    name: "nama",
    onChange: event => {
      setName(event.target.value);
    }
  })), /*#__PURE__*/React.createElement("button", null, "Send"));
}
function GetApi() {
  const [data, setData] = React.useState([]);
  const [loadData, setLoadData] = React.useState(true);
  React.useState(() => {
    async function getData() {
      const request = await fetch('https://api.spaceflightnewsapi.net/v3/blogs');
      const response = await request.json();
      setData(response);
      setLoadData(false);
    }
    getData();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Fetch Data"), /*#__PURE__*/React.createElement("ul", null, loadData ? /*#__PURE__*/React.createElement("p", null, "Loading Data...") : data.map(value => {
    return /*#__PURE__*/React.createElement("li", {
      key: value.id
    }, value.title);
  })));
}
function TodoListVanilla() {
  function addValue() {
    const view = document.getElementById('view');
    const li = document.createElement('li');
    const input = document.getElementById('input').value;
    var node = document.createTextNode(input);
    li.appendChild(node);
    view.appendChild(li);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
    id: "input",
    placeholder: "Tambahkan kegiatan"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => addValue()
  }, "Tambah"), /*#__PURE__*/React.createElement("ul", {
    id: "view"
  }));
}
function TodoList() {
  const [activity, setActivity] = React.useState('');
  const [todolist, setTodolist] = React.useState([]);
  const [editTodo, setEditTodo] = React.useState({});
  function generateId() {
    return Date.now();
  }
  function print(event) {
    event.preventDefault();
    if (!activity) {
      return;
    }
    if (editTodo.id) {
      const updatedTodo = {
        ...editTodo,
        activity
      };
      const getIndex = todolist.findIndex(value => {
        return editTodo.id === value.id;
      });
      const updatedTodos = [...todolist];
      updatedTodos[getIndex] = updatedTodo;
      setTodolist(updatedTodos);
      setEditTodo({});
      setActivity('');
      return;
    }
    setTodolist([...todolist, {
      id: generateId(),
      activity,
      progress: false
    }]);
    setActivity('');
  }
  function deleteFromList(idTodo) {
    const filteredTodolist = todolist.filter(value => {
      return value.id !== idTodo;
    });
    setTodolist(filteredTodolist);
    // console.log(filteredTodolist)
  }

  function editData(todo) {
    setActivity(todo.activity);
    setEditTodo(todo);
    // const filteredTodolist = todolist.filter((value)=>{
    //     return value.id === idTodo;
    // });
    // filteredTodolist[0].activity = "hapus"
    // setTodolist(todolist)
  }

  function gotCheck(todo) {
    const updatedCheckbox = {
      ...todo,
      progress: todo.progress ? false : true
    };
    const getIndex = todolist.findIndex(value => {
      return todo.id === value.id;
    });
    const updatedTodos = [...todolist];
    updatedTodos[getIndex] = updatedCheckbox;
    setTodolist(updatedTodos);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Todo List"), /*#__PURE__*/React.createElement("form", {
    onSubmit: print
  }, /*#__PURE__*/React.createElement("input", {
    value: activity,
    placeholder: "add to do list",
    onChange: event => {
      setActivity(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, editTodo.id ? 'Simpan Perubahan' : 'Tambah')), /*#__PURE__*/React.createElement("ul", null, todolist.map(value => {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("li", {
      key: value.id
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      onClick: gotCheck.bind(this, value)
    }), value.activity, value.progress ? '(Selesai)' : '(Belum Selesai)', /*#__PURE__*/React.createElement("button", {
      onClick: () => deleteFromList(value.id)
    }, "hapus"), /*#__PURE__*/React.createElement("button", {
      onClick: editData.bind(this, value)
    }, "edit")));
  })));
}
function LearnToDoList() {
  const [habbits, setHabbits] = React.useState('');
  const [listHabbits, setListHabbits] = React.useState([]);
  const [editHabbits, setEditHabbits] = React.useState({});
  function generateId() {
    return Date.now();
  }
  function ShowHabbits(event) {
    event.preventDefault();
    if (!habbits) {
      return;
    }
    if (editHabbits.id) {
      const editedHabbits = {
        ...editHabbits,
        habbits
      };
      const indexOfHabbits = listHabbits.findIndex(value => {
        return value.id === editHabbits.id;
      });
      const newListHabbits = [...listHabbits];
      newListHabbits[indexOfHabbits] = editedHabbits;
      setListHabbits(newListHabbits);
      setEditHabbits({});
      setHabbits('');
      return;
    }
    setListHabbits([...listHabbits, {
      id: generateId(),
      habbits,
      progress: false
    }]);
    setHabbits('');
  }
  function deleteHabbitsHandler(value) {
    const selectedHabbits = value.id;
    const filteredListHabbits = listHabbits.filter(itemHabbits => {
      return itemHabbits.id !== selectedHabbits;
    });
    setListHabbits(filteredListHabbits);
  }
  function editHabbitsHandler(value) {
    const selectedHabbits = value.habbits;
    setHabbits(selectedHabbits);
    setEditHabbits(value);
    return;
  }
  function progressHabbitsHandler(value) {
    const editedHabbits = {
      ...value,
      progress: value.progress ? false : true
    };
    const indexOfHabbits = listHabbits.findIndex(itemHabbits => {
      return itemHabbits.id === value.id;
    });
    const newListHabbits = [...listHabbits];
    newListHabbits[indexOfHabbits] = editedHabbits;
    setListHabbits(newListHabbits);
    // console.log(listHabbits);
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "h1-a"
  }, "Habit Tracker"), /*#__PURE__*/React.createElement("form", {
    onSubmit: ShowHabbits
  }, /*#__PURE__*/React.createElement("input", {
    className: "input-awal",
    value: habbits,
    type: "text",
    placeholder: "Track your habit...",
    onChange: habbits => {
      setHabbits(habbits.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "button-1"
  }, editHabbits.id ? 'Save' : 'Add')), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("hr", {
    className: "garis"
  }), listHabbits.map(value => {
    return /*#__PURE__*/React.createElement("div", {
      className: "container-li"
    }, /*#__PURE__*/React.createElement("li", {
      key: value.id
    }, /*#__PURE__*/React.createElement("input", {
      className: "checkbox",
      type: "checkbox",
      onChange: () => progressHabbitsHandler(value)
    }), /*#__PURE__*/React.createElement("span", {
      className: "habbits"
    }, value.habbits), value.progress ? /*#__PURE__*/React.createElement("span", {
      className: "status-onp"
    }, "done!") : /*#__PURE__*/React.createElement("span", {
      className: "status-done"
    }, "not done yet!"), /*#__PURE__*/React.createElement("div", {
      className: "buttonsss"
    }, /*#__PURE__*/React.createElement("button", {
      className: "but-del",
      onClick: () => deleteHabbitsHandler(value)
    }, "Delete"), /*#__PURE__*/React.createElement("button", {
      className: "but-edit",
      onClick: () => editHabbitsHandler(value)
    }, "Edit"))));
  })));
}
ReactDOM.render( /*#__PURE__*/React.createElement(LearnToDoList, null), root);