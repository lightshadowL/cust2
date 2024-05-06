
import './App.css';
import Customer from './components/Customer';

const customers=[
  {
  'id':1,
  'image':'/img/new-s-1.jpg',
  'name':'홍길숙',
  'birthday':'961222',
  'gender':'남성',
  'job':'대학생'
},
{
  'id':2,
  'image':'/img/new-s-2.jpg',
  'name':'이길동',
  'birthday':'900101',
  'gender':'남성',
  'job':'회사원'
},
{
  'id':3,
  'image':'/img/new-s-3.jpg',
  'name':'김주부',
  'birthday':'850205',
  'gender':'여성',
  'job':'주부'
}
]
function App() {
  return (
    <div>
      {
        customers.map(c =>{
          return(
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          )
        })
      }
    </div>
    
  );
}

export default App;
