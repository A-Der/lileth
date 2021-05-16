import React, { useEffect } from 'react'
import Form from './components/form/Form';
import { useDispatch } from 'react-redux';
import { getPosts } from './_actions/posts';

function App() {
const dispatch = useDispatch();
useEffect(() => {
dispatch(getPosts);
}, [dispatch])
return (
<>
<Form />
</>
);
}
export default App;