
import './App.css';
import Customer from './components/Customer';
// import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import { TableHead } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import {TableRow} from '@mui/material';
import {TableCell} from '@mui/material';
// import { withTheme } from '@emotion/react';

/* const styles=theme=>({
  root:{
    innerWidth:'100%',
    marginTop: theme.spacing.unit*3,
    overflowX:"auto"
  },
  table:{
    minWidth:1080
  }
  
}) */

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
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>사진</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
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
        </TableBody>
        
       </Table>
    </div>
    
  );
}

export default App;
