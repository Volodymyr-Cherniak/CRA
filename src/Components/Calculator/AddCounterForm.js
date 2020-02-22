import React, {useState} from 'react';

const AddCounterForm = (props) => {

  const [name, setName] = useState('');

  const [value, setValue] = useState('');

  const onSubmit = () => {
    props.onSubmit(name, value);
    setValue('');
    setName('');
  };



  return (
    <div className='addCounterform'>
      <input
        placeholder='Set Name'
        type='text'
        name='name'
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        placeholder='Set Value'
        type='text'
        name='value'
        value={value}
        onChange={e => setValue(e.target.value)}
      />

      <button onClick={() => onSubmit(name, value)}>Add</button>
    </div>
  );
};

export default AddCounterForm;
