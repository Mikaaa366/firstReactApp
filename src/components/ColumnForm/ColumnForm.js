import styles from '../ColumnForm/ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');

    const handleSubmit = e => {
      e.preventDefault();
      props.action({ title: title, icon: icon });
      setTitle('');
      setIcon('');
    }; 
	return (
      <form className={styles.columnForm} onSubmit={handleSubmit} >
        Title:  <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
        Icon: <TextInput type="text" value={icon} onChange={e => setIcon(e.target.value)}  />
        <Button>ADD COLUMN</Button>
      </form>
	);
};

export default ColumnForm;