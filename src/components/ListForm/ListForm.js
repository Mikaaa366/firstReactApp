import styles from './ListForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedux';


const ListForm = props => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList ({title, description , listId: props.listId}))
        setTitle('');
        setDescription('');
    };


    return (
        <form className={styles.listForm} onSubmit={handleSubmit}>
          Titile :<TextInput value={title} onChange={e=> setTitle(e.target.value)} />
          Description: <TextInput value={description} onChange={e=> setDescription(e.target.value)} />
          <Button>ADD LIST</Button>
        </form>
    )
}

export default ListForm;